<template>
    <div class="box bookkeeping-progress">
        <h3 class="">
            {{ $t('BOOKKEEPING.PROCESS_TITLE') }}
        </h3>
        <div class="bookkeeping-progress-bar">
            <p>
                {{ percentage }} {{ $t('BOOKKEEPING.COMPLETED') }}
            </p>
            <b-progress
                class="mobile-step"
                type="is-primary"
                :value="(process.previous.length + 1) * 10"
                size="is-small"
            />
        </div>
        <div
            v-if="process.current.key === 'payment_step'"
            class="bookkeeping-progress-description"
        >
            <p>
                {{ $t('BOOKKEEPING.PAYMENT_DESCRIPTION', {price: $f24.convertToLocaleString(Number(process.current.payment.price)) }) }}
            </p>

            <b-button
                tag="a"
                target="_blank"
                :href="process.current.payment_url"
                type="is-primary is-padding-small"
                rounded
            >
                {{ $t('BOOKKEEPING.PAYMENT_LINK') }}
            </b-button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiButton from '@/components/Global/UiButton/UiButton.vue';

    @Component({
        components: {
            UiButton
        }
    })

    export default class BookkeepingProgress extends Vue {
        @Prop() process!: any;

        get percentage() {
            const next = (this.process.next && this.process.next.length) || 0;
            const total = this.process.previous.length + 1 + next;
            if (this.process.previous.length + 1 === total) return '100%';
            return `${((this.process.previous.length + 1) / total * 100).toFixed()} %`;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
    @import "~css/_tables";

    .bookkeeping-progress {

        h3 {
            color: $color-blue;
            @include fs-medium;
            margin-bottom: $margin-default;
        }

        .ui-icon {
            margin: 0 2 * $margin-default 0 0;
            @include breakpoint-up(sm) {
                margin: 0 3 * $margin-default 0 0;
            }
            flex-shrink: 0;
        }

        .button {
            margin-top: 2 * $margin-default;
        }
    }

    .bookkeeping-progress-bar {
        p {
            color: $color-blue-gray-02;
            margin-bottom: 2 * $margin-default;
        }
    }

    .bookkeeping-progress-description {
        margin: 3 * $margin-default 0;
    }

</style>

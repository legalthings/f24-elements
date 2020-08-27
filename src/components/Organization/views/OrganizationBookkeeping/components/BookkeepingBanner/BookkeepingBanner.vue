<template>
    <div
        class="box bookkeeping-banner"
        v-on="$listeners"
    >
        <UiIcon
            v-if="$vmq.md || $vmq.lg"
            icon="bookkeeping"
            size="98"
            type="service"
        />
        <div>
            <h3>
                <UiIcon
                    v-if="$vmq.sm || $vmq.xs"
                    icon="bookkeeping"
                    size="60"
                    type="service"
                />
                {{ $t('BOOKKEEPING.BANNER_TITLE') }}
            </h3>
            <p>
                {{ $t('BOOKKEEPING.BANNER_DESCRIPTION') }}
            </p>
        </div>
        <b-button
            type="is-primary is-padding-small"
            rounded
            @click="action"
        >
            {{ $t('BOOKKEEPING.CALL_TO_ACTION') }}
        </b-button>
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

    export default class BookkeepingBanner extends Vue {
        @Prop() action!: void;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
    @import "~css/_tables";

    .bookkeeping-banner {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include breakpoint-down(sm) {
            flex-direction: column;
        }

        h3 {
            color: $color-blue;
            @include fs-medium;
            margin-bottom: $margin-default;
            display: flex;

            @include breakpoint-down(sm) {
                align-items: center;
                justify-content: center;
                align-content: center;
            }
        }

        .ui-icon {
            margin: 0 2 * $margin-default 0 0;
            @include breakpoint-up(sm) {
                margin: 0 3 * $margin-default 0 0;
            }
            flex-shrink: 0;
        }

        .button {
            @include breakpoint-down(sm) {
                margin-top: 2 * $margin-default;
            }
        }
    }

</style>

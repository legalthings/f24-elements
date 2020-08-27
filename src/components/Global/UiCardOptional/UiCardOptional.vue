<template>
    <div
        :class="{'has-icon-left': leftIcon, 'has-best-seller': bestSeller}"
        class="card-wrapper"
    >
        <div
            :class="{'has-icon-left': leftIcon}"
            class="card"
        >
            <BestSeller
                v-if="bestSeller"
                :is-optional="leftIcon"
            />

            <div
                v-if="leftIcon"
                class="card-icon-left"
            >
                <slot name="left-icon" />
            </div>
            <div class="card-content">
                <div class="card-icon">
                    <slot name="icon" />
                </div>
                <h3 class="card-title">
                    <slot name="title" />
                </h3>
                <p class="card-description">
                    <slot name="description" />
                </p>
                <div class="card-action">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import BestSeller from '@/components/Global/BestSeller/BestSeller.vue';

    @Component({
        components: { BestSeller }
    })
    export default class UiCardOptional extends Vue {
        @Prop() leftIcon!: string;
        @Prop() bestSeller!: string;
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .card-wrapper {
        width: 320px;
        height: 100%;

        &.has-best-seller {
            @include breakpoint-up(sm) {
                transform: translateY(-20px);

                .card {
                    position: absolute;
                    width: 320px;
                    height: 110%;
                }
            }
        }
    }

    .card {
        border-radius: 16px;
        position: relative;
        height: 100%;

        @include breakpoint-up(sm) {
            box-shadow: 0 24px 32px -16px rgba(0, 0, 0, 0.2);
        }
    }

    .has-icon-left {
        display: flex;
        flex-direction: row;

        .card-title {
            text-align: left;
        }

        .card-content {
            align-items: flex-start;
            padding: $margin-default 0 $margin-default;
        }

        .card-description {
            text-align: left;
            margin-top: $margin-default;
        }
    }

    .card-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: $margin-default 0 (10 * $margin-default);

        @include breakpoint-up(sm) {
            padding: (3 * $margin-default) 0 (12 * $margin-default);
        }
    }

    .card-icon-left {
        margin: auto;
    }

    .card-icon-left {
        margin: $margin-default 2 * $margin-default;
        max-width: 85px;
        min-width: 50px;
    }

    .card-icon {
        max-width: 110px;

        @include breakpoint-up(sm) {
            max-width: 140px;
        }
    }

    .card-title {
        max-width: 80%;
        text-align: center;
        color: $color-blue;
    }

    .card-description {
        max-width: 90%;
        margin-top: 20px;
        text-align: center;
    }

    .card-action {
        position: absolute;
        bottom: 3 * $margin-default;

        @include breakpoint-up(sm) {
            bottom: 5 * $margin-default;
        }
    }

    .best-seller {
        position: absolute;

        .has-icon-left & {
            right: 0;
        }
    }
</style>

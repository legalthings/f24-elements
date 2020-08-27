<template>
    <div
        :class="{'is-best-seller': bestSeller}"
        class="card-wrapper"
    >
        <div class="card">
            <BestSeller
                v-if="bestSeller"
                :is-mobile-right="true"
            />

            <div class="card-icon-left is-hidden-desktop is-hidden-tablet">
                <slot name="icon" />
            </div>

            <div
                :class="{'has-action': hasAction}"
                class="card-content"
            >
                <div class="card-icon is-hidden-mobile">
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
    export default class UiCard extends Vue {
        @Prop() hasAction!: boolean;
        @Prop() bestSeller!: boolean;
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    $card-width: 320px;

    .card-wrapper {
        width: $card-width;
        height: 100%;

        &.is-best-seller {
            width: $card-width + 14px;
        }

        &.is-best-seller {
            @include breakpoint-up(sm) {
                transform: translateY(-10px);
                height: 100%;

                /*.card {*/
                // don't know why this is here?
                /*position: absolute;*/
                /*width: 320px;*/
                /*height: 110%;*/
                /*}*/
            }
        }
    }

    .card {
        height: 100%;
        position: relative;
        border-radius: 16px;

        @include breakpoint-up(sm) {
            box-shadow: 0 24px 32px -16px rgba(0, 0, 0, 0.2);
        }

        @include breakpoint-down(sm) {
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
    }

    .card-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: $margin-default 0 (4 * $margin-default);

        @include breakpoint-up(sm) {
            padding: (3 * $margin-default) 0;

            &.has-action {
                padding-bottom: 90px;
            }
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
        max-width: 84%;
        margin-top: 20px;
        text-align: center;
    }

    .card-action {
        width: 100%;
        display: flex;
        flex-flow: row-reverse;
        padding-right: 2 * $margin-default;

        @include breakpoint-up(sm) {
            position: absolute;
            justify-content: center;
            bottom: 3.5 * $margin-default;
        }

        @include breakpoint-up(sm) {
            .is-best-seller & {
                bottom: 5.2 * $margin-default;
            }
        }
    }

    .best-seller {
        position: absolute;

        @include breakpoint-down(sm) {
            right: 0;
        }
    }
</style>

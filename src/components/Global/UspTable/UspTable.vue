<template>
    <div class="usp-table box">
        <div class="line first-line-items">
            <div class="first">
                <h2 class="is-hidden-mobile">
                    Vergelijk onze pakketten
                </h2>
            </div>
            <div class="line-item">
                <UiIcon
                    icon="standaard-oprichting"
                    size="67"
                    type="service"
                />
                <div class="line-item-label">
                    <p>
                        Minimum Pakket
                    </p>
                    <b-button
                        class="is-mobile"
                        outlined
                        rounded
                        type="is-primary"
                    >
                        Kies dit pakket
                    </b-button>
                </div>
            </div>
            <div class="line-item">
                <div class="best-seller">
                    <span class="is-hidden-mobile">MEEST GEKOZEN</span>
                    <span class="is-hidden-tablet">TIP</span>
                </div>
                <UiIcon
                    icon="snelle-oprichting"
                    size="67"
                    type="service"
                />
                <div class="line-item-label">
                    <p>
                        Plus Pakket
                    </p>
                    <b-button
                        class="is-mobile"
                        outlined
                        rounded
                        type="is-primary"
                    >
                        Kies dit pakket
                    </b-button>
                </div>
            </div>
            <div class="line-item">
                <UiIcon
                    icon="spoed-oprichting"
                    size="67"
                    type="service"
                />
                <div class="line-item-label">
                    <p>
                        Compleet Pakket
                    </p>
                    <b-button
                        class="is-mobile"
                        outlined
                        rounded
                        type="is-primary"
                    >
                        Kies dit pakket
                    </b-button>
                </div>
            </div>
        </div>

        <div class="line-rows">
            <div class="line">
                <div class="first">
                    <p>
                        Standaard oprichtingstermijn
                        <span>
                            Je kunt in de volgende stap ook een kortere termijn kiezen
                        </span>
                    </p>
                </div>
                <div class="line-item">
                    14 dagen
                </div>
                <div class="line-item">
                    7 dagen
                </div>
                <div class="line-item">
                    3 dagen
                </div>
            </div>

            <div class="line">
                <div class="first">
                    <p>
                        ABN AMRO Bankrekening
                        <span>
                            Consectetur adipiscing elit. Sed sodales nibh id dapibus auctor. Donec tempor a ex a tincidunt.
                        </span>
                    </p>
                </div>
                <div class="line-item">
                    -
                </div>
                <div class="line-item">
                    <UiIcon icon="check" />
                </div>
                <div class="line-item">
                    <UiIcon icon="check" />
                </div>
            </div>

            <div class="line">
                <div class="first">
                    <p>
                        Alle notariele kosten inbegrepen
                        <span>
                            Donec faucibus vel urna et mollis.
                        </span>
                    </p>
                </div>
                <div class="line-item">
                    <UiIcon icon="check" />
                </div>
                <div class="line-item">
                    <UiIcon icon="check" />
                </div>
                <div class="line-item">
                    <UiIcon icon="check" />
                </div>
            </div>

            <div class="line">
                <div class="first">
                    <p>
                        Contractenpakket
                        <span>
                            In hac habitasse platea dictumst.
                        </span>
                    </p>
                </div>
                <div class="line-item">
                    -
                </div>
                <div class="line-item">
                    -
                </div>
                <div class="line-item">
                    <UiIcon icon="check" />
                </div>
            </div>

            <div class="line">
                <div class="first">
                    <p>
                        Begeleiding door fiscalisten
                        <span>
                            Nulla vitae ultricies magna. Aenean arcu urna, vehicula a odio sit amet, imperdiet suscipit libero.
                        </span>
                    </p>
                </div>
                <div class="line-item">
                    -
                </div>
                <div class="line-item">
                    -
                </div>
                <div class="line-item">
                    <UiIcon icon="check" />
                </div>
            </div>
        </div>
        <div class="line is-hidden-mobile">
            <div class="first" />
            <div class="line-item">
                <b-button
                    class="is-mobile"
                    outlined
                    rounded
                    type="is-primary"
                >
                    Kies dit pakket
                </b-button>
            </div>
            <div class="line-item">
                <b-button
                    class="is-mobile"
                    outlined
                    rounded
                    type="is-primary"
                >
                    Kies dit pakket
                </b-button>
            </div>
            <div class="line-item">
                <b-button
                    class="is-mobile"
                    outlined
                    rounded
                    type="is-primary"
                >
                    Kies dit pakket
                </b-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class UspTable extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .usp-table {
        box-shadow: 0 2px 6px 0 rgba($color-gray-100, .05);
        padding-top: 0;
        padding-bottom: 0;

        @include breakpoint-down(md) {
            border-radius: 0;
        }
    }

    .line {
        display: flex;
        align-items: center;

        &.first-line-items {
            @include breakpoint-down(md) {
                /deep/ .ui-icon {
                    width: 34px !important;
                    height: 34px !important;
                }
            }
        }
    }

    .first {
        flex: 3;

        p {
            color: $color-blue-darker;
            font-weight: bold;
            max-width: 80%;

            span {
                @include font-size($small-font-sizes);
                display: block;
                font-weight: normal;
                color: $color-gray-70;

                @include breakpoint-down(md) {
                    display: none;
                }
            }
        }
    }

    .line-item {
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $color-blue-darker;
        padding: 2 * $margin-default $margin-default;
        text-align: center;

        .first-line-items & {
            padding-bottom: 2 * $margin-default;
        }

        @include breakpoint-up(sm) {
            min-width: 200px;
        }

        @include breakpoint-up(md) {
            padding: 3 * $margin-default 0;
            border-left: 1px solid $color-blue-gray-01;

            .first-line-items & {
                padding-bottom: 2 * $margin-default;
            }
        }

        p {
            margin: $margin-default 0;
            font-weight: bold;
            @include font-size($regular-font-sizes)
        }
    }

    .line-item-label {
        display: flex;
        flex-direction: column;
        align-items: center;

        @include breakpoint-down(md) {
            display: none;
        }

    }

    .line-rows {
        .ui-icon {
            fill: $color-green;
        }

        .line {
            &:nth-child(odd) {
                position: relative;
                z-index: 1;

                &:before {
                    content: '';
                    position: absolute;
                    left: -20px;
                    width: calc(100% + 40px);
                    height: 100%;
                    background: rgba($color-blue-gray-01, .5);
                    z-index: -1;
                }
            }
        }
    }

    .best-seller {
        top: -26px;
        width: 100%;
        padding: 4px 0;
        font-size: 12px;
        position: absolute;
        color: $color-gray-00;
        background: $color-green;
        border-top-right-radius: $border-radius / 2;
        border-top-left-radius: $border-radius / 2;

        @include breakpoint-up(sm) {
            padding: 10px 0;
            top: -38px;
        }

    }
</style>

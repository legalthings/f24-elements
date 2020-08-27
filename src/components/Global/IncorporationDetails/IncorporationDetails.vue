<template>
    <div class="incorporation-details">
        <div class="incorporation-details-head">
            <span
                class="image"
                :style="{background: getColor(organization.name)}"
            >
                <span class="first-letter">
                    {{ organization.name.slice(0, 2) }}
                </span>
            </span>
            <div class="name">
                <span>{{ organization.name }}</span>
            </div>
        </div>
        <UiNameFlag
            v-if="organization.state !== 'incorporated'"
            :color="organization.state"
            :name="$t('DASHBOARD.UNCONFIRMED')"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { ColorHelper } from '@/helpers/utility.helper';
    import UiNameFlag from '@/components/Global/UiNameFlag/UiNameFlag.vue';

    @Component({
        components: { UiNameFlag }
    })
    export default class IncorporationDetails extends Vue {
        @Prop() organization!: any;

        getColor(value: string) {
            return ColorHelper.getHex(value);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .incorporation-details {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .image {
        width: 170px;
        height: 170px;
        box-shadow: 0 10px 30px -8px $color-blue-darkest;
        border-radius: 50%;
        background: white;
        margin: 0 auto;
        display: flex;
        overflow: hidden;
        align-items: center;
        justify-content: center;

        @include breakpoint-down-value(800px, 'height') {
            width: 80px;
            height: 80px;

            .first-letter {
                font-size: 40px !important;
            }
        }

        .first-letter {
            color: $color-gray-00;
            font-size: 80px;
            @include fs-medium;
        }

        @include breakpoint-down(md) {
            width: 95px;
            height: 95px;

            .first-letter {
                font-size: 50px;
            }
        }

        @include breakpoint-down(sm) {
            width: 50px;
            height: 50px;

            .first-letter {
                font-size: 30px;
            }
        }
    }

    .name {
        display: flex;
        @include fs-medium;
        align-items: center;
        margin-top: 3 * $margin-default;
        @include font-size($h2-font-sizes);
        margin-bottom: $margin-default;

        @include breakpoint-up(md) {
            max-width: 250px;
        }

        @include breakpoint-down(md) {
            padding: 0;
            justify-content: center;
        }
    }

    .ui-icon {
        margin-left: 2 * $margin-default;
        flex-shrink: 0;
    }
</style>

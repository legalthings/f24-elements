<template>
    <div
        class="logo"
        :style="{background: getColor(nameOrNotAvailable)}"
    >
        <span>
            {{ nameOrNotAvailable.slice(0, 2) }}
        </span>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { ColorHelper } from '@/helpers/utility.helper';

    @Component
    export default class CardLogo extends Vue {
        @Prop() name!: string;

        get nameOrNotAvailable() {
            return this.name ?? this.$t('GLOBAL.NOT_YET_AVAILABLE');
        }

        getColor(value: string) {
            return ColorHelper.getHex(value);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .logo {
        border-radius: 100%;
        background-color: $color-gray-00;
        box-shadow: 0 4px 13px -8px rgba($color-gray-100, .5);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            color: $color-gray-00;
            font-size: 40px;
            @include fs-medium;

            @include breakpoint-down(md) {
                font-size: 20px;
            }
        }

    }
</style>

<template>
    <ul class="shareholder-shares">
        <li
            v-for="share in shares"
            :key="share.asset"
        >
            <ShareSymbol :asset="share.asset" />
            {{ share.name }}:
            {{ share.amount.toLocaleString() }}
        </li>
    </ul>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { ShareholderTypes } from '@/types/organisation.types';
    import { getShareTypeName } from '@/helpers/organizations.helper';
    import i18n from '@/dependencies/i18n';
    import ShareSymbol from '@/components/Global/ShareSymbol/ShareSymbol.vue';

    @Component({
        components: { ShareSymbol }
    })
    export default class ShareholderDetailShares extends Vue {
        @Prop() shareholder!: ShareholderTypes;

        get shares() {
            return this.shareholder.shares.map(s => {
                return {
                    name: i18n.t(`ORGANIZATIONS_SHAREHOLDERS.${getShareTypeName(s.asset)}`),
                    amount: s.amount,
                    asset: s.asset
                };
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .shareholder-chart {
        display: flex;
        align-items: center;
    }

    li {
        margin-bottom: 1.5 * $margin-default;
    }

    .symbol {
        @include fs-medium;
        min-width: 52px;
        display: inline-block;
        text-align: center;
        margin-right: $margin-default;
        color: $color-gray-00;
        padding: $margin-default / 2 0;
        border-radius: $border-radius / 2;
        @include font-size($small-font-sizes);
    }
</style>

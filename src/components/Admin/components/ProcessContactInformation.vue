<template>
    <ul>
        <li
            v-for="(item, index) in informationList"
            :key="index"
        >
            <span>
                {{ item.label }}
            </span>
            <span class="item-value">
                {{ item.value }}
            </span>
        </li>
    </ul>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import i18n from '@/dependencies/i18n';

    @Component
    export default class ProcessContactInformation extends Vue {
        @Prop() organization!: any;

        user = this.organization.data.actors.user;

        get informationList() {
            return [
                {
                    label: i18n.t('USER.FIRST_NAME'),
                    value: this.user.first_name
                },
                {
                    label: i18n.t('USER.LAST_NAME'),
                    value: this.user.last_name
                },
                {
                    label: i18n.t('PAGE_TITLES.ORGANIZATION'),
                    value: this.user.organization.name
                },
                {
                    label: i18n.t('USER.EMAIL'),
                    value: this.user.email
                },
                {
                    label: i18n.t('USER.PHONE'),
                    value: this.user.phone
                },
                {
                    label: i18n.t('GLOBAL.RISK_LEVEL'),
                    value: this.organization?.riskLevel || '-'
                }
            ];
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    li {
        display: flex;
        flex-direction: column;
        margin-bottom: $margin-default;

        span {
            @include font-size($regular-font-sizes);

            &:not(.item-value) {
                color: $color-blue-gray-02;
                margin-bottom: $margin-default / 3;
                @include font-size($small-font-sizes);
                @include fs-medium;
            }
        }
    }
</style>

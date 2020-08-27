<template>
    <ul>
        <li>
            <span class="user-name">
                <UiIcon
                    :icon="shareholder.viewed === 'completed'? 'check' : 'close'"
                    :color="shareholder.viewed === 'completed'? 'green' : 'inactive'"
                />
                <span>
                    {{ $t('SIGNING.VIEWED') }}
                </span>
            </span>
        </li>
        <li>
            <span class="user-name">
                <UiIcon
                    :icon="shareholder.signed === 'completed'? 'check' : 'close'"
                    :color="shareholder.signed === 'completed'? 'green' : 'inactive'"
                />
                <span>
                    {{ $t('SIGNING.SIGNED') }}
                </span>
            </span>
        </li>
    </ul>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class ShareholderSigningStatus extends Vue {
        @Prop() shareholder!: any;
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    ul {
        margin: 3 * $margin-default 0 6 * $margin-default;
    }

    li {
        display: flex;
        justify-content: space-between;
        padding: 2 * $margin-default 0;
        border-top: 1px solid $color-blue-gray-01;

        &:last-child {
            border-bottom: 1px solid $color-blue-gray-01;
        }

        .user-name {
            display: flex;
        }

        .ui-icon {
            margin-right: $margin-default;
        }
    }
</style>

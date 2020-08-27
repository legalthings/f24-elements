<template>
    <ul>
        <li
            v-for="(item, index) in items"
            :key="index"
        >
            <span class="user-name">
                <UiIcon
                    :icon="item.state === 'completed'? 'check' : 'close'"
                    :color="item.state === 'completed'? 'green' : 'inactive'"
                />
                <span>
                    {{ item.method }}
                </span>
            </span>

            <span>
                {{ item.date || 'missing date' }}
            </span>
        </li>
    </ul>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class ShareholderIdentificationStatus extends Vue {
        @Prop() items!: Array<any>;
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

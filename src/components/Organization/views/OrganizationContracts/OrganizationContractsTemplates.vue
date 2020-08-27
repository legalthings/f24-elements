<template>
    <div class="new-contract">
        <h3>
            {{ $t('ORGANIZATION.NO_CONTRACTS') }}
        </h3>
        <ul class="document-list columns is-multiline">
            <li
                v-for="(item, index) in items"
                :key="index"
                class="column is-one-third"
                @click="$emit('newDocument', item.id)"
            >
                <UiIcon
                    :icon="item.folder"
                    type="service"
                />
                <h4>
                    {{ item.label }}
                </h4>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component

    export default class OrganizationContractsTemplates extends Vue {
        @Prop() items!: Array<any>;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .document-list {
        justify-content: center;
    }

    .new-contract {
        text-align: center;
        margin: auto;

        h3 {
            margin: 4 * $margin-default 0;
        }

        ul {
            max-width: 600px;
            margin: auto;
        }

        li {
            cursor: pointer;
            margin-bottom: 4 * $margin-default;

            &:hover {
                background: $color-blue-gray-01;
                border-radius: $border-radius;
            }
        }

        .ui-icon {
            width: 70px;
            height: auto;
            margin-bottom: 2 * $margin-default;
        }
    }

</style>

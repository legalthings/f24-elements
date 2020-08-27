<template>
    <li>
        <p
            v-if="((!$vmq.xs && !$vmq.sm) || !isEdit) && label"
            class="content-list-label"
        >
            {{ label }}
        </p>
        <div class="content-list-values">
            <p v-if="!isEdit">
                <slot name="value" />
            </p>

            <b-field
                v-else
                :label="$vmq.xs || $vmq.sm ? label :''"
            >
                <slot name="input" />
            </b-field>
        </div>
    </li>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class EditableBlockItem extends Vue {
        @Prop() label!: string;
        @Prop({ default: true }) canEdit!: boolean;

        get isEdit() {
            return (this.$parent as any).isEdit && this.canEdit;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    li {
        margin: 2 * $margin-default 0;
        display: flex;
        justify-content: space-between;

        .content-list-label {
            flex: 2;
            display: flex;
            @include fs-medium;
            align-items: center;

            @include breakpoint-down(md) {
                flex: 1.5;
            }
        }

        /deep/ .content-list-values {
            flex: 2;

            .label {
                @include fs-medium;
                @include font-size($regular-font-sizes);
            }

            > p {
                text-align: right;
            }

            .is-radio {

                .b-radio {
                    margin-right: 2 * $margin-default;
                }

                @include breakpoint-up(sm) {
                    text-align: right;
                }
            }

            @include breakpoint-down(md) {
                flex: 1.5;
            }

            .radio-block {
                .radio {
                    margin-left: 3 * $margin-default;
                }
            }
        }
    }
</style>

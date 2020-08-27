<template>
    <div>
        <ValidationProvider
            v-slot="{ errors }"
            :rules="rules"
            :name="label"
        >
            <b-field
                v-if="label"
                grouped
                :label="label"
                :class="{'has-error': errors.length > 0}"
            >
                <div v-if="tooltip">
                    <UiIcon
                        class="tooltip"
                        icon="more-info"
                        @click="isActive = !isActive"
                    />
                </div>
            </b-field>
            <b-notification :active.sync="isActive">
                {{ tooltip }}
            </b-notification>
            <p
                v-if="errors"
                class="help"
                :class="{'is-danger': errors}"
            >
                <span
                    v-for="(error, index) in errors"
                    :key="index"
                >
                    {{ error }}
                </span>
            </p>
            <div
                class="mg-top-10"
                :class="{'inline': inline}"
            >
                <div
                    v-for="option in inputOptions"
                    :key="option.id"
                    class="field"
                >
                    <b-radio
                        v-model="selected"
                        :native-value="option.id"
                    >
                        {{ option.name }}
                        <b-tooltip
                            v-if="option.tooltip"
                            position="is-bottom"
                            multilined
                            :label="option.tooltip"
                        >
                            <UiIcon icon="more-info" />
                        </b-tooltip>
                    </b-radio>
                </div>
            </div>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiInputRadio extends Vue {
        @Prop() value: any;
        @Prop() tooltip!: string;
        @Prop() label!: string;
        @Prop() inline!: boolean;
        @Prop() items!: Array<any>;
        @Prop({ default: 'required' }) rules!: string;

        isActive = false;

        get inputOptions() {
            return this.items || this.defaultOptions;
        }

        get defaultOptions() {
            return [
                {
                    name: 'Yes',
                    id: true
                },
                {
                    name: 'No',
                    id: false
                }
            ];
        }

        get selected() {
            return this.value;
        }

        set selected(v: any) {
            this.$emit('input', v);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .tooltip {
        cursor: pointer;
        margin-left: $margin-default;
    }

    /deep/ .control-label {
        display: flex;
        align-items: center;
    }

    .inline {
        display: flex;

        .field {
            margin-right: $margin-default;
        }
    }

    /deep/ .field.is-grouped.has-error {
        .label {
            margin: 0;
        }
    }
</style>

<template>
    <div class="ui-checkbox">
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
                v-for="option in items"
                :key="option.id"
                class="field"
            >
                <b-checkbox
                    v-model="selected"
                    :native-value="option.id"
                >
                    {{ option.name }}
                    <slot />
                    <b-tooltip
                        v-if="option.tooltip"
                        multilined
                        :label="option.tooltip"
                    >
                        <UiIcon icon="more-info" />
                    </b-tooltip>
                </b-checkbox>
            </div>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiInputCheckbox extends Vue {
        @Prop() value: any;
        @Prop() tooltip!: string;
        @Prop() label!: string;
        @Prop() rules!: string;
        @Prop({
            default: () => (
                [
                    {
                        name: '',
                        id: true
                    }
                ])
        }) private items!: Array<any>;

        isActive = false;

        get selected() {
            return this.value;
        }

        set selected(v: any) {
            this.$emit('input', v);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .tooltip {
        cursor: pointer;
        margin-left: $margin-default;
    }

    /deep/ .control-label {
        display: flex;
        text-align: left;
    }

    .field.is-grouped {
        margin-bottom: $margin-default / 2;
    }
</style>

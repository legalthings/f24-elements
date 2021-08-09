<template>
    <div>
        <ValidationProvider
            v-slot="{ errors, valid }"
            :rules="rules"
            :name="`${name}_${label}`"
            :vid="`${name}_${label}`"
            class="field"
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

            <b-field
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="$getValidationErrors(errors)"
            >
                <b-input
                    v-model="inputValue"
                    :disabled="disabled"
                    :type="type"
                    :icon="icon"
                    :minlength="min"
                    :maxlength="max"
                    :min="minSize"
                    :max="maxSize"
                    :validation-message="validation"
                    :step="step"
                    :placeholder="placeholder"
                    :size="size"
                />
            </b-field>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiInputText extends Vue {
        @Prop() value!: string;
        @Prop() tooltip!: string;
        @Prop() label!: string;
        @Prop({ default: 'text' }) type!: string;
        @Prop() min!: number;
        @Prop() max!: number;
        @Prop() minSize!: number;
        @Prop() maxSize!: number;
        @Prop() validation!: string;
        @Prop() disabled!: boolean;
        @Prop({ default: 'required' }) rules!: string;
        @Prop() icon!: string;
        @Prop() step!: string;
        @Prop() name!: string;
        @Prop() placeholder!: string;
        @Prop() size!: string;

        isActive = false;

        get inputValue() {
            return this.value;
        }

        set inputValue(v: any) {
            this.$emit('input', v);
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/imports';

    /deep/ .b-tooltip {
        cursor: pointer;
        margin-left: $margin-default;
    }

    .tooltip {
        cursor: pointer;
        margin-left: $margin-default;
    }

    .field.is-grouped {
        margin-bottom: $margin-default / 2;
    }

</style>

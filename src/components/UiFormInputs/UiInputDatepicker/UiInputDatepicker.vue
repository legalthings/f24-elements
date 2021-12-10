<template>
    <div>
        <ValidationProvider
            v-slot="{ errors, valid }"
            :rules="rules"
            :name="label"
            class="field"
            :vid="label"
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
            <b-notification v-if="isActive">
                {{ tooltip }}
            </b-notification>
            <b-field
                :type="{ 'is-danger': errors[0], 'is-success': rules && valid }"
                :message="$getValidationErrors(errors)"
            >
                <b-datepicker
                    v-model="selected"
                    icon="calendar-day"
                    :position="position"
                    :placeholder="$t('VALIDATION.DATE_SELECT')"
                    :min-date="min"
                    :max-date="max"
                    :locale="$i18n.locale"
                    :editable="editable"
                    :size="size"
                    :range="range"
                    :rounded="rounded"
                    :type="type"
                />
            </b-field>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

    @Component
    export default class UiInputDatepicker extends Vue {
        @Prop() value: any;
        @Prop() tooltip!: string;
        @Prop() label!: string;
        @Prop() placeholder!: string;
        @Prop() expanded!: boolean;
        @Prop() min!: any;
        @Prop() max!: any;
        @Prop({ default: true }) editable!: boolean;
        @Prop({ default: false }) range!: boolean;
        @Prop({ default: 'is-top-left' }) position!: string;
        @Prop() size!: string;
        @Prop({ default: 'required' }) rules!: string;
        @Prop() rounded!: string;
        @Prop() type!: string;

        isActive = false;

        get selected() {
            return this.value && !this.range ? new Date(this.value) : this.value;
        }

        set selected(value: any) {
            this.onDateChange(value);
        }

        @Emit('input')
        onDateChange(value: Date | Date[]): Date | Date[] {
            return value;
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/imports';

    /deep/ .control-label {
        display: flex;
        text-align: left;
    }

    .tooltip {
        cursor: pointer;
        margin-left: $margin-default;
    }

    .field.is-grouped {
        margin-bottom: $margin-default / 2;
    }
</style>

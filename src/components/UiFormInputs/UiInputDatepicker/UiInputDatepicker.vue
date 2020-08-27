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
            <b-notification :active.sync="isActive">
                {{ tooltip }}
            </b-notification>
            <b-field
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
            >
                <b-datepicker
                    v-model="selected"
                    icon="calendar-day"
                    position="is-top-left"
                    :placeholder="$t('USER.SELECT_OPTION')"
                    :month-names="monthNames"
                    :day-names="dayNames"
                    :min-date="min"
                    :max-date="max"
                />
            </b-field>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiInputDatepicker extends Vue {
        @Prop() value: any;
        @Prop() tooltip!: string;
        @Prop() label!: string;
        @Prop() placeholder!: string;
        @Prop() expanded!: boolean;
        @Prop({ default: 'required' }) rules!: string;
        @Prop() min!: number;
        @Prop() max!: number;
        @Prop({ default: new Date() }) defaultDate!: number;

        isActive = false;

        months: any = {
            en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            nl: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus']
        }

        days: any = {
            en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            nl: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo']
        }

        get selected() {
            return new Date(this.value || this.defaultDate);
        }

        set selected(v: any) {
            this.$emit('input', v);
        }

        get monthNames() {
            return this.months[this.$i18n.locale];
        }

        get dayNames() {
            return this.days[this.$i18n.locale];
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

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

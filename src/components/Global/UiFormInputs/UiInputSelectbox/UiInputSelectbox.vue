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
                <b-select
                    v-model="selected"
                    :placeholder="placeholder"
                    :expanded="expanded"
                    :rounded="rounded"
                    :loading="isLoading"
                >
                    <option
                        v-for="item in items"
                        :key="item.id"
                        :value="item.id"
                    >
                        {{ item.name }}
                    </option>
                </b-select>
            </b-field>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiInputSelectbox extends Vue {
        @Prop() value: any;
        @Prop() tooltip!: string;
        @Prop() label!: string;
        @Prop() placeholder!: string;
        @Prop() isLoading!: boolean;
        @Prop() items!: Array<any>;
        @Prop() rounded!: boolean;
        @Prop() expanded!: boolean;
        @Prop({ default: 'required' }) rules!: string;

        isActive = false;

        // TODO add group option ie. for popular countries

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

<template>
    <div>
        <h3 class="content-title">
            <slot name="header" />
            <UiIcon
                v-if="!isEdit && isEditable"
                class="link"
                icon="edit"
                @click="edit"
            />
        </h3>
        <div class="page-content">
            <slot
                :isEdit="isEdit"
                name="content"
            />
        </div>
        <div
            v-if="isEdit"
            class="buttons"
        >
            <b-button
                type="is-text is-padding-small"
                rounded
                @click="cancelEdit"
            >
                {{ $t('EDITABLE_BLOCK.CANCEL') }}
            </b-button>

            <b-button
                :disabled="!isValid"
                type="is-primary is-padding-small"
                rounded
                @click="save"
            >
                {{ $t('EDITABLE_BLOCK.SAVE') }}
            </b-button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import BackButton from '@/components/Global/Buttons/BackButton.vue';

    @Component({
        components: { BackButton }
    })
    export default class EditableBlock extends Vue {
        @Prop({ default: 'saveEdit' }) saveEventName!: string;
        @Prop({ default: 'cancelEdit' }) cancelEventName!: string;
        @Prop({ default: true }) isEditable!: boolean;
        @Prop() isValid!: boolean;
        isEdit = false;

        edit() {
            this.isEdit = true;
        }

        cancelEdit() {
            this.$emit(this.cancelEventName);
            this.isEdit = false;
        }

        save() {
            this.$emit(this.saveEventName);
            this.isEdit = false;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .content-title {
        @include fs-medium;
        display: flex;
        justify-content: space-between;
        @include font-size($medium-font-sizes);
        border-bottom: 1px solid $color-blue-gray-01;
        padding-bottom: 2 * $margin-default;
        margin-bottom: 3 * $margin-default;
    }

    .content-list {
        border-bottom: 1px solid $color-blue-gray-01;
        padding-bottom: 2 * $margin-default;
        margin-bottom: 2 * $margin-default;
    }

    .buttons {
        justify-content: flex-end !important;
    }

    .link {
        cursor: pointer;

        &:hover {
            fill: $color-blue-darker;
        }
    }

    .is-text {
        color: $color-blue;
    }
</style>

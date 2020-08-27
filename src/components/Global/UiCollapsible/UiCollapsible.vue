<template>
    <div
        :class="{'is-open': isOpen, 'no-header': !header}"
        class="stepper-grid box"
    >
        <div
            v-if="header"
            class="stepper-header"
        >
            <h3 class="stepper-header-title">
                <slot name="header" />
            </h3>
            <span class="header-extra">
                <slot name="header-extra" />
            </span>
            <div
                v-if="exclude && active"
                class="exclude"
            >
                <div
                    class="exclude-label is-hidden-mobile"
                    @click="excludeStep"
                >
                    {{ $t('FUNNEL.GLOBAL.REMOVE') }}
                </div>
                <UiIcon
                    icon="close"
                    color="red"
                />
            </div>
            <div
                v-if="!disabled"
                class="header-actions"
            >
                <div class="extra-actions">
                    <slot name="extra-actions" />
                </div>
                <UiIcon
                    class="button-toggle"
                    icon="chevron-down-in-circle"
                    @click="toggleStep"
                />
            </div>
        </div>

        <div
            ref="step"
            :style="getStepMaxHeight()"
            class="stepper-main-wrapper"
        >
            <UiHeight
                class="stepper-main-content"
                @height="onHeight"
            >
                <slot name="content" />
            </UiHeight>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import UiGridA from '@/components/Global/Grid/UiGridA/UiGridA.vue';
    import UiHeight from '@/components/Global/UiHeight/UiHeight.vue';
    import i18n from '@/dependencies/i18n';

    @Component({
        components: { UiHeight, UiGridA }
    })
    export default class UiCollapsible extends Vue {
        @Prop() stepId!: string;
        @Prop({ default: false }) active!: boolean;
        @Prop({ default: true }) header!: boolean;
        @Prop({ default: false }) exclude!: boolean;
        @Prop({ default: false }) disabled!: boolean;
        @Prop({ default: false }) height!: boolean;

        isOpen: boolean = false;

        contentHeight = 0;

        $refs!: {
            step: HTMLElement,
            offsetHeight: HTMLFormElement
        };

        public toggleStep() {
            this.isOpen = !this.isOpen;
            this.$emit('setActive', this.stepId);
        }

        mounted() {
            this.isOpen = this.active || !this.header;
        }

        excludeStep(): void {
            this.$buefy.dialog.confirm({
                message: this.$t('GLOBAL.ARE_YOU_SURE') as string,
                cancelText: i18n.t('GLOBAL.CANCEL') as string,
                confirmText: i18n.t('GLOBAL.AGREE') as string,
                trapFocus: true,
                onConfirm: () => this.$emit('excludeStep', this.stepId)
            });
        }

        open() {
            this.isOpen = true;
        }

        @Watch('active')
        onActiveChange(value: boolean) {
            this.isOpen = value;
        }

        onHeight(v: number) {
            this.contentHeight = v;
        }

        getStepMaxHeight(): object {
            if (!this.$refs.step || !this.isOpen) return {};
            return {
                'max-height': !this.height ? 'inherit' : this.contentHeight + 100 + 'px'
            };
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .stepper-grid {
        padding: 0;
        margin-bottom: $margin-default;

        @include breakpoint-down(sm) {
            border-radius: $border-radius / 2;
        }
    }

    .stepper-header {
        display: flex;
        padding: 1.4 * $margin-default;
        justify-content: space-between;

        .is-open & {
            border-bottom: 1px solid $color-blue-gray-01;
        }
    }

    .stepper-header-title {
        @include font-size($regular-font-sizes);
        @include fs-medium;
        display: flex;
        align-items: center;
    }

    .header-extra {
        margin-right: 3 * $margin-default;
    }

    .button-toggle {
        cursor: pointer;
    }

    .header-actions {
        display: flex;
        align-items: center;
    }

    .exclude {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: $color-red;
        margin-right: 2 * $margin-default;

        .ui-icon {
            margin-left: $margin-default;
        }

        @include breakpoint-down(sm) {
            margin-right: $margin-default;
            padding-right: $margin-default;
            border-right: 1px solid $color-blue-gray-01;
        }
    }

    .stepper-main-wrapper {
        max-height: 0;
        overflow: hidden;
        transition: max-height .3s ease;
    }

    .stepper-main-content {
        padding: 2 * $margin-default;
    }

    .button-toggle {
        transition: transform .3s ease-in-out;

        .is-open & {
            transform: rotate(180deg);
        }
    }

    .button-go-back {
        display: flex;
        align-items: center;
        color: $color-blue;
        @include font-size($regular-font-sizes);
    }

    .extra-actions {
        margin-right: 2 * $margin-default;
    }
</style>

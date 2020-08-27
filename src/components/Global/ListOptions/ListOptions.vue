<template>
    <div
        :class="active"
        class="options-buttons"
    >
        <div
            class="button-gallery"
            @click="setActive('button-gallery')"
        >
            <UiIcon
                icon="gallery"
                size="24"
                color="white"
            />
        </div>
        <div
            class="button-list"
            @click="setActive('button-list')"
        >
            <UiIcon
                icon="list"
                size="24"
                color="white"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class ListOptions extends Vue {
        get active() {
            return this.$store.state.applicationStore.dashboardView;
        }

        setActive(ev: string) {
            this.$store.commit('applicationStore/updateDashboardView', ev);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .active {
        background: $color-blue;

        .ui-icon {
            fill: $color-gray-00;
        }
    }

    .options-buttons {
        display: flex;

        &.button-gallery {
            .button-gallery {
                @extend .active;
            }
        }

        &.button-list {
            .button-list {
                @extend .active;
            }
        }

        [class*='button-'] {
            cursor: pointer;
            width: 40px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: $color-gray-00;
            border: 2px solid $color-blue;

            .ui-icon {
                fill: $color-blue;
            }

            &:first-child {
                padding-left: 6px;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
            }

            &:last-child {
                padding-right: 6px;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
            }
        }
    }
</style>

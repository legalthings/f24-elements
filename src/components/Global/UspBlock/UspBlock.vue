<template>
    <div class="usp-block">
        <ul class="is-flex-desktop">
            <li
                v-for="(c, index) in contents"
                :key="index"
            >
                <p class="usp-title">
                    <UiIcon
                        :icon="c.icon.name"
                        :type="c.icon.type"
                        class="icon"
                    />
                    {{ c.title }}
                </p>
                <p class="usp-description">
                    {{ c.description }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class UspBlock extends Vue {
        content: Array<any> | undefined;

        get contents() {
            return [
                {
                    icon: {
                        name: 'fast',
                        type: 'custom'
                    },
                    title: this.$i18n.t('USP_BLOCK.TITLE_1'),
                    description: this.$i18n.t('USP_BLOCK.DESCRIPTION_1')
                },
                {
                    icon: {
                        name: 'support',
                        type: 'custom'
                    },
                    title: this.$i18n.t('USP_BLOCK.TITLE_2'),
                    description: this.$i18n.t('USP_BLOCK.DESCRIPTION_2')
                },
                {
                    icon: {
                        name: 'safe',
                        type: 'custom'
                    },
                    title: this.$i18n.t('USP_BLOCK.TITLE_3'),
                    description: this.$i18n.t('USP_BLOCK.DESCRIPTION_3')
                }
            ];
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .usp-block {
        border-radius: $border-radius;
        background: rgba($color-blue-gray-02, .1);
        padding: 2 * $margin-default;
        color: $color-blue-gray-02;

        li {
            @include breakpoint-up(md) {
                margin-right: 4 * $margin-default;
            }

            @include breakpoint-down(md) {
                margin-bottom: 3 * $margin-default;
            }

            &:last-child {
                margin: 0;
            }

            .usp-title {
                font-weight: bold;
                display: flex;
                @include font-size($medium-font-sizes);

                @include breakpoint-up(md) {
                    margin-bottom: 2 * $margin-default;
                }

                .icon {
                    margin-right: 1.5 * $margin-default;
                    @include breakpoint-up(md) {
                        transform: scale(1.3);
                    }
                }
            }

            .usp-description {
                font-style: italic;
                @include font-size($regular-font-sizes);
                max-width: 80%;
            }
        }
    }
</style>

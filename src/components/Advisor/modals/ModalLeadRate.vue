<template>
    <UiModal @close="$parent.close">
        <template #header>
            <h3>
                Rate {{ data.lead.name }} - {{ status }}
            </h3>
        </template>
        <div slot="content">
            <div>
                <p>
                    {{ $t('ADVISOR.RATING_TITLE') }}
                </p>
            </div>

            <div
                class="rating mt-4"
                :class="rating !== null ? ratingOptions[rating].icon : ''"
            >
                <ul>
                    <li
                        v-for="(item, i) in ratingOptions"
                        :key="i"
                        :class="{'is-active': rating === i}"
                        @click="setRating(i)"
                    >
                        <UiIcon
                            :icon="`face-${item.icon}`"
                            type="custom"
                            size="50"
                        />
                    </li>
                </ul>

                <p
                    v-if="ratingOptions[rating]"
                    class="rated"
                >
                    {{ ratingOptions[rating].description }}
                </p>
                <p
                    v-else
                    class="no-rating"
                >
                    {{ $t('ADVISOR.RATING_NO_RATE') }}
                </p>
            </div>

            <div>
                <UiInputText
                    v-model="feedback"
                    type="textarea"
                    rules=""
                    class="mt-6"
                    placeholder="Please leave a comment if you'd like..."
                />
            </div>
            <div class="buttons space-between mt-6">
                <span
                    class="skip"
                    @click="rate"
                >
                    {{ $t('ADVISOR.SKIP') }}
                </span>
                <b-button
                    :loading="isLoading"
                    type="is-primary"
                    rounded
                    @click="rate"
                >
                    {{ $t('ADVISOR.SUBMIT_RATING') }}
                </b-button>
            </div>
        </div>
    </UiModal>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiModal from '@/components/Global/Modals/UiModal/UiModal.vue';
    import UiNameFlag from '@/components/Global/UiNameFlag/UiNameFlag.vue';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import { LeadPurchasesTypes } from '@/types/lead.types';
    import leadService from '@/services/leads.service';
    import i18n from '@/dependencies/i18n';

    @Component({
        components: { UiInputText, UiNameFlag, UiModal }
    })
    export default class ModalLeadRate extends Vue {
        @Prop() data!: LeadPurchasesTypes;
        @Prop() status!: string;
        @Prop() close!: any;

        $parent: any;

        isLoading = false;
        rating = null;
        feedback = null;

        get ratingOptions() {
            return [
                {
                    icon: 'sad',
                    value: 1,
                    description: i18n.t('ADVISOR.RATE_VERY_BAD')
                },
                {
                    icon: 'neutral',
                    value: 2,
                    description: i18n.t('ADVISOR.RATE_BAD')
                },
                {
                    icon: 'happy',
                    value: 3,
                    description: i18n.t('ADVISOR.RATE_GOOD')
                },
                {
                    icon: 'delighted',
                    value: 4,
                    description: i18n.t('ADVISOR.RATE_GREAT')
                }
            ];
        }

        get config() {
            return {
                id: this.data.id,
                rating: this.rating,
                feedback: this.feedback,
                status: this.status
            };
        };

        setRating(v) {
            this.rating = v;
        }

        async rate() {
            this.isLoading = true;
            await leadService.updateLeadById(this.config);
            this.$parent.close();
            this.close();
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .rating {

        ul {
            display: flex;
            justify-content: center;

            li {
                margin: 2 * $margin-default;
                cursor: pointer;

                /deep/ .ui-icon * {
                    fill: $color-blue-gray-04 !important;
                }
            }
        }

        .no-rating {
            color: $color-blue-gray-04;
        }

        &.sad {
            .rated {
                color: $color-red;
            }

            li {
                &.is-active {
                    /deep/ .ui-icon * {
                        fill: $color-red !important;
                    }
                }
            }
        }

        &.neutral {
            .rated {
                color: $color-orange;
            }

            li {
                &.is-active {
                    /deep/ .ui-icon * {
                        fill: $color-orange !important;
                    }
                }
            }
        }

        &.happy {
            .rated {
                color: $color-green-light;
            }

            li {
                &.is-active {
                    /deep/ .ui-icon * {
                        fill: $color-green-light !important;
                    }
                }
            }
        }

        &.delighted {
            .rated {
                color: $color-green;
            }

            li {
                &.is-active {
                    /deep/ .ui-icon * {
                        fill: $color-green !important;
                    }
                }
            }
        }

        p {
            text-align: center;
            font-weight: bold;
            @include font-size($big-font-sizes);
        }
    }

    .skip {
        cursor: pointer;
        color: $color-blue;
        @include font-size($regular-font-sizes);
    }
</style>

<template>
    <PageBlock
        :back-button="{name: 'dashboard', label: $t('NAVIGATION.DASHBOARD')}"
    >
        <template #content>
            <section class="section">
                <h2>
                    {{ $t('INCORPORATION.CURRENT_STATUS_TITLE') }}
                </h2>

                <UiListHeader>
                    <span>Step</span>
                    <span>Date</span>
                </UiListHeader>
                <IncorporationStepper
                    status="previous"
                    :disabled="true"
                    :steps="organization.data.previous"
                />
                <IncorporationStepper
                    v-if="!isLastStep"
                    active="true"
                    :disabled="true"
                    status="current"
                    :steps="[organization.data.current]"
                    :start-index="organization.data.previous.length"
                />
                <IncorporationStepper
                    v-else
                    status="current"
                    :disabled="true"
                    :is-last-step="true"
                    :steps="lastStep"
                    :start-index="organization.data.previous.length"
                />
                <IncorporationStepper
                    status="next"
                    :disabled="true"
                    :steps="organization.data.next"
                    :start-index="organization.data.previous.length + 1"
                />

                <div
                    v-if="isLastStep"
                    class="buttons section is-centered"
                >
                    <b-button
                        type="is-primary"
                        tag="router-link"
                        :to="{name:'dashboard'}"
                        rounded
                    >
                        {{ $t('INCORPORATION.GO_TO_DASHBOARD') }}
                    </b-button>
                </div>
            </section>
        </template>
    </PageBlock>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageBlock from '@/components/Global/Page/PageBlock/PageBlock.vue';
    import pageMetadataService from '@/services/page-metadata.service';
    import UiCollapsible from '@/components/Global/UiCollapsible/UiCollapsible.vue';
    import UiListHeader from '@/components/Global/UiListHeader/UiListHeader.vue';
    import IncorporationService from '@/components/Incorporation/services/incorporation.service';
    import IncorporationStepper from '@/components/Incorporation/components/IncorporationStepper.vue';
    import i18n from '@/dependencies/i18n';

    @Component({
        components: {
            IncorporationStepper,
            UiListHeader,
            UiCollapsible,
            PageBlock
        }
    })
    export default class Incorporation extends Vue {
        @Prop() organization!: IncorporationService;

        lastStep = [
            {
                title: i18n.t('INCORPORATION.INCORPORATION_LIVE')
            }
        ]

        created() {
            pageMetadataService.setPageTitle(this.$route, this.organization.data.name);
        }

        get isLastStep() {
            return !this.organization.data.next;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .ui-list-header {
        span:first-child {
            margin-left: 7 * $margin-default;
        }

        span:last-child {
            margin-right: 7 * $margin-default;
        }
    }
</style>

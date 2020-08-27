<template>
    <PageBlock :back-button="{name: $store.getters['userStore/type'][0] + '-processes', label: $t('NAVIGATION.PROCESSES')}">
        <template #header>
            {{ organization.name }}
            <b-taglist attached>
                <b-tag type="is-dark">
                    urgency
                </b-tag>
                <b-tag type="is-primary">
                    {{ organization.data.urgency }}
                </b-tag>
            </b-taglist>
        </template>
        <template #content>
            <div class="columns">
                <div class="column">
                    <PageSection>
                        <div slot="header">
                            Current task
                        </div>

                        <div
                            slot="content"
                            class="box"
                        >
                            content
                        </div>
                    </PageSection>

                    <PageSection class="mg-top-40">
                        <div slot="header">
                            {{ $t('GLOBAL.MESSAGES') }}
                        </div>

                        <div
                            slot="content"
                            class="box"
                        >
                            <UiChat :organization="organization" />
                        </div>
                    </PageSection>

                    <PageSection class="mg-top-40">
                        <div slot="header">
                            {{ $t('DOCUMENTS.DOCUMENTS') }}
                        </div>

                        <div
                            slot="content"
                        >
                            <ProcessDocuments :documents="organization.data.assets" />
                        </div>
                    </PageSection>
                </div>

                <!-- RIGHT COLUMN-->
                <div class="column is-one-third mg-top-40">
                    <div class="box sidebar-box stepper-timeline">
                        <h3>
                            {{ $t('GLOBAL.TIMELINE') }}
                        </h3>
                        <hr>
                        <ProcessTimeline :organization="organization" />
                    </div>

                    <div class="box sidebar-box">
                        <h3>
                            {{ $t('GLOBAL.PRODUCTS') }}
                        </h3>
                        <hr>
                        <ProcessProducts :organization="organization" />
                    </div>

                    <div class="box sidebar-box">
                        <h3>
                            {{ $t('USER_ACCOUNT.CONTACT_DETAILS') }}
                        </h3>
                        <hr>
                        <ProcessContactInformation :organization="organization" />
                    </div>
                </div>
            </div>
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
    import PageSection from '@/components/Global/Page/PageSection/PageSection.vue';
    import UiChat from '@/components/Admin/components/UiChat.vue';
    import ProcessDocuments from '@/components/Admin/components/ProcessDocuments.vue';
    import ProcessTimeline from '@/components/Admin/components/ProcessTimeline.vue';
    import ProcessContactInformation from '@/components/Admin/components/ProcessContactInformation.vue';
    import ProcessProducts from '@/components/Admin/components/ProcessProducts.vue';

    @Component({
        components: {
            ProcessProducts,
            ProcessContactInformation,
            ProcessTimeline,
            ProcessDocuments,
            UiChat,
            PageSection,
            IncorporationStepper,
            UiListHeader,
            UiCollapsible,
            PageBlock
        }
    })
    export default class AdminProcess extends Vue {
        @Prop() organization!: IncorporationService;
        messages: Array<any> = [];

        created() {
            pageMetadataService.setPageTitle(this.$route, this.organization.name);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .section {
        padding: 0;
    }

    /deep/ .back-button {
        padding: 0;
    }

    .sidebar-box {
        padding: 2 * $margin-default;
        position: relative;

        h3 {
            @include fs-medium;
            @include font-size($regular-font-sizes);
        }

        hr {
            margin: $margin-default 0 2 * $margin-default;
        }
    }

    .stepper-timeline {
        &:before {
            content: '';
            position: absolute;
            background: linear-gradient(0deg, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0) 100%);
            bottom: 20px;
            left: 0;
            right: 0;
            height: 46px;
            z-index: 10;
        }

        &:after {
            content: '';
            position: absolute;
            background: linear-gradient(180deg, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0) 100%);
            /*background: red;*/
            top: 60px;
            left: 0;
            right: 0;
            height: 30px;
            z-index: 10;
        }

        hr {
            margin: $margin-default 0;
        }
    }
</style>

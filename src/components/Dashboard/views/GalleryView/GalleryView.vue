<template>
    <div class="organizations-gallery">
        <div
            v-if="processesLoading"
            ref="loadProcesses"
            class="load-processes"
        />
        <section>
            <div class="organizations-gallery columns is-multiline">
                <div
                    class="column add-organisation"
                    @click="newIncorporation()"
                >
                    <UiIcon icon="add" />
                    <p>
                        {{ $t('DASHBOARD.NEW_ORGANIZATION') }}
                    </p>
                </div>
                <CardGallery
                    v-for="(organisation, index) in allOrganizations"
                    :key="index"
                    :organisation="organisation"
                    class="column is-one-third mg-bottom-50"
                />
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import CardGallery from '@/components/Dashboard/components/CardGallery/CardGallery.vue';
    import incorporationService from '@/services/incorporation.service';

    @Component({
        components: {
            CardGallery
        }
    })
    export default class GalleryView extends Vue {
        @Prop() processesLoading!: boolean;
        @Prop() allOrganizations!: Array<any>;
        loader;

        mounted() {
            if (!this.processesLoading) return;
            this.loader = this.$buefy.loading.open({
                container: this.$refs.loadProcesses
            });
        }

        newIncorporation() {
            incorporationService.newIncorporation();
        }

        @Watch('processesLoading')
        onProcessesLoadingChange() {
            this.loader.close();
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    h2 {
        @include fs-medium;
    }

    .add-organisation {
        height: 520px;
        margin: 0 $margin-default;
        border-radius: $border-radius;
        border: dashed 3px rgba($color-blue-gray-02, .5);
        color: $color-blue-gray-02;
        display: flex;
        align-content: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        @include breakpoint-up(md) {
            height: 540px;
        }

        &:hover {
            background: $color-blue-gray-02;
            border: none;
            color: $color-gray-00;

            .ui-icon {
                fill: $color-gray-00
            }
        }

        p {
            max-width: 60%;
            text-align: center;
            @include fs-medium;
        }

        .ui-icon {
            fill: $color-blue-gray-02;
        }
    }
</style>

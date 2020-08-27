<template>
    <div class="organizations-list mg-top-50">
        <div
            v-if="processesLoading"
            ref="loadProcesses"
            class="load-processes"
        />

        <SortingBar>
            <div>
                {{ $t('DASHBOARD.CURRENT_STATUS') }}
            </div>
        </SortingBar>

        <div>
            <div
                class="column add-organisation"
                @click="newIncorporation()"
            >
                <UiIcon icon="add" />
                <p>
                    {{ $t('DASHBOARD.NEW_ORGANIZATION') }}
                </p>
            </div>

            <CardList
                v-for="(organisation, index) in allOrganizations"
                :key="index"
                :organisation="organisation"
                class="mg-bottom-10"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import CardList from '@/components/Dashboard/components/CardList/CardList.vue';
    import SortingBar from '@/components/Dashboard/components/SortingBar/SortingBar.vue';
    import incorporationService from '@/services/incorporation.service';

    @Component({
        components: {
            SortingBar,
            CardList
        }
    })

    export default class ListView extends Vue {
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

    .add-organisation {
        height: 100px;
        margin: 3 * $margin-default 0;
        border-radius: $border-radius;
        border: dashed 3px rgba($color-blue-gray-02, .5);
        color: $color-blue-gray-02;
        display: flex;
        align-content: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;

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

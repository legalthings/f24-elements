<template>
    <div :class="{'has-multiple': hasMultiple}">
        <PageSectionItems
            v-for="item in details"
            :key="item.label"
            :item="item"
        />
        <b-button
            v-if="props.data.deed"
            type="is-primary is-padding-small"
            rounded
            @click="download"
        >
            {{ $t('EVENTS_DETAILS.VIEW_DEED') }}
        </b-button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageSectionItems from '@/components/Global/Page/PageSection/PageSectionItems.vue';
    import alertService from '@/services/alert.service';
    import apiService from '@/services/api.service';
    import { downloadFile } from '@/helpers/utility.helper';

    @Component({
        components: { PageSectionItems }
    })
    export default class OrganizationEventsDetailsShares extends Vue {
        @Prop() props!: any;
        @Prop() details!: any;
        @Prop() hasMultiple!: boolean;

        async download() {
            try {
                const { data } = await apiService.getFileFromURL(this.getUrl);
                const name = `${this.props.data.name} - ${this.details[0].value}`;
                downloadFile(data, name, 'pdf');
            } catch (e) {
                alertService.dangerMessage('Error trying to download: ' + `${this.details[0].value}`);
            }
        }

        get getUrl() {
            return `${apiService.API_URL}documents/${this.props.data.deed}/versions/latest`;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .has-multiple {
        margin-bottom: 4 * $margin-default;

        &:not(:last-child) {
            padding-bottom: 4 * $margin-default;
            border-bottom: 2px solid $color-blue-gray-01;
        }
    }
</style>

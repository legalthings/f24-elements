<template>
    <b-dropdown
        aria-role="list"
        position="is-bottom-left"
    >
        <b-button
            slot="trigger"
            type="is-primary is-padding-small"
            rounded
            expanded
        >
            {{ $t('DASHBOARD.NEW') }}
        </b-button>

        <div class="content">
            <UiButton :url="url">
                <i class="far fa-building" />
                {{ $t('DASHBOARD.ORGANIZATION') }}
            </UiButton>
            <UiButton url="https://www.firm24.com/bv-opheffen/">
                <i class="far fa-times-circle" />
                {{ $t('ORGANIZATION.LIQUIDATE_COMPANY') }}
            </UiButton>
        </div>
    </b-dropdown>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import UiButton from '@/components/Global/UiButton/UiButton.vue';

    @Component({
        components: { UiButton }
    })
    export default class UiDropdownNewRequest extends Vue {
        get url() {
            return `${process.env.VUE_APP_FUNNEL_URL}soort_oprichting?session=${this.$store.state.userStore.session.id}`;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .content {
        padding: $margin-default 2 * $margin-default;
        width: 290px;
    }

    /deep/ .dropdown-trigger {
        width: 100%;
    }

    /deep/ a {
        display: flex;
        align-items: center;
        justify-content: right;
        padding: $margin-default / 2 0;

        i {
            margin-right: $margin-default;
        }
    }
</style>

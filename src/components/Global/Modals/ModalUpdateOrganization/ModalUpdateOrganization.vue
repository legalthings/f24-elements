<template>
    <div
        class="modal-card"
    >
        <div class="box">
            <h2>
                {{ $i18n.t('ORGANIZATION_NOTIFICATION.WELCOME') }}
            </h2>

            <p>
                {{ $i18n.t('ORGANIZATION_NOTIFICATION.WELCOME_TEXT') }}
            </p>

            <b-button
                type="is-primary is-padding-small"
                rounded
                @click="$parent.close()"
            >
                {{ $i18n.t('ORGANIZATION_NOTIFICATION.CLOSE') }}
            </b-button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import SearchButton from '@/components/Global/Buttons/SearchButton.vue';

    @Component({
        components: { SearchButton }
    })
    export default class ModalUpdateOrganization extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .box {
        text-align: center;
        padding: 20px;

        h2 {
            @include fs-medium;
            margin-bottom: 2 * $margin-default;
        }

        p {
            margin: 2 * $margin-default;
        }
    }

</style>

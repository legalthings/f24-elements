<template>
    <section class="section">
        <div class="box">
            <div>
                <h3 class="is-size-5">
                    Controleer de gegevens van de organisatie
                </h3>
                <b-button
                    type="is-primary is-padding-small"
                    rounded
                    :to="{name: 'organization-notary', params: { organizationId: $route.params.organizationId }}"
                    tag="router-link"
                >
                    Check
                </b-button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class NotaryOrganizationsNotification extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .box {
        background: $color-red;
        width: 100%;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $color-gray-00;

            @include breakpoint-down(md) {
                flex-direction: column;
            }
        }
    }

    .buttons {
        @include breakpoint-down(md) {
            margin-top: 2 * $margin-default;
        }
    }
</style>

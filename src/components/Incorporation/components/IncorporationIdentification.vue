<template>
    <div>
        <div
            v-for="(shareholder, index) in organization.data.current.shareholders"
            :key="index"
            class="box"
        >
            <h2 class="page-block-content-title">
                {{ shareholder.email }}
            </h2>
            <ShareholderIdentificationStatus :items="shareholder.verification_methods" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { IncorporationTypes } from '@/types/incorporation.types';
    import EditableBlock from '@/components/Global/EditableBlock/EditableBlock.vue';
    import EditableBlockItem from '@/components/Global/EditableBlock/EditableBlockItem.vue';
    import ShareholderIdentificationStatus
        from '@/components/Incorporation/components/Global/ShareholderIdentificationStatus.vue';

    @Component({
        components: {
            ShareholderIdentificationStatus,
            EditableBlockItem,
            EditableBlock
        }
    })
    export default class IncorporationIdentification extends Vue {
        @Prop() organization!: IncorporationTypes;
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .box {
        margin-top: 3* $margin-default;
    }

    .actions {
        display: flex;
        justify-content: space-between;

        @include breakpoint-down(md) {
            flex-direction: column;
        }

        p {
            margin-bottom: 2 * $margin-default;

            @include breakpoint-up(md) {
                max-width: 70%;
            }
        }
    }
</style>

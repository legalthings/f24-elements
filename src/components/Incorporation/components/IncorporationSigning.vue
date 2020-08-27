<template>
    <div>
        <div
            v-for="(shareholder, index) in organization.data.current.signers"
            :key="index"
            class="box"
        >
            <h2 class="page-block-content-title">
                {{ shareholder.email }}
            </h2>
            <ShareholderSigningStatus :shareholder="shareholder" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { IncorporationTypes } from '@/types/incorporation.types';

    @Component({
        components: {}
    })
    export default class IncorporationSigning extends Vue {
        @Prop() organization!: IncorporationTypes;
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .box {
        margin-top: 3* $margin-default;
    }
</style>

<template>
    <div class="modal-card">
        <HeaderWrapper>
            <slot name="header" />
            <UiIcon
                class="close"
                icon="close"
                color="white"
                size="32"
                @click="$emit('close')"
            />
        </HeaderWrapper>
        <div class="box">
            <slot name="content" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HeaderWrapper from '@/components/Global/Header/HeaderWrapper/HeaderWrapper.vue';

    @Component({
        components: { HeaderWrapper }
    })
    export default class UiModal extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    /global/ .modal-close.is-large {
        display: none;
    }

    /deep/ .header-wrapper {
        height: 80px;
    }

    .header-wrapper {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
        display: flex;
        justify-content: space-between;
    }

    .box {
        padding: 4 * $margin-default;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        overflow: auto;
    }

    .close {
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }
</style>

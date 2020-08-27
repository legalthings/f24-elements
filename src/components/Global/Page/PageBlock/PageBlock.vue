<template>
    <div class="page-block">
        <BackButton
            v-if="backButton"
            class="back-button"
            :config="backButton"
        />
        <h2 class="header-title">
            <slot name="header" />
        </h2>
        <div class="page-content">
            <slot name="content" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import BackButton from '@/components/Global/Buttons/BackButton.vue';

    @Component({
        components: { BackButton }
    })
    export default class PageBlock extends Vue {
        @Prop() backButton!: any;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .box {
        width: 100%;
        @include breakpoint-up(md) {
            padding: 4 * $margin-default 0;
        }
    }

    .header-title {
        @include fs-medium;
        margin-top: 2 * $margin-default;

        &:empty {
            display: none;
        }
    }

    .page-block {
        @include breakpoint-down(md) {
            margin-top: 4 * $margin-default;
        }
    }

    .page-content {
        padding: 3 * $margin-default 0;

        h2 {
            @include fs-medium;
        }
    }

    .back-button {
        padding: 0 2 * $margin-default;
    }

    .section {
        &:first-of-type {
            padding-top: 0;
        }
    }

</style>

<template>
    <div class="box login-box">
        <UiIcon
            class="logo"
            icon="logo"
            type="custom"
        />
        <slot name="content" />
        <LanguageSelector />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import LanguageSelector from '@/components/Global/LanguageSelector/LanguageSelector.vue';

    @Component({
        components: { LanguageSelector }
    })
    export default class AuthWrapper extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .login-box {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        justify-content: center;
        align-items: center;
    }

    .logo {
        width: 122px;
        height: 60px;

        /deep/ .firm {
            fill: $color-gray-100;
        }
    }

    .language-selector {
        border-top: solid 1px $color-blue-gray-01;
    }
</style>

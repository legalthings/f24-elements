<template>
    <div class="login">
        <HeaderWrapper />
        <div class="container">
            <section class="section">
                <LoginBox />
            </section>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HeaderWrapper from '@/components/Global/Header/HeaderWrapper/HeaderWrapper.vue';
    import LoginBox from '@/components/Auth/LoginBox/LoginBox.vue';

    @Component({
        components: {
            LoginBox,
            HeaderWrapper
        }
    })

    export default class LoginView extends Vue {
    }
</script>

<style lang="scss">
    @import '~css/_imports';

    .login-box {
        margin: auto;
    }
</style>

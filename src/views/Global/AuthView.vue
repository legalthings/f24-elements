<template>
    <div class="auth">
        <HeaderWrapper />
        <div class="container">
            <section class="section">
                <router-view />
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

    export default class AuthView extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    /deep/ .box {
        margin: auto;
        display: flex;
        flex-direction: column;
        max-width: 400px;
        justify-content: center;
        align-items: center;

        .auth-title {
            width: 100%;
            text-align: left;
            margin: 2 * $margin-default;
            @include fs-medium;
        }

        .logo {
            width: 122px;
            height: 60px;

            .firm {
                fill: $color-gray-100;
            }
        }

        .field {
            width: 100%;

            .label {
                font-weight: 400;
            }
        }

        .is-success {
            width: 100%;

            p {
                color: $color-blue;
                @include font-size($medium-font-sizes);
            }
        }
    }
</style>

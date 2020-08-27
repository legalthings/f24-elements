<template>
    <div class="dashboard">
        <HeaderWrapper>
            <UiIcon
                class="logo"
                icon="logo"
                type="custom"
            />
        </HeaderWrapper>
        <div class="container">
            <section class="section">
                <div class="box">
                    <h3>
                        {{ $t('GLOBAL.PAGE_NOT_FOUND') }}
                    </h3>
                    <b-button
                        :to="{name: 'dashboard'}"
                        class="is-primary is-padding-small mg-top-30"
                        tag="router-link"
                        rounded
                    >
                        {{ $t('BACK_BUTTON.BACK') }}
                    </b-button>
                </div>
            </section>
        </div>
        <LanguageSelector />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HeaderDashboard from '@/components/Global/Header/HeaderDashboard/HeaderDashboard.vue';
    import HeaderWrapper from '@/components/Global/Header/HeaderWrapper/HeaderWrapper.vue';
    import LanguageSelector from '@/components/Global/LanguageSelector/LanguageSelector.vue';

    @Component({
        components: {
            LanguageSelector,
            HeaderWrapper,
            HeaderDashboard
        }
    })
    export default class Page404View extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .logo {
        width: 122px;
        height: 60px;
    }

    .container {
        text-align: center;
    }

    /deep/ .header-wrapper {
        justify-content: center;
    }

    /deep/ .language-selector {
        margin: 0;
    }
</style>

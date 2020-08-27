<template>
    <div class="header-wrapper">
        <div
            class="burger-menu"
            @click="openMenu"
        >
            <div class="burger-icon" />
        </div>
        <h2
            v-if="!$vmq.lg"
            class="header-title"
        >
            {{ organization.name }}
        </h2>
        <ProfileDropdown class="profile" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import HeaderWrapper from '@/components/Global/Header/HeaderWrapper/HeaderWrapper.vue';
    import ProfileDropdown from '@/components/Global/Header/ProfileDropdown/ProfileDropdown.vue';

    @Component({
        components: {
            ProfileDropdown,
            HeaderWrapper
        }
    })
    export default class HeaderOrganization extends Vue {
        @Prop() organization!: any;

        openMenu() {
            this.$emit('openMobileMenu');
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .header-wrapper {
        display: flex;
        align-items: center;
        height: 100px;
        padding: 0 3 * $margin-default;

        @include breakpoint-down(md) {
            height: 60px;
            background-size: cover;
            background: url("../../../../assets/images/header/header-bg.svg") no-repeat right top, linear-gradient(93deg, $color-blue -46%, $color-blue-darker 64%);
        }
    }

    .burger-menu {
        cursor: pointer;
        position: absolute;
        left: 20px;
        width: 25px;
        height: 20px;

        @include breakpoint-up(md) {
            display: none;
        }
    }

    .header-title {
        width: 100%;
        text-align: center;
        color: $color-gray-00;
    }

    .profile {
        margin-left: auto;
    }

</style>

<template>
    <div>
        <HeaderDashboard />
        <section class="section">
            <router-view />
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HeaderDashboard from '@/components/Global/Header/HeaderDashboard/HeaderDashboard.vue';

    @Component({
        components: { HeaderDashboard }
    })
    export default class UserAccountView extends Vue {
    }

</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .section {
        padding-top: 0;
    }
</style>

§
<template>
    <div>
        <HeaderWrapper>
            <router-link
                :to="{name: 'organization-contracts', params: {organizationId: $route.params.organizationId}}"
            >
                <UiIcon
                    class="back"
                    icon="arrow-right"
                    color="white"
                    size="45"
                />
            </router-link>
            <UiIcon
                class="logo"
                icon="logo"
                type="custom"
            />
        </HeaderWrapper>
        <b-loading
            :active="isLoading"
            :is-full-page="false"
        />
        <iframe
            v-if="!isLoading"
            id="fillthedoc"
            :src="iFrameUrl"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HeaderWrapper from '@/components/Global/Header/HeaderWrapper/HeaderWrapper.vue';
    import apiService from '@/services/api.service';

    @Component({
        components: { HeaderWrapper }
    })
    export default class DocumentCreateView extends Vue {
        isRedirected = false;
        isLoading = true;
        iFrameUrl = null;

        created() {
            window.addEventListener('message', this.receiveMessage);
            this.getContract(this.$route.params.documentId);
        }

        beforeDestroy() {
            window.removeEventListener('message', this.receiveMessage);
        }

        async getContract(id: string) {
            const { data, status } = await apiService.get('contracts/' + id);
            if (status === 200) {
                this.iFrameUrl = data.edit_url;
                this.isLoading = false;
            }
        }

        receiveMessage(event: any) {
            if (event.data.id && !this.isRedirected) {
                this.isRedirected = true;
                this.$router.push({ name: 'organization-contracts' });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .logo {
        width: 122px;
        height: 60px;
    }

    .header-wrapper {
        justify-content: space-between;
    }

    iframe {
        position: fixed;
        top: 112px;
        bottom: 0;
        right: 0;
        width: 100%;
        height: calc(100% - 112px);
        border: none;
        margin: 0;
        padding: 0;
    }

    .back {
        transform: scaleX(-1);
    }
</style>

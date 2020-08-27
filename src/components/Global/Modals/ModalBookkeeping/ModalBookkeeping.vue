<template>
    <div
        ref="loading"
        class="modal-card"
    >
        <iframe
            src="https://calendly.com/boekhouding-firm24/intakegesprek-boekhouding?month=2020-05"
            height="600px"
            width="100%"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class ModalBookkeeping extends Vue {
        loading;

        mounted() {
            this.loading = this.$buefy.loading.open({
                container: this.$refs.loading
            });

            setTimeout(() => this.loading.close(), 1500);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .modal-card {
        background: $color-gray-00;
        width: 900px;
        height: 600px;

        @include breakpoint-down(sm) {
            width: 100%;
            height: 500px;
        }
    }
</style>

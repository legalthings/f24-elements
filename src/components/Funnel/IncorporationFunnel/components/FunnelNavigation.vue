<template>
    <div class="buttons mg-top-60">
        <b-button
            type="is-light"
            rounded
            :disabled="!hasPrevious"
            @click="$emit('prev')"
        >
            {{ $t('GLOBAL.PREVIOUS') }}
        </b-button>
        <b-button
            :class="{'is-danger': validator.invalid && validator.validated || canContinue.hasError}"
            :disabled="canContinue.hasError"
            type="is-primary"
            rounded
            @click="$emit('next')"
        >
            {{ next }}
        </b-button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import i18n from '@/dependencies/i18n';

    @Component
    export default class FunnelNavigation extends Vue {
        @Prop() hasPrevious!: boolean;
        @Prop({
            default: () => (
                {
                    hasError: false
                })
        }) canContinue: any;

        @Prop({
            default: () => (
                {
                    invalid: false,
                    validated: true
                })
        }) validator: any;

        @Prop() nextLabel!: string;

        get next() {
            return this.nextLabel ?? i18n.t('GLOBAL.NEXT');
        }
    }
</script>

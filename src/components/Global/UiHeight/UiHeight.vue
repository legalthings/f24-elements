<template>
    <div ref="content">
        <slot />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class UiHeight extends Vue {
        $refs!: {
            content: HTMLElement,
            offsetHeight: HTMLFormElement
        };

        mounted() {
            this.$emit('height', this.$refs.content.offsetHeight);
        }
    }
</script>

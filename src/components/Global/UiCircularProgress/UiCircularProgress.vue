<template>
    <svg
        :height="radius * 2"
        :width="radius * 2"
    >
        <circle
            :cx="radius"
            :cy="radius"
            r="22"
            stroke="#c0ceda"
            stroke-width="2"
            fill="white"
        />
        <circle
            stroke="#128cf4"
            fill="transparent"
            :stroke-dasharray="circumference + ' ' + circumference"
            :style="{ strokeDashoffset }"
            :stroke-width="stroke"
            :r="normalizedRadius"
            :cx="radius"
            :cy="radius"
        />
    </svg>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiCircularProgress extends Vue {
        @Prop() radius!: any;
        @Prop() progress!: any;
        @Prop() stroke!: any;

        normalizedRadius = this.radius - this.stroke * 2;
        circumference = this.normalizedRadius * 2 * Math.PI;
        localProgress = 0;

        created() {
            this.$nextTick(() => {
                this.localProgress = this.progress;
            });
        }

        get strokeDashoffset() {
            return this.circumference - this.localProgress / 100 * this.circumference;
        }
    }
</script>

<style lang="scss" scoped>
    circle {
        transition: stroke-dashoffset 4s;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
</style>

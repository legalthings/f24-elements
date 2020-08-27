<template>
    <div
        class="search-button"
        v-on="$listeners"
    >
        <UiIcon
            icon="search"
            size="16"
            color="white"
        />
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class SearchButton extends Vue {}
</script>

<style lang="scss" scoped>
    @import '~css/_imports.scss';

    .search-button {
        width: 36px;
        height: 36px;
        display: flex;
        cursor: pointer;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background: $color-blue;

        &:hover {
            background: $color-blue-dark;
        }
    }
</style>

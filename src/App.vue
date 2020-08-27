<template>
    <div
        id="app"
        :class="$store.getters['userStore/type']"
    >
        <router-view />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class App extends Vue {
    }
</script>

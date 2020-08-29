<template>
    <div class="language-selector">
        <b-select
            v-model="$i18n.locale"
            size="is-small"
            rounded
            icon="language"
            @change.native="setLanguage"
        >
            <option
                v-for="lang in options"
                :key="lang.code"
                :value="lang.code"
            >
                {{ lang.label }}
            </option>
        </b-select>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class UiLanguageSelector extends Vue {
        options = [
            { code: 'en', label: 'English' },
            { code: 'nl', label: 'Nederlands' }
        ];

        setLanguage() {
            this.$emit('setLanguage', this.$i18n.locale);
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/imports';

    .language-selector {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 3 * $margin-default;
        padding-top: 2 * $margin-default;
    }

    /deep/ .field {
        display: flex;
        align-items: center;

        label {
            margin: 0;
            font-weight: normal;
        }

        select {
            margin-left: $margin-default;
        }
    }
</style>

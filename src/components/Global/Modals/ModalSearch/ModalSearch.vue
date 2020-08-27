<template>
    <div
        class="modal-card"
    >
        <div class="modal-search">
            <h2>
                Zoeken in ondernemingen
            </h2>

            <b-field>
                <b-input
                    placeholder="Search..."
                    rounded
                    type="search"
                />
                <div class="button-wrapper">
                    <SearchButton @click="$parent.close()" />
                </div>
            </b-field>

            <p>
                Zoek bijvoorbeeld op bedrijfsnaam, aandeelhouder of bedrijfsactiviteit
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import SearchButton from '@/components/Global/Buttons/SearchButton.vue';

    @Component({
        components: { SearchButton }
    })
    export default class ModalSearch extends Vue {
        @Prop() private isMobileRight!: boolean;
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .modal-search {
        text-align: center;
        padding: 20px;

        h2 {
            @include fs-medium;
            color: $color-gray-00;
            margin-bottom: 2 * $margin-default;
        }

        p {
            @include fs-italic;
            margin-top: 2 * $margin-default;
            color: rgba($color-gray-00, .5);
            @include font-size($small-font-sizes)
        }

        /deep/ input {
            outline: none;
            box-shadow: none;
            border-color: transparent;
        }

        .control {
            width: 100%;
        }

        .button-wrapper {
            padding: 2px 4px;
            background: $color-gray-00;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
        }
    }

</style>

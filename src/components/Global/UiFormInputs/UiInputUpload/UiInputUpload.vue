<template>
    <div>
        <b-field
            v-if="label"
            grouped
            :label="label"
        >
            <b-tooltip
                v-if="tooltip"
                multilined
                :label="tooltip"
            >
                <UiIcon icon="more-info" />
            </b-tooltip>
        </b-field>
        <b-field>
            <b-upload
                v-model="files"
                multiple
                drag-drop
                expanded
                required
                :accept="accept"
            >
                <section class="section">
                    <p>
                        <b-icon icon="upload" />
                    </p>
                    <p>
                        {{ placeholder }}
                    </p>
                </section>
            </b-upload>
        </b-field>

        <div class="tags">
            <span
                v-for="(file, index) in files"
                :key="index"
                class="tag is-primary"
            >
                {{ file.name }}
                <button
                    class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)"
                />
            </span>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiInputUpload extends Vue {
        @Prop() value: any;
        @Prop() tooltip!: string;
        @Prop() label!: string;
        @Prop() placeholder!: string;
        @Prop() accept!: string;

        get files() {
            return this.value;
        }

        set files(v: any) {
            this.$emit('input', v);
        }

        deleteDropFile(index) {
            this.files.splice(index, 1);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .field {
        display: flex;
        justify-content: center;
    }

    /deep/ .b-tooltip {
        cursor: pointer;
        margin-left: $margin-default;
    }

    .upload-draggable {

        .section {
            display: flex;
            align-items: center;
            padding: $margin-default;

            p:first-child {
                margin-right: $margin-default;
            }
        }
    }
</style>

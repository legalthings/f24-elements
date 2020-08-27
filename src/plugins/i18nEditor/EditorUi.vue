<template>
    <div class="f24-home">
        <b-loading
            :is-full-page="true"
            :active.sync="loading"
            :can-cancel="false"
        />
        <div class="container">
            <section class="section edit">
                <b-field label="Search">
                    <b-input v-model="search" />
                </b-field>
                <div
                    v-for="(parentValue, parentIndex) in results"
                    :key="parentValue.path"
                    class="box"
                >
                    <p class="parentPath">
                        {{ Object.keys(parentValue.data.TRANSLATIONS.EN)[0] }}
                    </p>
                    <div
                        v-for="(firstChildValue, firstChildKey, firstChildIndex) in parentValue.data.TRANSLATIONS"
                        :key="firstChildIndex"
                    >
                        <p class="firstChildSection">
                            {{ firstChildKey }}
                        </p>

                        <div
                            v-for="(secondChildValue, secondChildKey, secondChildIndex) in firstChildValue"
                            :key="secondChildIndex"
                        >
                            <div
                                v-for="(thirdChildValue, thirdChildKey, thirdChildIndex) in secondChildValue"
                                :key="thirdChildIndex"
                                class="options"
                            >
                                <b-field :label="thirdChildKey">
                                    <b-input
                                        v-model="results[parentIndex].data.TRANSLATIONS[firstChildKey][secondChildKey][thirdChildKey]"
                                        size="is-small"
                                    />
                                    <span />
                                    <b-button
                                        v-if="hasSameValue([parentIndex, firstChildKey, secondChildKey, thirdChildKey,
                                                            results[parentIndex].data.TRANSLATIONS[firstChildKey][secondChildKey][thirdChildKey]])"
                                        :loading="loading"
                                        type="is-primary is-small is-padding-small"
                                        @click="save([parentValue.path, thirdChildValue, thirdChildKey, secondChildKey, firstChildKey, parentIndex])"
                                    >
                                        <b-icon icon="save" />
                                    </b-button>
                                </b-field>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section status">
                <div class="box">
                    <div class="status-header">
                        <b-field
                            grouped
                            group-multiline
                        >
                            <div class="control">
                                <b-taglist attached>
                                    <b-tag type="is-dark">
                                        BRANCH
                                    </b-tag>
                                    <b-tag type="is-success">
                                        {{ status.branch.current }}
                                    </b-tag>
                                </b-taglist>
                            </div>
                            <div class="control">
                                <b-taglist attached>
                                    <b-tag type="is-dark">
                                        FILES
                                    </b-tag>
                                    <b-tag type="is-success">
                                        {{ status.summary.changed }}
                                    </b-tag>
                                </b-taglist>
                            </div>
                            <div class="control">
                                <b-taglist attached>
                                    <b-tag type="is-dark">
                                        CHANGES
                                    </b-tag>
                                    <b-tag type="is-success">
                                        {{ status.summary.insertions }}
                                    </b-tag>
                                </b-taglist>
                            </div>
                        </b-field>
                    </div>
                    <div v-html="prettyHtml" />
                    <div
                        v-if="status.diff"
                        class="buttons"
                    >
                        <b-button

                            type="is-success is-padding-small"
                            rounded
                            @click="commit"
                        >
                            Commit changes
                        </b-button>
                        <b-button
                            type="is-danger is-padding-small"
                            rounded
                            @click="reset"
                        >
                            Discard changes
                        </b-button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import axios from '@/services/axios.service';
    import { cloneDeep } from 'lodash';

    import * as Diff2Html from 'diff2html';
    import 'diff2html/bundles/css/diff2html.min.css';

    export interface TranslationsInterface {
        path: string;
        data: {
            TRANSLATIONS: {
                [key: string]: any;
            }
        };
    }

    @Component
    export default class EditorUi extends Vue {
        translations: Array<TranslationsInterface> = [];
        clone: Array<TranslationsInterface> = [];
        loading = false;
        status = {
            summary: {},
            diff: '',
            branch: {}
        };

        search = '';

        get prettyHtml() {
            return Diff2Html.html(this.status.diff, {
                drawFileList: false
            });
        }

        async onReset() {
            this.loading = true;
            await axios.get('http://localhost:3000/reset');
            await this.init();
            this.$buefy.toast.open('All changes were removed');
        }

        reset() {
            this.$buefy.dialog.confirm({
                message: 'Are you sure?',
                type: 'is-danger',
                onConfirm: () => this.onReset()
            });
        }

        get results() {
            const result: any = [];
            this.translations.forEach(t => {
                Object.keys(t.data.TRANSLATIONS.EN).forEach(k => {
                    Object.keys(t.data.TRANSLATIONS.EN[k]).forEach(kk => {
                        if (t.data.TRANSLATIONS.EN[k][kk].toLowerCase().indexOf(this.search.toLowerCase()) >= 0) {
                            if (!result.includes(t)) result.push(t);
                        }
                    });
                });

                Object.keys(t.data.TRANSLATIONS.NL).forEach(k => {
                    Object.keys(t.data.TRANSLATIONS.NL[k]).forEach(kk => {
                        if (t.data.TRANSLATIONS.NL[k][kk].toLowerCase().indexOf(this.search.toLowerCase()) >= 0) {
                            if (!result.includes(t)) result.push(t);
                        }
                    });
                });
            });
            return result;
        }

        hasSameValue(key: Array<any>) {
            if (!this.clone[key[0]] || !this.clone[key[0]].data.TRANSLATIONS[key[1]] || !this.clone[key[0]].data.TRANSLATIONS[key[1]][key[2]]) return;
            return this.clone[key[0]].data.TRANSLATIONS[key[1]][key[2]][key[3]] !== key[4];
        }

        async save(config: any) {
            this.loading = true;
            const replaceValue = this.clone[config[5]].data.TRANSLATIONS[config[4]][config[3]][config[2]];
            const { data } = await axios.post('http://localhost:3000', {
                newValue: config[1],
                filePath: config[0],
                oldValue: replaceValue
            });
            if (data === 'success') {
                await this.getApiData();
            } else {
                this.$buefy.toast.open('Error trying to save');
            }
            this.loading = false;
            await this.getApiStatus();
        }

        async onCommitConfirm(commitMessage: string) {
            this.loading = true;
            const { data } = await axios.post('http://localhost:3000/commit', {
                message: commitMessage
            });
            if (data === 'success') {
                await this.init();
                this.$buefy.toast.open(
                    {
                        duration: 10000,
                        message: `Changes done with message: ${commitMessage}`,
                        type: 'is-success'
                    }
                );
            } else {
                this.$buefy.toast.open({
                    duration: 10000,
                    message: 'Failed save the changes',
                    type: 'is-danger'
                });
            }
        }

        commit() {
            this.$buefy.dialog.prompt({
                message: 'Commit message',
                inputAttrs: {
                    placeholder: 'e.g. Update usp titles...',
                    maxlength: 100
                },
                trapFocus: true,
                onConfirm: (value) => this.onCommitConfirm(value)
            });
        }

        async created() {
            this.init();
        }

        async init() {
            this.loading = true;
            try {
                await this.getApiData();
                await this.getApiStatus();
            } catch (e) {
                console.log('Fail to fetch api data');
                this.$buefy.toast.open({
                    duration: 10000,
                    message: 'Something went wrong getting api data',
                    type: 'is-danger'
                });
            }
            this.loading = false;
        }

        async getApiData() {
            this.translations = await axios.get('http://localhost:3000').then(r => r.data);
            this.clone = cloneDeep(this.translations);
        }

        async getApiStatus() {
            this.status = await axios.get('http://localhost:3000/status').then(r => r.data);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .container {
        position: relative;
        display: flex;

        .edit {
            flex: 3;
        }
    }

    .status {
        width: 500px;

        .box {
            position: sticky;
            top: 30px;
        }

        .status-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2 * $margin-default;
        }
    }

    .parentPath {
        @include font-size($medium-font-sizes);
        margin-bottom: 2 * $margin-default;
    }

    .firstChildSection {
        @include font-size($small-font-sizes);
        display: inline-block;
        background: $color-gray-10;
        padding: $margin-default/2 $margin-default;
    }

    .options {
        margin-bottom: 2 * $margin-default;

        /deep/ .field {
            align-items: center;

            .label {
                margin: 0 $margin-default 0 0;
                flex: 1;
                text-align: right;
                @include font-size($small-font-sizes);
            }

            .control {
                flex: 4;
                margin-right: $margin-default;
            }
        }
    }

</style>

<template>
    <div class="ui-chat">
        <div
            class="messages"
        >
            <b-loading
                :active="isLoading"
                :is-full-page="false"
            />
            <ul
                ref="message"
                class="message-list"
            >
                <li
                    v-for="(message, index) in messages"
                    :key="index"
                    :class="{'is-me': getIsMe(message.user.email)}"
                >
                    <div class="user-avatar">
                        <UiIcon
                            v-if="$store.getters['userStore/isSupport'] && getIsMe(message.user.email) || !$store.getters['userStore/isSupport'] && !getIsMe(message.user.email)"
                            alt="Support"
                            icon="logo"
                            type="custom"
                            size="60"
                        />
                        <CardLogo
                            v-if="!$store.getters['userStore/isSupport'] && getIsMe(message.user.email) || $store.getters['userStore/isSupport'] && !getIsMe(message.user.email)"
                            :name="message.user.name"
                        />
                    </div>
                    <div class="message-content">
                        <span class="message-date">{{ $f24.formatDate(message.date, true) }}</span>
                        <span>{{ message.message }}</span>
                    </div>
                </li>
            </ul>
            <div v-if="messages.length === 0">
                {{ $t('GLOBAL.NO_DATA_AVAILABLE') }}
            </div>
            <div class="message-sender">
                <UiInputText
                    v-model="message"
                    :label="$t('GLOBAL.NEW_MESSAGE')"
                    type="textarea"
                    :disabled="isSending"
                    rules="min:10"
                />
                <b-button
                    :loading="isSending"
                    :disabled="message.length < 10"
                    type="is-primary is-padding-small"
                    rounded
                    outlined
                    @click="postComment"
                >
                    {{ $t('GLOBAL.SEND_MESSAGE') }}
                </b-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import apiService from '@/services/api.service';
    import alertService from '@/services/alert.service';
    import CardLogo from '@/components/Dashboard/components/CardLogo/CardLogo.vue';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import { isEqualWith } from 'lodash';

    @Component({
        components: { UiInputText, CardLogo }
    })
    export default class UiChat extends Vue {
        $refs!: {
            checkboxElement: HTMLFormElement,
            message: any
        }

        @Prop() organization!: any;
        messages: Array<any> = [];
        isLoading = true;
        message = '';
        isSending = false;

        created() {
            this.getMessages();
            this.$f24.eventService.$on('tickUpdate', this.getMessages);
        }

        async getMessages() {
            try {
                const { data } = await apiService.get('proxy/processes/' + this.organization.id + '/comments');
                if (!isEqualWith(this.messages, data)) {
                    this.messages = data;
                    this.scrollDown();
                }
            } catch (e) {
                alertService.dangerMessage('Error getting messages', e);
            } finally {
                this.isLoading = false;
            }
        }

        async postComment() {
            this.isSending = true;
            const message = { message: this.message };
            try {
                const { status } = await apiService.post('proxy/processes/' + this.organization.id + '/comments', message);
                if (status === 200) {
                    await this.getMessages();
                    alertService.successMessage('Message was sent');
                } else {
                    alertService.dangerMessage('Message was not sent');
                }
            } catch (e) {
                alertService.dangerMessage('Message was not sent');
            } finally {
                this.isSending = false;
                this.message = '';
            }
        }

        getIsMe(email: string) {
            return this.$store.getters['userStore/user'].email === email;
        }

        scrollDown() {
            const el = this.$refs.message;
            if (!el) return;
            setTimeout(() => {
                el.scroll({
                    top: this.$refs.message.scrollHeight,
                    behavior: 'smooth'
                });
            }, 40);
        }

        beforeDestroy() {
            this.$f24.eventService.$off('tickUpdate', this.getMessages);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .messages {
        display: flex;
        flex-direction: column;
        margin-top: $margin-default;
        position: relative;
    }

    .message-list {
        display: flex;
        flex-direction: column;
        max-height: 220px;
        overflow: auto;

        li {
            display: flex;
            margin-bottom: $margin-default;
            justify-content: space-between;

            &.is-me {
                flex-direction: row-reverse;

                .user-avatar {
                    margin: 8px 0 0 2 * $margin-default;
                }

                .message-content {
                    &:before {
                        right: -14px;
                        left: auto;
                    }
                }
            }
        }

        .user-avatar {
            display: flex;
            margin-right: $margin-default;

            /deep/ .logo {
                width: 40px;
                height: 40px;

                span {
                    font-size: 20px;
                }
            }

            /deep/ .firm {
                fill: $color-gray-100;
            }
        }

        .message-content {
            flex: 1;
            margin: 0 $margin-default;
            background: $color-blue-gray-01;
            border-radius: $border-radius / 2;
            padding: 2 * $margin-default;
            position: relative;
            display: flex;
            flex-direction: column;

            span {
                margin-right: $margin-default;
            }

            &:before {
                content: '';
                width: 0;
                height: 0;
                border-left: 14px solid transparent;
                border-right: 14px solid transparent;
                border-top: 14px solid $color-blue-gray-01;
                position: absolute;
                left: -14px;
                top: 16px;
            }

            .message-date {
                color: $color-blue-gray-02;
                @include font-size($small-font-sizes);
                margin-bottom: $margin-default;
                font-style: italic;
            }
        }
    }

    .message-sender {
        margin-top: 2 * $margin-default;

        /deep/ textarea {
            height: 90px !important;
            min-height: auto;
        }

        .button {
            margin-top: $margin-default;
        }
    }

    /deep/ .loading-overlay.is-active {
        height: 200px;
    }
</style>

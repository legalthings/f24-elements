<template>
    <div>
        <EditableBlock
            :is-valid="isValid"
            save-event-name="userSecurityUpdate"
            @userSecurityUpdate="updatePassword"
        >
            <div slot="header">
                {{ $t('USER_ACCOUNT.PASSWORD') }}
            </div>
            <div
                slot="content"
                slot-scope="{isEdit}"
            >
                <ul class="content-list">
                    <EditableBlockItem :label="$t('USER_ACCOUNT.CURRENT_PASSWORD')">
                        <template #value>
                            • • • • • • • • • •
                        </template>
                        <template #input>
                            <b-input
                                v-model="currentPassword"
                                class="color"
                                password-reveal
                                type="password"
                            />
                        </template>
                    </EditableBlockItem>
                    <EditableBlockItem
                        v-if="isEdit"
                        :label="$t('USER_ACCOUNT.NEW_PASSWORD')"
                    >
                        <template #input>
                            <b-input
                                v-model="newPassword"
                                class="color"
                                password-reveal
                                type="password"
                            />
                        </template>
                    </EditableBlockItem>
                </ul>
            </div>
        </EditableBlock>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import EditableBlock from '@/components/Global/EditableBlock/EditableBlock.vue';
    import userService from '@/services/user.service';
    import alertService from '@/services/alert.service';
    import EditableBlockItem from '@/components/Global/EditableBlock/EditableBlockItem.vue';

    @Component({
        components: { EditableBlockItem, EditableBlock }
    })
    export default class SecurityBlock extends Vue {
        @Prop() value!: any;
        newPassword = '';
        currentPassword = '';

        enableFactor() {
            alertService.successMessage('Enable 2FA');
        }

        get isValid() {
            return this.newPassword.length > 2 && this.currentPassword.length > 2;
        }

        async updatePassword() {
            const update = {
                password: this.newPassword,
                old_password: this.currentPassword
            };
            try {
                const { status } = await userService.updateUser(update);
                if (status === 200) {
                    alertService.successMessage('Your password was changed!');
                }
            } finally {
                this.newPassword = '';
                this.currentPassword = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .content-title {
        margin-top: 5 * $margin-default;
        @include fs-medium;
        display: flex;
        justify-content: space-between;
        @include font-size($medium-font-sizes);
        border-bottom: 1px solid $color-blue-gray-01;
        padding-bottom: 2 * $margin-default;
        margin-bottom: 3 * $margin-default;
    }
</style>

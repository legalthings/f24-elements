<template>
    <div class="profile-element">
        <div class="avatar">
            <figure>
                {{ firstLetters }}
            </figure>
            <div class="name">
                {{ name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class ProfileAvatar extends Vue {
        @Prop() avatar!: string;
        @Prop() private name!: string;

        get firstLetters() {
            return this.name.split(' ').map(n => (n.slice(0, 1))).join('');
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .profile-element {
        display: flex;
        align-items: center;

        .dropdown {
            margin-left: 16px;
        }

        @include breakpoint-down(md) {
            .name, .dropdown {
                display: none;
            }
        }
    }

    .name {
        min-width: 80px;
    }

    .avatar {
        display: flex;
        align-items: center;

        figure {
            flex-shrink: 0;
            border-radius: 100%;
            overflow: hidden;
            width: 40px;
            height: 40px;
            @include box-shadow();
            background: $color-blue-gray-02;
            color: $color-gray-00;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;

            @include breakpoint-up(md) {
                margin-right: $margin-default;
                width: 48px;
                height: 48px;
            }
        }
    }

</style>

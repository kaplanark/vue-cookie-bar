<script setup>
const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    variant: {
        type: String,
        default: 'default'
    }
});
</script>

<template>
    <button :class="'btn btn--' + props.variant">{{ props.name }}</button>
</template>

<style lang="scss">
.btn {
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 6px 18px;
    outline: none;
    border: none;

    &::before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transform-origin: center right;
        transform: scaleX(0);
        transition: transform 0.25s ease-in-out;
    }

    &:hover {
        cursor: pointer;

    }

    &:hover::before {
        transform-origin: center left;
        transform: scaleX(1);
    }

    &--default {
        background-color: hsl(236, 32%, 26%);

        &::before {
            background-color: #9c2ffc;
        }
    }

    &--primary {
        background-color: hsl(236, 32%, 26%);

        &::before {
            background-color: #fc2f70;
        }
    }

    &--secondary {
        background-color: hsl(236, 32%, 26%);

        &::before {
            background-color: #2f80fc;
        }
    }

    &--success {
        background-color: hsl(236, 32%, 26%);

        &::before {
            background-color: #27ae60;
        }
    }

    &--danger {
        background-color: hsl(236, 32%, 26%);

        &::before {
            background-color: #eb5757;
        }
    }

    &--warning {
        background-color: hsl(236, 32%, 26%);

        &::before {
            background-color: #f2994a;
        }
    }

    &--info {
        background-color: hsl(236, 32%, 26%);

        &::before {
            background-color: #2d9cdb;
        }
    }
}
</style>
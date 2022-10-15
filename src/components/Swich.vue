<script setup>
const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    checked: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:checked']);

const inputHandler = (e) => {
    emit('update:checked', e.target.value);
};
</script>

<template>
    <input type="checkbox" :name="props.name" :id="props.name" class="swich" :checked="props.checked" @input="inputHandler">
</template>

<style lang="scss">
.swich {
    position: relative;
    width: 40px;
    height: 20px;
    background-color: #fc2f70;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 40px;
        height: 20px;
        background-color: #1f213c;
        border-radius: 16px;
        transition: all 0.15s ease-in-out;
    }

    &::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        background-color: #fff;
        border-radius: 50%;
        transition: all 0.15s ease-in-out;
    }

    &:checked {
        background-color: #2f80ed;

        &::after {
            left: 21px;
        }

        &::before {
            background-color: #27ae60;
        }
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;

        &::after {
            background-color: #fff;
        }
    }
}
</style>
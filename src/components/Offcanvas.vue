<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'md'
    },
});

const emit = defineEmits(['update:show']);

const closeHandler = () => {
    emit('update:show', false);
};
</script>

<template>
    <div class="offcanvas" :class="'offcanvas--' + props.size" v-if="props.show">
        <div class="offcanvas__mask" @click="closeHandler"></div>
        <div class="offcanvas__wrapper">
            <div class="offcanvas-header">
                <slot name="header"></slot>
            </div>
            <div class="offcanvas-body">
                <slot name="body"></slot>
            </div>
            <div class="offcanvas-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.offcanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;

    &__mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.323);
        z-index: 1;
    }

    &__wrapper {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 24px;
        padding: 16px;
        background-color: rgba(0, 0, 0, 0.718);
    }

    &-header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    &-body {
        flex: 1;
        width: 100%;
    }

    &-footer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    &--sm {
        .offcanvas__wrapper {
            width: 300px;
        }
    }

    &--md {
        .offcanvas__wrapper {
            width: 400px;
        }
    }

    &--lg {
        .offcanvas__wrapper {
            width: 500px;
        }
    }

    &--xl {
        .offcanvas__wrapper {
            width: 600px;
        }
    }
}
</style>
<script setup>
const props = defineProps({
    color: {
        type: String,
        default: '#fff'
    },
});
</script>

<template>
    <div class="balls">
        <div v-for="item in 3" :style="{'background-color': props.color}"></div>
    </div>
</template>

<style lang="scss">
.balls {
    width: 42px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    div {
        width: 8px;
        height: 8px;

        &:nth-of-type(1) {
            transform: translateX(-100%);
            animation: left-swing 0.5s ease-in alternate infinite;
        }

        &:nth-of-type(3) {
            transform: translateX(-95%);
            animation: right-swing 0.5s ease-out alternate infinite;
        }
    }
}

@keyframes left-swing {

    50%,
    100% {
        transform: translateX(95%);
    }
}

@keyframes right-swing {
    50% {
        transform: translateX(-95%);
    }

    100% {
        transform: translateX(100%);
    }
}
</style>
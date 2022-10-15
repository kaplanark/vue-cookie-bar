<script setup>
import { computed } from "vue"
import { setCookie, getCookie } from "../utils/cookie"

import Button from "./Button.vue"
import Balls from "./Balls.vue"

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  days: {
    type: Number,
    default: 1
  },
  feedback: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['update:feedback','more']);

const acceptHandler = () => {
  emit('update:feedback', 'accepted');
  setCookie('cookie-policy', 'accepted', props.days);
};

const rejectHandler = () => {
  emit('update:feedback', false);
  setCookie('cookie-policy', 'rejected', props.days);
};

const settingsHandler = () => {
  emit('more', true);
};

const show = computed(() => {
  const cookiePolicy = getCookie('cookie-policy');
  if (cookiePolicy || props.feedback === 'accepted' || props.feedback === 'rejected') {
    return false;
  } else {
    return true;
  }
}) 
</script>

<template>
  <div class="cookie" v-if="show">
    <div class="cookie__header">
      <Balls color="#fc2f70"></Balls>
    </div>
    <div class="cookie__content">
      <slot name="content">
        {{ props.text }}
      </slot>
    </div>
    <div class="cookie__action">
      <slot name="action">
        <Button name="Accept" variant="success" @click="acceptHandler"></Button>
        <Button name="Reject" variant="danger" @click="rejectHandler"></Button>
        <Button name="Settings" variant="default" @click="settingsHandler"></Button>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.cookie {
  position: fixed;
  left: 16px;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.718);
  padding: 16px;
  gap: 24px;
  max-width: 400px;

  &__content {
    color: rgb(208, 208, 208);
    width: 100%;
  }

  &__action {
    display: flex;
    gap: 22px;
  }
}
</style>
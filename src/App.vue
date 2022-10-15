<script setup>
import { ref } from "vue";
import { deleteCookie, setCookie } from "./utils/cookie";
import Cookie from "./components/Cookie.vue";
import Button from "./components/Button.vue";
import Offcanvas from "./components/Offcanvas.vue";
import Divider from "./components/Divider.vue";
import Swich from "./components/Swich.vue";

const cookieText = ref("This website uses cookies to ensure you get the best experience on our website. Learn more about our Privacy Policy.");
const feedback = ref('');
const showOffcanvas = ref(false);

const deleteHandler = () => {
  deleteCookie("cookie-policy");
  document.location.reload();
};

const moreHandler = () => {
  showOffcanvas.value = true;
};

const closeHandler = () => {
  showOffcanvas.value = false;
};

const saveHandler = () => {
  showOffcanvas.value = false;
  setCookie("cookie-policy", "accepted", 1);
  document.location.reload();
};
</script>

<template>
  <div class="container">
    <Teleport to="body">
      <Cookie :text="cookieText" days="1" v-model:feedback="feedback" @more="moreHandler"></Cookie>
    </Teleport>

    <Button name="Delete Cookie" variant="danger" @click="deleteHandler"></Button>

    <Teleport to="body">
      <Offcanvas v-model:show="showOffcanvas" size="lg">
        <template #header>
          <h3>Customize your preferences</h3>
          <Divider title="Settings" title-placement="left"></Divider>
        </template>
        <template #body>

          <div class="input-group">
            <Swich name="marketing" :checked="true"></Swich>
            <label for="marketing">Receive marketing communications from us</label>
          </div>

          <div class="input-group">
            <Swich name="analytics"></Swich>
            <label for="analytics">Allow us to use analytics cookies</label>
          </div>

          <div class="input-group">
            <Swich name="functional" :checked="true"></Swich>
            <label for="functional">Allow us to use functional cookies</label>
          </div>
          <div class="input-group">
            <Swich name="preferences"></Swich>
            <label for="preferences">Allow us to use preferences cookies</label>
          </div>
          <div class="input-group">
            <Swich name="social"></Swich>
            <label for="social">Allow us to use social media cookies</label>
          </div>
          <div class="input-group">
            <Swich name="advertising"></Swich>
            <label for="advertising">Allow us to use advertising cookies</label>
          </div>
        </template>
        <template #footer>
          <div class="btn-group">
            <Button name="Close" variant="danger" @click="closeHandler"></Button>
            <Button name="Save" variant="success" @click="saveHandler"></Button>
          </div>
        </template>
      </Offcanvas>
    </Teleport>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background-color: #242424;
  opacity: 1;
  background-image: linear-gradient(45deg, #353535 50%, #242424 50%);
  background-size: 6px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
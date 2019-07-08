<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="container-fluid">
      <div class="row">
        <AppRightNav></AppRightNav>
        <!-- <AppHerosList></AppHerosList> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppRightNav from "./components/AppRightNav";
// import AppHerosList from "./view/heros/HeroList";

export default {
  name: "app",
  components: {
    AppHeader,
    AppRightNav
  }
};
</script>

<style>
</style>

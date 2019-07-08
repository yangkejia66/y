<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="container-fluid">
      <div class="row">
        <AppRightNav></AppRightNav>
        <AppHerosList></AppHerosList>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppRightNav from "./components/AppRightNav";
import AppHerosList from "./components/AppHerosList";

export default {
  name: "app",
  components: {
    AppHeader,
    AppRightNav,
    AppHerosList
  }
};
</script>

<style>
</style>

<template>
  <div>
    <i class="light-icon-align-left menu-icon" @click="toggleDrawer"></i>
    <div class="sidemenu__backdrop" v-if="showDrawer" @click="toggleDrawer()"></div>
    <app-navigation-drawer :show-drawer="showDrawer" @toggle-drawer="toggleDrawer()" />
    <div class="page-wrap">
      <div class="page-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      showDrawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.showDrawer = !this.showDrawer;
    },
  },
};
</script>
<style lang="scss">
.menu-icon {
  display: none;
}
@media (max-width: 768px) {
  .menu-icon {
    display: inline-block;
    margin: 12px;
    font-size:36px;
    cursor: pointer;
  }
}
</style>
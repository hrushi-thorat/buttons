<template>
  <div>
    <!-- <app-header @toggle-drawer="toggleDrawer()">
      <template #app-search>
        <slot name="app-search"> </slot>
      </template>
    </app-header> -->
    <div class="sidemenu__backdrop" v-if="showDrawer" @click="toggleDrawer()"></div>
    <app-navigation-drawer :show-drawer="showDrawer" @toggle-drawer="toggleDrawer()" />
    <div class="page-wrap">
      <div class="page-content">
        <slot name="page-content">
          <nuxt-child />
        </slot>
      </div>
      <!-- <app-footer /> -->
    </div>
  </div>
</template>

<script>
// import 'light-icons/dist/light-icon.css';

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

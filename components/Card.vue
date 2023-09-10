<template>
  <div class="example_card-wrapper gap-2 flex-wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.example_card-wrapper {
  /* background-color: #fff !important; */
  padding: 20px !important;
  width: 100%;
  min-height: 100px;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
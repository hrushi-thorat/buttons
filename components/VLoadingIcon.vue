<template>
  <div :class="['lds-ellipsis', black ? 'black' : '']">
    <div></div><div></div><div></div><div></div>
  </div>
</template>

<script>
export default {
  name: 'VLoadingIcon',
  props: {
    black: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 100%;
  outline: none;
  &.black {
    div {
      background: #000;
    }
  }
  div {
    position: absolute;
    top: calc(50% - 4px);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    &:nth-child(1) {
      left: 2px;
      animation: lds-ellipsis1 0.6s infinite;
    }
    &:nth-child(2) {
      left: 2px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    &:nth-child(3) {
      left: 18px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    &:nth-child(4) {
      left: 34px;
      animation: lds-ellipsis3 0.6s infinite;
    }
  }
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(16px, 0);
  }
}
</style>

<template>
    <button :class="['button', full ? 'full' : '']" :disabled="disabled || loading">
      <transition name="slide-fade" mode="out-in">
        <span v-if="!loading">
          <slot></slot>
        </span>
        <VLoadingIcon v-else class="loading" />
      </transition>
    </button>
  </template>
  
  <script>
  
  export default {
    name: 'BasicButton',
    props: {
      full: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .button {
    font-size: 1.4rem;
    line-height: 35px;
    height: 35px;
    font-weight: 500;
    padding: 0px 30px;
    box-sizing: border-box;
    text-align: center;
    background-color: black;
    color: white;
    border-radius: 0;
    border: none;
    cursor: pointer;
    outline: none;
  
    &.full {
      width: 100%;
    }
  
    span {
      white-space: nowrap;
    }
  }
  
  .loading {
    vertical-align: middle;
  }
  </style>
  
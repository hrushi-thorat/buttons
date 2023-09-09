<template>
    <button  :class="['lv-button',buttonClass,variant]" v-bind="$attrs" :type="type" v-on="listeners">
      <div v-if="$slots['prepend'] || icon" class="lv-button__prepend">
        <slot name="prepend">
          <div v-if="icon" class="lv-button__icon">
            <i :class="icon" />
          </div>
        </slot>
      </div>
      <div class="lv-button__label">
        <slot>
          {{ label || '&nbsp;' }}
        </slot>
      </div>
      <div v-if="$slots['append'] || iconRight" class="lv-button__append">
        <slot name="append">
          <div v-if="iconRight" class="lv-button__icon">
            <i :class="iconRight" />
          </div>
        </slot>
      </div>
    </button>
  </template>
  
  <script>
  // import Ripple from '@/components/ripple/Ripple';
  
  export default {
    props: {
      icon: {
        type: String,
      },
      variant:{
        type:String,
        default:'primary'
      },
      iconRight: {
        type: String,
      },
      label: {
        type: String,
      },
      // loading: { // upcomming with needed slot
      //     type: Boolean,
      //     default: false,
      // },
      outlined: {
        type: Boolean,
        default: false,
      },
      push: {
        type: Boolean,
        default: false,
      },
      raised: {
        type: Boolean,
        default: false,
      },
      deepShadow: {
        type: Boolean,
        default: false,
      },
      deepShadowHover: {
        type: Boolean,
        default: false,
      },
  
      rounded: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String,
        default: 'md',
        // validation: [TODO] for only possible values
      },
      type: {
        type: String,
        default: 'button',
      },
    },
    computed: {
      buttonClass() {
        return {
          '--icon-only': this.icon && !this.label,
          '--rounded': this.rounded,
          '--size-sm': this.size === 'sm',
          '--size-md': this.size === 'md',
          '--size-lg': this.size === 'lg',
          '--size-xl': this.size === 'xl',
          '--raised': this.raised,
          '--deep-shadow-hover': this.deepShadowHover,
          '--deep-shadow': this.deepShadow,
          '--push': this.raised || this.outlined || this.push,
          '--outlined': this.outlined,
        };
      },
      listeners() {
        return this.$listeners
          ? {
              // Depreciated in Vue 3
              ...this.$listeners,
            }
          : {};
      },
    },
    // directives: {
    //     'ripple': Ripple
    // }
  };
  </script>
  <style lang="scss">
 .lv-button {
  margin: 0;
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  vertical-align: bottom;
  text-align: center;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  &.--rounded {
    border-radius: 2rem;
  }
  &.--push {
    transition: all 0.2s ease-in-out;
    // box-shadow: none !important;
    &:active {
      box-shadow: none;
      transform: translateY(2px);
    }
  }
  &.--icon-only {
    justify-content: center;
    &.--rounded {
      border-radius: 50%;
    }
    .lv-button__prepend {
      margin: 0;
    }
    .lv-button__append {
      margin: 0;
    }
    .lv-button__label {
      visibility: hidden;
      width: 0;
      flex: 0 0 auto;
    }
  }
  .lv-button__prepend {
    margin-right: 0.5rem;
  }
  .lv-button__append {
    margin-left: 0.5rem;
  }
  .lv-button__label {
    flex: 1 1 auto;
  }
  .lv-button__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
.primary {
  --theme-color: #3C4CAD;
  --theme-color-light: #C3C8E6;
  --theme-color-dark: #2B367B;
  --theme-color-inverse: #ffffff;
}
.secondary {
  --theme-color: #1CA7EC;
  --theme-color-light: #B9E4F9;
  --theme-color-dark: #0F5C82;
  --theme-color-inverse: #ffffff;
}
.tertiary {
  --theme-color: #70CF88;
  --theme-color-light: #D6F7DE;
  --theme-color-dark: #447D52;
  --theme-color-inverse: #ffffff;
}
.info {
  --theme-color: #0288d1;
  --theme-color-light: #89d4fe;
  --theme-color-dark: #027abc;
  --theme-color-inverse: #ffffff;
}
.warning {
  --theme-color: #F9C449;
  --theme-color-light: #FDEDC7;
  --theme-color-dark: #896C28;
  --theme-color-inverse: #ffffff;
}
.danger {
  --theme-color: #FF6464;
  --theme-color-light: #FFE0E0;
  --theme-color-dark: #C02828;
  --theme-color-inverse: #ffffff;
}

.complementary{
  --theme-color: #edf1f5 !important;
  --theme-color-light: #8ed8d6 !important;
  --theme-color-dark: #dfe5ea !important;
  --theme-color-inverse: #718096 !important;
}

.lv-button {
  color: var(--theme-color-inverse);
  background-color: var(--theme-color);
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, border-radius 0.3s;
  border-radius: 4px;
  &:enabled {
    &:hover {
      background-color: var(--theme-color-dark);
      color: var(--theme-color-inverse);
    }
    &:active {
      background-color: var(--theme-color);
      color: var(--theme-color-inverse);
    }
  }
  &:focus {
    outline: 0 none;
    outline-offset: 0;
  }
  &.--size-sm {
    font-size: 0.875rem;
    padding: 0.4375rem 0.875rem;
    .lv-button__icon i {
      font-size: 0.875rem;
    }
  }
  &.--size-md {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    .lv-button__icon i {
      font-size: 1rem;
    }
  }
  &.--size-lg {
    font-size: 1.25rem;
    padding: 0.625rem 1.25rem;
    .lv-button__icon i {
      font-size: 1.25rem;
    }
  }
  &.--size-xl {
    font-size: 1.5rem;
    padding: 0.75rem 1.5rem;
    .lv-button__icon i {
      font-size: 1.5rem;
    }
  }
  /* Raised Buttons */
  &.--raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  // Buttons Hover Shadow
  &.--deep-shadow-hover:hover {
    box-shadow: 0 6px 16px -1px var(--theme-color);
  }
  // Deep Shodow
  &.--deep-shadow {
    box-shadow: 0 6px 16px -1px var(--theme-color);
  }
  // Raised buttons
  &.--raised.--deep-shadow-hover:hover {
    background-color: var(--theme-color) !important;
    color: #ffffff !important;
    box-shadow: 0px 7px 10px var(--theme-color);
    transform: translateY(-3px);
  }

  &.--icon-only {
    width: 2.357rem;
    // padding: 0.5rem 0;
    &.--rounded {
      height: 2.357rem;
    }
  }
  &.--outlined {
    background-color: transparent;
    color: var(--theme-color);
    border: 1px solid;
    &:enabled {
      &:hover {
        background-color: var(--theme-color);
        border: 1px solid var(--theme-color);
      }
      &:active {
        background-color: var(--theme-color);
        border: 1px solid var(--theme-color);
      }
    }
    &.lv--complementary{
      color: var(--theme-color-inverse);
      &:enabled {
        &:hover {
          background: rgba(33, 150, 243, 0.04);
          color: var(--theme-color-inverse);
          border-color: var(--theme-color-inverse);
        }
        &:active {
          background: rgba(33, 150, 243, 0.04);
          color: var(--theme-color-inverse);
          border-color: var(--theme-color-inverse); 
        }
      }
    }

  }
  &.--text-button {
    background-color: transparent;
    color: var(--theme-color);
    border-color: transparent;
    &:enabled {
      &:hover {
        background: rgba(33, 150, 243, 0.04);
        color: var(--theme-color);
        border-color: transparent;
      }
      &:active {
        background: rgba(33, 150, 243, 0.04);
        color: var(--theme-color);
        border-color: var(--theme-color);
      }
    }
    &.lv--complementary{
      color: var(--theme-color-inverse);
      &:enabled {
        &:hover {
          background: rgba(33, 150, 243, 0.04);
          color: var(--theme-color-inverse);
          border-color: var(--theme-color-inverse);
        }
        &:active {
          background: rgba(33, 150, 243, 0.04);
          color: var(--theme-color-inverse);
          border-color: var(--theme-color-inverse); 
        }
      }
    }
  }
  &.--link-button {
    color: var(--theme-color);
    background: transparent;
    border: transparent;
    text-decoration: none;
    font-weight: 500;
    &:enabled {
      &:hover {
        background: rgba(0, 0, 0, 0.05);
        color: var(--theme-color);
        border-color: transparent;
      }
      &:focus {
        background: rgba(0, 0, 0, 0.05);
        box-shadow: none;
        border-color: transparent;
      }
      &:active {
        background: transparent;
        color: var(--theme-color);
        border-color: transparent;
      }
    }
  }
}



  </style>
  
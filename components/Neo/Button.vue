<template>
  <button
    :class="['neu-light', buttonClass, variant]"
    v-bind="$attrs"
    :type="type"
  >
    <div
      v-if="$slots['prepend'] || icon || loadingPosition === 'suffix'"
      class="lv-button__prepend"
    >
      <UISpinner
        v-if="loading && loadingPosition === 'suffix'"
        :color="spinnerColor"
        :size="spinnerSize"
      />
      <slot v-else name="prepend">
        <div v-if="icon" class="lv-button__icon">
          <i :class="icon" />
        </div>
      </slot>
    </div>
    <slot>
      {{ label }}
    </slot>

    <div
      v-if="$slots['append'] || iconRight || loadingPosition === 'prefix'"
      class="lv-button__append"
    >
      <UISpinner
        v-if="loading && loadingPosition === 'prefix'"
        :color="spinnerColor"
        :size="spinnerSize"
      />
      <slot v-else name="append">
        <div v-if="iconRight" class="lv-button__icon">
          <i :class="iconRight" />
        </div>
      </slot>
    </div>
  </button>
</template>
  
  <script>
export default {
  props: {
    icon: {
      type: String,
    },
    variant: {
      type: String,
      default: "primary",
    },
    iconRight: {
      type: String,
    },
    label: {
      type: String,
    },
    loadingPosition: {
      type: String,
      default: "prefix",
    },
    spinnerSize: {
      type: String,
      default: "4",
    },
    spinnerColor: {
      type: String,
      default: "blue",
    },
    loading: {
      type: Boolean,
      default: false,
    },
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
      default: "md",
      // validation: [TODO] for only possible values
    },
    type: {
      type: String,
      default: "button",
    },
  },
  computed: {
    buttonClass() {
      return {
        "--icon-only": this.icon && !this.label,
        "--rounded": this.rounded,
        "--size-sm": this.size === "sm",
        "--size-md": this.size === "md",
        "--size-lg": this.size === "lg",
        "--size-xl": this.size === "xl",
        "--raised": this.raised,
        "--deep-shadow-hover": this.deepShadowHover,
        "--deep-shadow": this.deepShadow,
        "--push": this.raised || this.outlined || this.push,
        "--outlined": this.outlined,
      };
    },
  },
};
</script>
  
  <style lang="scss">
.neu-light {
  @apply flex items-center justify-between gap-2;
  font-size: 16px;
  line-height: 16px;
  padding: 16px 43px;
  border: 0;
  outline: 0;
  font-weight: 900;
  cursor: pointer;
  border-radius: 34px;
  transition: 0.25s;
  background-color: rgb(247, 239, 244);
  filter: drop-shadow(3.4px 3.4px 3.4px rgb(183, 177, 181))
    drop-shadow(-3.4px -3.4px 3.4px white);
  -webkit-filter: drop-shadow(3.4px 3.4px 3.4px rgb(183, 177, 181))
    drop-shadow(-3.4px -3.4px 3.4px white);
  box-shadow: inset 4.3px 4.3px 7px #fff;

  &:hover {
    filter: drop-shadow(5px 5px 3.4px rgb(183, 177, 181));
    -webkit-filter: drop-shadow(5px 5px 3.4px rgb(183, 177, 181));
    box-shadow: inset 2.5px 2.5px 2.5px #fff;
  }
  &:active {
    filter: drop-shadow(0px 0px 0px rgb(183, 177, 181));
    -webkit-filter: drop-shadow(0px 0px 0px rgb(183, 177, 181));
    box-shadow: inset 4.3px 4.3px 7px rgb(183, 177, 181);
  }
  &:disabled {
    cursor: not-allowed;
    filter: unset;
    box-shadow: unset;
    filter: drop-shadow(3px 1px 18px rgb(255, 255, 255));
    -webkit-filter: drop-shadow(3px 1px 18px rgb(255, 255, 255));
    box-shadow: inset 5.3px 5.3px 7px rgba(183, 177, 181, 0.34);
    border: 1px solid rgb(255, 255, 255);
    color: #666;
    text-shadow: 1px 1px 1px white;
    &:hover {
      color: #666;
    }
  }

  &.active {
    filter: unset;
    box-shadow: unset;
    filter: drop-shadow(3px 1px 18px rgb(255, 255, 255));
    -webkit-filter: drop-shadow(3px 1px 18px rgb(255, 255, 255));
    box-shadow: inset 5.3px 5.3px 7px rgba(183, 177, 181, 0.34);
    border: 1px solid rgb(255, 255, 255);
    color: #666;
    text-shadow: 1px 1px 1px white;
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
}
.action {
  color: #444;
  &:hover {
    color: #321;
  }
}

.warn {
  color: #f3b918;
  text-shadow: 1px 1.6px 1px #fff;
  &:hover {
    color: rgb(255, 221, 64);
  }
}
.danger {
  color: #d44746;
  text-shadow: 1px 1.6px 1px #fff;
  &:hover {
    color: #f21616;
  }
}
</style>
  
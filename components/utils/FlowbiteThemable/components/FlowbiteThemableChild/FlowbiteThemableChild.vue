<template>
  <component :is="tag" :class="simplifyTailwindClasses(classAttr, classes)">
    <slot />
  </component>
</template>
<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue';
import { computed, toRefs, useAttrs } from 'vue';

import { useFlowbiteThemableChildClasses } from './composables/useFlowbiteThemableChildClasses';
import { simplifyTailwindClasses } from '@/utils/simplifyTailwindClasses';
import type { FlowbiteTheme } from '@/components/utils/FlowbiteThemable/types';
import type { ThemableChildrenApply } from '@/components/utils/FlowbiteThemable/components/FlowbiteThemableChild/types';

const props = defineProps({
  apply: {
    type: Array as PropType<ThemableChildrenApply[]>,
    required: true,
  },
  tag: {
    type: [String, Object],
    default: 'div',
  },
  theme: {
    type: String as PropType<FlowbiteTheme>,
    default: undefined,
  },
});

const attrs = useAttrs();
const { classes } = useFlowbiteThemableChildClasses(toRefs(props));

const classAttr: ComputedRef<string> = computed(() => {
  return (attrs.class as string) || '';
});
</script>

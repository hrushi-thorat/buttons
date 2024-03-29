import type { SpinnerColor, SpinnerSize } from '../types';
import { computed, ComputedRef } from 'vue';
import type { Ref } from 'vue';
import classNames from 'classnames';

const sizes: Record<SpinnerSize, string> = {
  '0': 'w-0 h-0',
  '0.5': 'w-0.5 h-0.5',
  '1': 'w-1 h-1',
  '1.5': 'w-1.5 h-1.5',
  '10': 'w-10 h-10',
  '11': 'w-11 h-11',
  '12': 'w-12 h-12',
  '2': 'w-2 h-2',
  '2.5': 'w-2.5 h-2.5',
  '3': 'w-3 h-3',
  '4': 'w-4 h-4',
  '5': 'w-5 h-5',
  '6': 'w-6 h-6',
  '7': 'w-7 h-7',
  '8': 'w-8 h-8',
  '9': 'w-9 h-9',
  px: 'w-px h-px',
};

const colors: Record<SpinnerColor, string> = {
  blue: 'fill-blue-600',
  gray: 'fill-gray-600 dark:fill-gray-300',
  green: 'fill-green-500',
  pink: 'fill-pink-600',
  purple: 'fill-purple-600',
  red: 'fill-red-600',
  yellow: 'fill-yellow-400',
  white: 'fill-white',
};

export type UseSpinnerClassesProps = {
  size: Ref<SpinnerSize>;
  color: Ref<SpinnerColor>;
};

export const useSpinnerClasses = (props: UseSpinnerClassesProps): { spinnerClasses: Ref<string> } => {
  const animateClasses: ComputedRef<string> = computed(() => 'animate-spin');
  const sizeClasses: ComputedRef<string> = computed(() => sizes[props.size.value]);
  const colorClasses: ComputedRef<string> = computed(() => colors[props.color.value] || colors.blue);
  const bgColorClasses: ComputedRef<string> = computed(() => 'text-gray-200 dark:text-gray-600');

  const spinnerClasses: ComputedRef<string> = computed(() => {
    return classNames(sizeClasses.value, bgColorClasses.value, colorClasses.value, animateClasses.value);
  });

  return {
    spinnerClasses,
  };
};

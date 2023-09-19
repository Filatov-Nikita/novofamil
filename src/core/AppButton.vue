<template>
  <component
    :is="tag"
    class="tw-rounded-[16px] tw-text-white  tw-text-center tw-p-25 active:tw-bg-opacity-90 disabled:tw-bg-dark disabled:tw-text-secondary"
    :class="{
      disable: disabled,
      'tw-bg-third hover:tw-bg-opacity-80': theme === 'gray',
      'tw-bg-orange hover:tw-bg-orangeHover': theme === 'orange',
    }">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    theme: {
      default: 'orange',
      type: String
    },
    tag: {
      default: "button",
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.disable {
  @apply tw-text-gray tw-bg-dark-line/15;
}
</style>

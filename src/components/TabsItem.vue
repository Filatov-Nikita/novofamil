<template>
  <button
    class="tw-p-10 tw-px-16 tw-flex tw-items-center tw-rounded-2xl"
    :class="{
      'tw-bg-white tw-text-secondary': active,
      'tw-bg-secondary tw-text-white': !active
    }"
  >
    <AppIcon
      class="tw-mr-10"
      :name="icon"
      fill="secondary"
      :fillHex="active ? fill : '#ffffff'"
      size="30px"
    />
    <span class="tw-text-sm tw-leading-100">{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String
    },
    icon: {
      required: true,
      type: String
    },
    active: {
      default: false,
      type: Boolean
    },
    fill: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>

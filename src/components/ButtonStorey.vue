<template>
  <button
    class="btn-storey"
    :class="{ 'btn-storey--active': active, 'btn-storey--disabled': disabled }"
    :disabled="disabled">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: [String, Number],
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    active: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.btn-storey {
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;

  @apply tw-border tw-border-third tw-text-third tw-inline-block tw-text-xs tw-text-center;
}

.btn-storey:hover {
  opacity: 0.8;
}

.btn-storey--disabled {
  color: #1F5C68;
  border-color: #1F5C68;
}

.btn-storey--active {
  @apply tw-bg-orange tw-border-orange tw-text-white;
}

.btn-storey--active:hover {
  opacity: 1;
}
</style>

<template>
  <div class="dialog-full callback tw-z-[910] bg-main" v-if="showed">
    <Header />
    <FormBook
      v-bind="{ flatNumber, themeType }"
      @close="$emit('update:showed', false)"
    />
  </div>
</template>

<script>
import FormBook from './FormBook.vue';

export default {
  props: {
    showed: {
      default: false,
      type: Boolean
    },
    flatNumber: {
      required: true,
      type: Number
    },
    themeType: {
      default: 'квартира',
      type: String
    }
  },
  emits: ['update:showed'],
  components: {
    FormBook
  }
}
</script>

<style scoped>
.callback {
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>

<template>
  <div class="dialog-full callback tw-z-[890] bg-main" v-if="modelValue">
    <Header />
    <FormCreditOrder
      v-bind="{ creditSum }"
      @close="$emit('update:modelValue', false)"
    >
    </FormCreditOrder>
  </div>
</template>

<script>
import FormCreditOrder from './FormCreditOrder.vue';

export default {
  props: {
    creditSum: {
      required: true,
      type: Number
    },
    modelValue: {
      default: false,
      type: Boolean,
    }
  },
  emits: ['update:modelValue'],
  components: {
    FormCreditOrder
  }
}
</script>

<style scoped>
.callback {
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>

<template>
  <div
    class="dialog-full callback tw-z-[910] bg-main"
    v-if="$store.state.dialogCallbackShowed">
    <Header />
    <FormCallBack pageView class="tw-h-full" @close="$store.commit('callbackToggle')"></FormCallBack>
  </div>
</template>

<script>
import FormCallBack from './FormCallBack.vue';

export default {
  components: {
    FormCallBack
  }
}
</script>

<style scoped>
.callback {
  display: grid;
  grid-template-rows: auto 1fr;
}

.r-none {
  @apply tw-rounded-b-none !important;
}
</style>

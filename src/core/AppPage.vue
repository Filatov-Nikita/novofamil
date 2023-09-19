<template>
  <main :class="paddingClasses">
    <slot />
  </main>
</template>

<script>
export default {
  props: {
    paddingClasses: {
      default: 'page-pt',
      type: String
    }
  }
}
</script>

<style>

</style>

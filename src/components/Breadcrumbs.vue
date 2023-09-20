<template>
  <div class="tw-flex tw-flex-wrap tw-gap-y-4 tw-gap-x-16 tw-text-sm">
    <template v-for="link in prevs">
      <router-link class="tw-text-white tw-underline" :to="link.to">
        {{ link.label }}
      </router-link>
      <span class="tw-text-base-500">/</span>
    </template>
    <span v-if="current" class="tw-text-base-500">{{ current.label }}</span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('breadcrumbs', ['current', 'prevs', 'items'])
    }
  }
</script>

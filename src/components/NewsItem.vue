<template>
  <article class="tw-pb-16 md:tw-pb-10 tw-border-b tw-border-third tw-border-opacity-15 tw-cursor-pointer lg:hover:tw-opacity-70" role="link">
    <div class="tw-text-secondary tw-mb-4">{{ prettyDate }}</div>
    <h2 class="tw-text-[20px] tw-text-white">{{ name }}</h2>
  </article>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: [Number, String]
    },
    name: {
      required: true,
      type: String
    },
    created: {
      required: true,
      type: String
    },
    active: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    prettyNum(n) {
      return n < 10 ? `0${n}` : n;
    }
  },
  computed: {
    prettyDate() {
      const dt = new Date(this.created);
      const f = this.prettyNum;
      return `${f(dt.getDate())}.${f(dt.getMonth() + 1)}.${dt.getFullYear()} ${f(dt.getHours())}:${f(dt.getMinutes())}`
    }
  }
}
</script>

<style>

</style>

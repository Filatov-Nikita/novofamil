<template>
  <article class="tw-flex tw-flex-wrap tw-cursor-pointer">
    <div class="tw-w-full tw-mb-10 tw-h-[95px] md:tw-max-w-[60px] md:tw-h-[40px] xl:tw-max-w-[76px] xl:tw-h-[50px]">
      <img width="1" height="95" class="tw-h-full tw-w-full tw-object-cover" :src="picSrc" :alt="title" />
    </div>
    <div class="tw-w-full md:tw-max-w-[100px] md:tw-ml-14">
      <h2 class="tw-mb-2 tw-text-white">{{ title }}</h2>
      <p class="tw-text-xs tw-leading-100 tw-text-secondary">
        {{ picCount }} фото
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    picCount: {
      default: 0,
      type: [String, Number]
    },
    picSrc: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>

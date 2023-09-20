<template>
  <app-page class="lg:tw-pb-60 2xl:tw-pb-20 tw-relative" paddingClasses="tw-pt-60">
    <Breadcrumbs class="tw-absolute tw-top-20 tw-left-16" />
    <SwiperGallery v-if="gallery" :sources="images" />
  </app-page>
</template>

<script>
import SwiperGallery from '@/components/SwiperGallery.vue';

export default {
  created() {
    this.$store.commit('breadcrumbs/set', [
      { label: 'Главная', to: '/' },
      { label: 'Галерея', to: { name: 'gallery' } },
    ]);

    return this.getGallery();
  },
  data() {
    return {
      gallery: null
    }
  },
  methods: {
    async getGallery() {
      this.gallery = await this.$store.dispatch('galleries/galleriesOne', { id: 1 });
    }
  },
  computed: {
    images() {
      return this.gallery?.images?.map(image => image.url) || [];
    }
  },
  components: {
    SwiperGallery
  },
}
</script>

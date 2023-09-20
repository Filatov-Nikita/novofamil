<template>
  <div class="bg-main layout tw-min-h-screen">
    <Header ref="header" />
    <main class="tw-relative tw-grid lg:tw-pl-40 lg:tw-grid-cols-[minmax(_285px,_285px)_1fr] 2xl:tw-grid-cols-[minmax(_475px,_475px)_1fr]">
      <div class="tw-hidden lg:tw-block lg:tw-pt-[54px] 2xl:tw-pt-[50px] tw-pr-20">
        <Breadcrumbs class="tw-mb-30" />
        <h1 class="h1">Подбор<br>На фасаде</h1>
      </div>
      <PopupStorey v-if="activeStorey" :storey="activeStorey" />
      <HousePlan
        :activeStorey="hoverStorey"
        width="2280"
        height="1080"
        @enter="onEnter"
        @leave="onLeave"
      >
      </HousePlan>
    </main>
    <Footer ref="footer" />
  </div>
</template>

<script>
import HousePlan from "@/components/HousePlan.vue";
import PopupStorey from "@/components/PopupStorey.vue";

export default {
  data() {
    return {
      entrance: null,
      storeysMap: new Map(),
      activeStorey: null,
      hoverStorey: null,
      timer: null,
    };
  },
  created() {
    this.$store.commit('breadcrumbs/set', [
      {
        label: 'Главная',
        to: '/'
      },
      { label: 'На фасаде', to: { name: 'facad.house' } },
    ]);

    return this.getEntrance();
  },
  methods: {
    async getEntrance() {
      this.entrance = await this.$store.dispatch("entrances/entrancesOne", {
        id: 1,
      });
    },
    async onEnter(storeyId) {
      this.hoverStorey = { id: storeyId };

      if (this.storeysMap.has(storeyId)) {
        this.activeStorey = this.storeysMap.get(storeyId);
      } else {
        this.activeStorey = await this.$store.dispatch("storeys/storeysOne", {
          id: storeyId,
        });
        this.storeysMap.set(storeyId, this.activeStorey);
      }
    },
    onLeave(storeyId) {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (storeyId === this.activeStorey?.id) {
          this.activeStorey = null;
          this.hoverStorey = null;
        }
      }, 500);
    },
  },
  computed: {
    storeys() {
      if (!this.entrance) return [];
      const entries = Object.entries(this.entrance.storeys);
      const sorted = entries.sort((a, b) => b[0] - a[0]);
      return sorted.map((entry) => ({ id: entry[1], number: entry[0] }));
    },
  },
  components: {
    HousePlan,
    PopupStorey
  },
};
</script>
<style scoped>
  .layout {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
  }
</style>

<template>
  <app-page>
    <div>
      <div class="wrapper">
        <Breadcrumbs class="tw-mb-30" />
        <h1 class="h1">Подбор по параметрам</h1>
        <section class="tw-pb-20 lg:tw-py-80 md:tw-pb-60 2xl:tw-pb-120 tw-pt-30 md:tw-pt-40">
          <div class="tw-flex tw-flex-wrap -tw-ml-24 md:-tw-mt-6 md:tw-max-w-[720px] xl:tw-max-w-[1172px]">
            <SelectLiter
              ref="liter"
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[150px] xl:tw-basis-[210px]"
              v-model="filter.liter"
            />
            <SelectStoreys
              ref="storeys"
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[150px] xl:tw-basis-[210px]"
              v-model="filter.storey"
            />
            <SelectRooms
              ref="rooms"
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[150px] xl:tw-basis-[210px]"
              v-model="filter.rooms"
            />
            <SelectSquare
              ref="square"
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[150px] xl:tw-basis-[210px]"
              v-model="filter.square"
            />
          </div>
        </section>
      </div>
    </div>
    <section class="tw-bg-white tw-pt-32">
      <div class="wrapper">
        <div :class="{ 'tw-absolute': flats }" v-if="$store.getters['loaders/is']('loading flats')">
          <Spinner size="100px" />
        </div>
        <template v-if="flats">
          <div class="md:tw-flex md:tw-justify-between">
            <div class="tw-mb-20 tw-items-start tw-flex tw-flex-wrap tw-gap-x-30 tw-gap-y-10 md:tw-mb-0 md:tw-order-1">
              <button @click="clearFilter" class="tw-flex">
                <AppIcon class="tw-mr-10" name="reset" size="18px" fill="base-700" />
                <span class="tw-text-base-700 tw-text-sm tw-leading-100 tw-mt-4">Сбросить фильтр</span>
              </button>

              <button class="tw-flex" @click="changeOrder">
                <span class="tw-mr-10 tw-text-base-700 tw-text-sm tw-leading-100 tw-mt-4">Цена по возрастанию</span>
                <AppIcon class="tw-stroke-base-700" :class="{ 'tw-rotate-180': filter.sortOrder === 'asc' }" name="arrow-down" size="18px" />
              </button>
            </div>
            <p class="tw-text-md tw-text-base-700 tw-font-nord tw-uppercase tw-leading-100 tw-mb-30">
              Найдено {{ flats.length }} квартир
            </p>
          </div>
          <FlatsParamsList :items="flats" />
        </template>
      </div>
    </section>
  </app-page>
</template>

<script>
import FlatsParamsList from '@/components/FlatsParamsList.vue';
import SelectFeatures from '@/components/SelectFeatures.vue';
import SelectLiter from '@/components/SelectLiter.vue';
import SelectRooms from '@/components/SelectRooms.vue';
import SelectStoreys from '@/components/SelectStoreys.vue';
import SelectSquare from '@/components/SelectSquare.vue';
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

export default {
  created() {
    this.$store.commit('breadcrumbs/set', [
      { label: 'Главная', to: '/' },
      { label: 'Подбор по параметрам', to: { name: 'flats.params' } },
    ])
  },
  setup() {
    const store = useStore();

    const storeys = ref(null);
    const rooms = ref(null);
    const square = ref(null);
    const liter = ref(null);

    const filter = ref({
      liter: null,
      storey: null,
      rooms: null,
      square: null,
      sort: 'price',
      sortOrder: 'desc',
      status: 'free',
    });

    const filterGetters = {
      liter: (filter, value) => {
        if(value.length <= 0) return;
        filter.entrance_id = value?.[0]?.id
      },
      storey: (filter, value) => {
        filter.storey_min = value[0];
        filter.storey_max = value[1];
      },
      rooms: (filter, value) => {
        if(value.length <= 0) return;
        value.forEach((val, i) => {
          filter[`rooms_in[${i}]`] = val;
        });
      },
      square: (filter, value) => {
        filter.total_area_min = value[0];
        filter.total_area_max = value[1];
      },
      sort: (filter, value) => {
        filter.sort_by = value;
      },
      sortOrder: (filter, value) => {
        filter.sort_order = value;
      },
      status: (filter, value) => {
        filter.status = value;
      },
    }

    const flats = ref(null);

    const makeFilter = () => {
      const newFilter = {};
      for(let key in filter.value) {
        if(filter.value[key]) filterGetters[key](newFilter, filter.value[key]);
      }
      return newFilter;
    };

    function changeOrder() {
      filter.value.sortOrder = filter.value.sortOrder === 'asc' ? 'desc' : 'asc';
    }

    const getFlats = async () => {
      store.dispatch('loaders/start', 'loading flats');
      flats.value = await store.dispatch('flats/getFlats', makeFilter());
      flatsWithNo13Floor();
      store.dispatch('loaders/end', 'loading flats');
    };

    function flatsWithNo13Floor() {
      if(flats.value === null) return;
      flats.value = flats.value.filter((flat) => {
        return flat.storey_number !== 13;
      });
    }

    function clearFilter() {
      filter.value = {
        liter: null,
        storey: null,
        rooms: null,
        square: null,
        sort: 'price',
        sortOrder: 'desc'
      }

      storeys.value?.reset();
      rooms.value?.reset();
      square.value?.reset();
      liter.value?.reset();
    }

    watch(filter, () => getFlats(), { deep: true, immediate: true });

    return {
      filter,
      flats,
      clearFilter,
      storeys,
      rooms,
      square,
      liter,
      changeOrder
    }
  },
  components: {
    FlatsParamsList,
    SelectFeatures,
    SelectLiter,
    SelectRooms,
    SelectStoreys,
    SelectSquare,
    Breadcrumbs
}
}
</script>

<style>

</style>

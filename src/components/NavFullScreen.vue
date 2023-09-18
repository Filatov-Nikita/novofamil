<template>
  <div class="dialog-full tw-overflow-x-hidden" v-if="value">
    <div class="layout-base tw-min-h-full">
      <Header />
      <div class="nav-page nav-bg">
        <div class="wrapper tw-h-full tw-flex tw-items-center">
          <div class="list">
            <div class="lg:tw-flex lg:tw-flex-wrap lg:-tw-m-24">
              <div
                class="lg:tw-p-24"
                v-for="item in nav"
              >
                <router-link
                  class="tw-block tw-text-md lg:tw-text-[32px] tw-font-nord tw-text-white tw-leading-120 lg:tw-py-16 tw-py-12"
                  active-class="tw-text-orange"
                  :to="item.to"
                >
                  {{ item.label }}
                </router-link>
              </div>
            </div>

            <div class="tw-max-w-[340px] tw-pt-24 md:tw-pt-30 -tw-ml-24 tw-flex tw-flex-wrap">
              <div class="tw-pl-24 tw-w-full lg:tw-w-1/2">
                <router-link class="tw-block tw-text-base tw-text-third tw-underline tw-leading-100 tw-py-8" :to="{ name: 'news' }">
                  Новости и акции
                </router-link>
              </div>
              <div class="tw-pl-24 tw-w-full lg:tw-w-1/2">
                <router-link class="tw-block tw-text-base tw-text-third tw-underline tw-leading-100 tw-py-8" :to="{ name: 'documents' }">
                  Документы
                </router-link>
              </div>
              <div class="tw-pl-24 tw-w-full lg:tw-w-1/2">
                <router-link class="tw-block tw-text-base tw-text-third tw-underline tw-leading-100 tw-py-8" :to="{ name: 'progress' }">
                  Ход строительства
                </router-link>
              </div>
              <div class="tw-pl-24 tw-w-full lg:tw-w-1/2">
                <router-link class="tw-block tw-text-base tw-text-third tw-underline tw-leading-100 tw-py-8" :to="{ name: 'developer' }">
                  Застройщик
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'NavFullScreen',
  data() {
    return {
      nav: [
        {
          label: 'О проекте',
          to: { name: 'about' },
        },
        {
          label: 'Расположение',
          to: { name: 'location' },
        },
        {
          label: 'Выбрать планировку',
          to: { name: 'flats.params' },
        },
        {
          label: 'Галерея',
          to: { name: 'gallery' },
        },
        {
          label: 'Условия покупки',
          to: { name: 'purchase' },
        },
        {
          label: 'Контакты',
          to: { name: 'contacts' },
        },
      ],
    };
  },
  computed: {
    value() {
      return this.$store.state.navShowed;
    },
  },
  methods: {
    ...mapMutations(['navToggle']),
  }
};
</script>

<style scoped>

.list {
  padding: 30px 0;
}

@screen lg {
  .list {
    max-width: 700px;
  }

  .nav-page {
    position: relative;
    z-index: 0;
  }

  .nav-bg::after {
    content: '';
    display: block;
    background-image: url(@/assets/images/decor-key.svg);
    background-size: cover;
    position: absolute;
    right: 0px;
    bottom: -50px;
    z-index: -1;
    width: 820px;
    height: 642px;
  }
}

@screen 2xl {
  .nav-bg::after {
    width: 1210px;
    height: 760px;
    bottom: -80px;
  }
}
</style>

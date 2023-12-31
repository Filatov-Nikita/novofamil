<template>
  <header class="tw-relative tw-z-50" v-click-outside="onOutside">
    <div
      class="tw-border-base-500 tw-border-b tw-py-[20px] lg:tw-py-[19px] 2xl:tw-py-[31px]"
      :class="[opacityClass]">
      <div class="wrapper 2xl:tw-max-w-none 2xl:tw-px-40">
        <div class="tw-flex tw-items-center tw-justify-between tw-gap-[34px]">
          <div class="tw-flex tw-items-center lg:tw-gap-120 2xl:tw-gap-[145px]">
            <router-link class="logo" to="/">
              <img
                class="tw-w-full"
                width="165"
                height="40"
                src="@/assets/images/logo.svg"
                alt="логотип Новофамильный" />
            </router-link>
            <router-link
              class="tw-hidden tw-text-gray lg:tw-block lg:hover:tw-underline"
              :to="{ name: 'about' }">
              О проекте
            </router-link>
          </div>
          <div class="tw-hidden lg:tw-flex tw-items-center tw-justify-end tw-grow lg:tw-gap-[58px]">
            <div class="tw-hidden lg:tw-flex">
              <router-link
                class="tw-flex tw-items-center tw-bg-orangeHover tw-text-white tw-rounded-l-[14px] lg:tw-px-8 lg:hover:tw-bg-orangeHover xl:tw-px-16 tw-py-10"
                :to="{ name: 'facad.house' }">
                <svg class="tw-w-[24px] tw-h-[24px] tw-mr-12 tw-fill-white">
                  <use xlink:href="/sprite.svg#fasad"></use>
                </svg>
                <div class="tw-leading-100 tw-pt-4">на фасаде</div>
              </router-link>

              <router-link
                class="tw-flex tw-items-center tw-bg-orangeHover tw-text-white tw-rounded-r-[14px] lg:tw-px-8 lg:hover:tw-bg-orangeHover xl:tw-px-16 tw-py-10"
                :to="{ name: 'flats.params' }">
                <svg class="tw-w-[24px] tw-h-[24px] tw-mr-12 tw-fill-white">
                  <use xlink:href="/sprite.svg#params"></use>
                </svg>
                <div class="tw-leading-100 tw-pt-4">по параметрам</div>
              </router-link>
            </div>

            <div
              class="tw-hidden lg:tw-block tw-leading-120">
              <a
                class="tw-text-white lg:tw-text-sm 2xl:tw-text-[20px] tw-mb-2 tw-block lg:hover:tw-opacity-90 tw-tracking-tighter"
                :href="`tel:${$store.getters.unmaskedPhone(
                  $store.state.headerPhone
                )}`">
                {{ $store.state.headerPhone }}
              </a>
              <a
                class="tw-underline tw-text-sm tw-text-orange"
                href="#"
                @click.prevent="callbackToggle">
                Заказать звонок
              </a>
            </div>
          </div>

          <button
            class="tw-order-first lg:tw-order-none tw-w-[36px] tw-h-[36px] lg:tw-w-48 lg:tw-h-48 lg:hover:tw-opacity-90"
            @click="navToggle">
            <svg class="tw-w-full tw-h-full tw-fill-gray">
              <use
                :xlink:href="
                  navValue ? '/sprite.svg#close' : '/sprite.svg#b-menu'
                "></use>
            </svg>
          </button>

          <button class="lg:tw-hidden" @click="toolsToggle">
            <svg class="tw-w-[36px] tw-h-[36px] lg:tw-mr-14 tw-fill-gray">
              <use
                :xlink:href="
                  toolsValue ? '/sprite.svg#close' : '/sprite.svg#b-plan'
                "></use>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      class="lg:tw-hidden tw-py-20 tw-absolute tw-z-50 tw-bottom-0 tw-translate-y-full tw-rounded-b-md tw-inset-x-0 tools-bg"
      :class="[toolsValue ? 'tw-block' : 'tw-hidden']">
      <div class="wrapper">
        <div class="tw-flex">
          <router-link
            class="tw-w-1/2 tw-flex tw-items-center tw-justify-center tw-bg-orangeHover tw-rounded-l-[14px] tw-text-white tw-px-8 tw-py-10 tw-border-r tw-border-orangeHover"
            :to="{ name: 'facad.house' }">
            <svg class="tw-w-[30px] tw-h-[30px] tw-mr-10 tw-fill-white">
              <use xlink:href="/sprite.svg#fasad"></use>
            </svg>
            <div class="tw-leading-100 tw-pt-4">на фасаде</div>
          </router-link>
          <router-link
            class="tw-w-1/2 tw-flex tw-items-center tw-justify-center tw-bg-orangeHover tw-rounded-r-[14px] tw-text-white tw-px-8 tw-py-10"
            :to="{ name: 'flats.params' }">
            <svg class="tw-w-[30px] tw-h-[30px] tw-mr-10 tw-fill-white">
              <use xlink:href="/sprite.svg#params"></use>
            </svg>
            <div class="tw-leading-100 tw-pt-4">по параметрам</div>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    opacityClass: {
      default: "tw-bg-opacity-70",
      type: String,
    },
  },
  data() {
    return {
      toolsValue: false,
    };
  },
  computed: {
    navValue() {
      return this.$store.state.navShowed;
    },
  },
  methods: {
    ...mapMutations(["navToggle", "callbackToggle"]),
    toolsToggle(value) {
      if (typeof value === "boolean") return (this.toolsValue = value);
      this.toolsValue = !this.toolsValue;
    },
    closeAll() {
      this.toolsToggle(false);
      this.$store.commit("navToggle", false);
    },
    onOutside() {
      if (this.toolsValue) this.toolsToggle(false);
    },
  },
  watch: {
    $route() {
      this.closeAll();
    },
    navValue() {
      this.toolsToggle(false);
    },
  },
};
</script>

<style scoped>
.logo {
  width: 145px;
}

@screen lg {
  .logo {
    width: 165px;
  }
}

.tools-bg {
  @apply tw-bg-base-700
}
</style>

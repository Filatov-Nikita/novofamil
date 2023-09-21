<template>
  <app-page class="page-pb lg:tw-py-0">
    <div class="tw-container tw-h-full">
      <section v-if="flat" class="content">
        <div class="first">
          <Breadcrumbs class="tw-mb-30" />
          <div>
            <div
              class="md:tw-flex md:tw-justify-between md:tw-items-start lg:tw-block">
              <div class="tw-mb-20 lg:tw-mb-30 2xl:tw-flex 2xl:tw-flex-wrap 2xl:tw-w-full">
                <div
                  class="tw-mb-10 2xl:tw-flex 2xl:tw-gap-x-[96px]">
                  <div class="tw-font-nord tw-uppercase tw-text-white tw-text-[32px]">№{{ flat.number }}</div>
                  <div class="tw-font-nord tw-uppercase tw-text-[32px] tw-text-secondary">
                    {{ flat.total_area }} <span>м<sup>2</sup></span>
                  </div>
                </div>
                <p class="tw-w-full tw-text-sm tw-text-third 2xl:tw-w-full">
                  Секция {{ flat.entrance }} • {{ flat.storey_number }} этаж •
                  {{ flat.rooms_number }} комнаты
                </p>
              </div>

              <div
                class="tw-hidden md:tw-flex lg:tw-hidden tw-justify-between tw-items-center tw-gap-30">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M63.5 39C63.5 52.531 52.531 63.5 39 63.5C25.469 63.5 14.5 52.531 14.5 39C14.5 25.469 25.469 14.5 39 14.5C52.531 14.5 63.5 25.469 63.5 39Z" stroke="#D6DEDF"/>
                  <path d="M51.9983 39.3963C51.9948 39.605 51.9085 39.8066 51.7584 39.9567C51.6083 40.1067 51.4068 40.193 51.1981 40.1966L39.3934 40.3955L39.1945 52.2006C39.1912 52.3796 39.1271 52.5542 39.0126 52.6956C38.8981 52.837 38.7401 52.9368 38.5647 52.9784C38.3893 53.0201 38.2069 53.0011 38.0477 52.9247C37.8885 52.8482 37.7619 52.7189 37.6889 52.558L27.069 29.1333C27.0027 28.988 26.9836 28.8242 27.0142 28.6644C27.0448 28.5045 27.1236 28.3563 27.24 28.24C27.3563 28.1237 27.5045 28.0448 27.6644 28.0142C27.8242 27.9836 27.9879 28.0027 28.1333 28.069L51.557 38.6893C51.6918 38.7502 51.8051 38.849 51.8835 38.9739C51.962 39.0989 52.0023 39.2449 51.9999 39.3947L51.9983 39.3963Z" fill="#D6DEDF"/>
                  <path d="M16.7175 3.28249C20.4275 6.99247 20.4275 13.0075 16.7175 16.7175C13.0075 20.4275 6.99247 20.4275 3.28249 16.7175C-0.427495 13.0075 -0.427494 6.99246 3.28249 3.28248C6.99247 -0.427496 13.0075 -0.427495 16.7175 3.28249Z" fill="#FA864B" stroke="#FA864B"/>
                  <path d="M10.4678 13.0113C9.8358 13.0113 9.2798 12.8833 8.7998 12.6273C8.3198 12.3713 7.9478 12.0113 7.6838 11.5473C7.4278 11.0753 7.2998 10.5313 7.2998 9.91534C7.2998 9.30734 7.4318 8.77134 7.6958 8.30734C7.9598 7.83534 8.3278 7.47134 8.7998 7.21534C9.2798 6.95134 9.8318 6.81934 10.4558 6.81934C11.3198 6.81934 12.0678 7.12334 12.6998 7.73134L11.8838 8.60734C11.7078 8.43134 11.4958 8.29534 11.2478 8.19934C10.9998 8.09534 10.7438 8.04334 10.4798 8.04334C9.9358 8.04334 9.4918 8.21934 9.1478 8.57134C8.8118 8.91534 8.6438 9.36334 8.6438 9.91534C8.6438 10.4753 8.8118 10.9273 9.1478 11.2713C9.4918 11.6153 9.9358 11.7873 10.4798 11.7873C10.7678 11.7873 11.0398 11.7353 11.2958 11.6313C11.5518 11.5273 11.7678 11.3753 11.9438 11.1753L12.7718 12.0753C12.4438 12.3953 12.0918 12.6313 11.7158 12.7833C11.3398 12.9353 10.9238 13.0113 10.4678 13.0113Z" fill="white"/>
                </svg>

                <div class="tw-basis-[80px]">
                  <img
                    width="124"
                    height="64"
                    :src="flat.images[0]"
                    alt="срез этажа" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="map xl:tw-border-l xl:tw-border-secondary/15">
          <!-- <iframe
            width="100%"
            height="100%"
            :src="flat.video_clip"
            allowfullscreen /> -->
          <div class="map-flat">
            <div class="tw-w-full tw-flex tw-justify-center lg:tw-justify-end tw-p-16">
              <div
                class="tw-flex tw-rounded-2xl tw-border tw-border-solid tw-border-secondary tw-border-opacity-60 tw-overflow-hidden tw-w-fit tw-divide-x tw-divide-third tw-text-sm">
                <button
                  class="tw-py-15 md:tw-px-28 tw-px-20"
                  :class="[visibleImage === 2 ? ' tw-bg-secondary tw-text-white' : 'tw-bg-white tw-text-third']"
                  @click="visibleImage = 2">
                  С мебелью
                </button>
                <button
                  v-if="flat.images[1]"
                  class="tw-py-15 md:tw-px-28 tw-px-15"
                  :class="[visibleImage === 1 ? ' tw-bg-secondary tw-text-white' : 'tw-bg-white tw-text-third']"
                  @click="visibleImage = 1">
                  2D
                </button>
                <button
                  v-if="flat.images[3]"
                  class="tw-py-15 md:tw-px-28 tw-px-15"
                  :class="[visibleImage === 3 ? ' tw-bg-secondary tw-text-white' : 'tw-bg-white tw-text-third']"
                  @click="visibleImage = 3">
                  ЗD
                </button>
              </div>
            </div>
            <div class="map-flat__wrapper">
              <div class="map-img">
                <img
                  class="map-flat__img"
                  :src="flat.images[visibleImage]"
                  style="" />
                <div class="side side--top">Двор</div>
                <div class="side side--left">ул. Красноводская</div>
                <div class="side side--right">ул. Менделеева</div>
                <div class="side side--bottom">ул. Акназарова</div>
              </div>
            </div>
          </div>
        </div>

        <div class="last">
          <div
            class="tw-relative tw-flex tw-flex-col md:tw-items-center lg:tw-items-start tw-w-full">
            <div class="2xl:tw-grid 2xl:tw-justify-center">
              <div class="tw-mb-30 md:tw-mb-0 lg:tw-mb-30">
                <div>
                  <AppButton class="tw-mb-10 tw-w-full" @click="showedBook = true">
                    Заявка на бронь
                  </AppButton>
                  <AppButton
                    theme="gray"
                    class="tw-w-full"
                    @click="createPDF"
                  >
                    Скачать pdf
                  </AppButton>
                </div>
              </div>
              <div
                class="tw-flex md:tw-hidden lg:tw-flex tw-justify-between tw-items-center lg:tw-justify-start lg:tw-gap-60">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M63.5 39C63.5 52.531 52.531 63.5 39 63.5C25.469 63.5 14.5 52.531 14.5 39C14.5 25.469 25.469 14.5 39 14.5C52.531 14.5 63.5 25.469 63.5 39Z" stroke="#D6DEDF"/>
                  <path d="M51.9983 39.3963C51.9948 39.605 51.9085 39.8066 51.7584 39.9567C51.6083 40.1067 51.4068 40.193 51.1981 40.1966L39.3934 40.3955L39.1945 52.2006C39.1912 52.3796 39.1271 52.5542 39.0126 52.6956C38.8981 52.837 38.7401 52.9368 38.5647 52.9784C38.3893 53.0201 38.2069 53.0011 38.0477 52.9247C37.8885 52.8482 37.7619 52.7189 37.6889 52.558L27.069 29.1333C27.0027 28.988 26.9836 28.8242 27.0142 28.6644C27.0448 28.5045 27.1236 28.3563 27.24 28.24C27.3563 28.1237 27.5045 28.0448 27.6644 28.0142C27.8242 27.9836 27.9879 28.0027 28.1333 28.069L51.557 38.6893C51.6918 38.7502 51.8051 38.849 51.8835 38.9739C51.962 39.0989 52.0023 39.2449 51.9999 39.3947L51.9983 39.3963Z" fill="#D6DEDF"/>
                  <path d="M16.7175 3.28249C20.4275 6.99247 20.4275 13.0075 16.7175 16.7175C13.0075 20.4275 6.99247 20.4275 3.28249 16.7175C-0.427495 13.0075 -0.427494 6.99246 3.28249 3.28248C6.99247 -0.427496 13.0075 -0.427495 16.7175 3.28249Z" fill="#FA864B" stroke="#FA864B"/>
                  <path d="M10.4678 13.0113C9.8358 13.0113 9.2798 12.8833 8.7998 12.6273C8.3198 12.3713 7.9478 12.0113 7.6838 11.5473C7.4278 11.0753 7.2998 10.5313 7.2998 9.91534C7.2998 9.30734 7.4318 8.77134 7.6958 8.30734C7.9598 7.83534 8.3278 7.47134 8.7998 7.21534C9.2798 6.95134 9.8318 6.81934 10.4558 6.81934C11.3198 6.81934 12.0678 7.12334 12.6998 7.73134L11.8838 8.60734C11.7078 8.43134 11.4958 8.29534 11.2478 8.19934C10.9998 8.09534 10.7438 8.04334 10.4798 8.04334C9.9358 8.04334 9.4918 8.21934 9.1478 8.57134C8.8118 8.91534 8.6438 9.36334 8.6438 9.91534C8.6438 10.4753 8.8118 10.9273 9.1478 11.2713C9.4918 11.6153 9.9358 11.7873 10.4798 11.7873C10.7678 11.7873 11.0398 11.7353 11.2958 11.6313C11.5518 11.5273 11.7678 11.3753 11.9438 11.1753L12.7718 12.0753C12.4438 12.3953 12.0918 12.6313 11.7158 12.7833C11.3398 12.9353 10.9238 13.0113 10.4678 13.0113Z" fill="white"/>
                </svg>


                <div class="tw-basis-[80px]">
                  <img
                    width="124"
                    height="64"
                    :src="flat.images[0]"
                    alt="срез этажа" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <teleport to="body">
          <DialogBook v-model:showed="showedBook" :flatNumber="flat.number" />
        </teleport>
      </section>

      <div v-if="$store.getters['loaders/is']('loading flat')">
        <Spinner size="100px" />
      </div>

      <GDialog
        v-model="showedView"
        background="transparent"
        content-class="tw-h-screen tw-flex tw-items-center tw-justify-center tw-relative">
        <template #default="{ onClose }">
          <button class="tw-absolute tw-right-30 tw-top-0" @click="onClose">
            <AppIcon name="close" size="36px" fill="white" />
          </button>
          <div
            class="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 -tw-z-10">
            <Spinner size="100px" />
          </div>
          <img
            v-if="hasView"
            class="tw-w-auto tw-max-h-full"
            :src="images.view"
            alt="вид из окна" />
        </template>
      </GDialog>
    </div>
  </app-page>
</template>

<script>
import DialogBook from "@/components/DialogBook.vue";
import { GDialog } from "gitart-vue-dialog";

export default {
  props: {
    id: {
      required: true,
      type: [String, Number],
    },
  },
  created() {
    return this.getFlat();
  },
  data() {
    return {
      flat: null,
      showedBook: false,
      showedView: false,
      visibleImage: 1,
    };
  },
  methods: {
    async getFlat() {
      this.$store.dispatch("loaders/start", "loading flat");
      this.flat = await this.$store.dispatch("flats/flatsOne", { id: this.id });
      this.$store.dispatch("loaders/end", "loading flat");
      this.setBreadcrumbs();
    },
    setBreadcrumbs() {
      this.$store.commit('breadcrumbs/set', [
        {
          label: 'Главная',
          to: '/'
        },
        { label: 'На фасаде', to: { name: 'facad.house' } },
        {
          label: `секция ${this.flat.entrance} этаж ${this.flat.storey_number}`,
          to: { name: 'storey', params: { id: this.flat.storey } }
        },
        {
          label: `кв. №${this.flat.number}`,
          to: { name: 'flats.one', params: { id: this.flat.id } }
        },
      ]);
    },
    showView() {
      this.showedView = true;
    },
    async createPDF() {
      const path = await this.$store.dispatch("flats/createPDF", {
        pdf_info_rooms_count: this.flat.rooms_number,
        pdf_info_kv_num: this.flat.number,
        pdf_info_kv_etazh: this.flat.storey_number,
        pdf_info_kompleks: this.flat.entrance,
        pdf_info_kv_sq: this.flat.total_area,
        pdf_info_image: this.flat.images[1],
        pdf_info_storey_plan_image: this.flat.images[0],
      });

      this.downloadPDF(path);
    },
    downloadPDF(path) {
      window.location.href = path;
    },
  },
  computed: {
    images() {
      const list = { plan: null, view: null, place: null };

      if (!(this.flat?.images && Array.isArray(this.flat?.images))) return list;

      this.flat.images.forEach((src) => {
        if (src.indexOf("/plans/") !== -1) list.plan = src;
        else if (src.indexOf("/windows_view/") !== -1) list.view = src;
        else if (src.indexOf("storey_places")) list.place = src;
      });

      return list;
    },
    hasView() {
      return this.images.view !== null;
    },
    hasPlace() {
      return this.images.place !== null;
    },
  },
  components: {
    DialogBook,
    GDialog,
  },
};
</script>

<style scoped>
.side {
  @apply tw-absolute tw-text-gray tw-text-xs;
}

.side--left,
.side--right {
  @apply tw-top-1/2 -tw-translate-y-1/2 -tw-rotate-90;
}

.side--left {
  @apply tw-left-0 -tw-translate-x-[25px] lg:tw-translate-x-0 lg:-tw-left-[130px];
}

.side--right {
  @apply tw-right-0 tw-translate-x-[25px] lg:tw-translate-x-0 lg:-tw-right-[130px];
}

.side--bottom,
.side--top {
  @apply tw-left-1/2 -tw-translate-x-1/2;
}

.side--bottom {
  @apply -tw-bottom-[36px];
}

.side--top {
  @apply -tw-top-[36px];
}
.content {
  @apply tw-h-full;
}

.first {
  @apply lg:tw-pt-30;
}

.map {
  @apply tw-mb-40 lg:tw-mb-0;
}
.last {
}

@screen lg {
  .content {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      "A A A  B B B B B B"
      "C C C  B B B B B B";
  }
  .first {
    grid-area: A;
    @apply lg:tw-max-w-[420px] 2xl:tw-max-w-[600px] tw-w-full;
  }
  .map {
    @apply lg:tw-border-l lg:tw-border-secondary/15 tw-flex tw-justify-center tw-flex-col lg:tw-justify-start;
    grid-area: B;
  }
  .last {
    @apply lg:tw-self-end lg:tw-pb-30;
    grid-area: C;
  }
}
</style>
<style scoped lang="scss">
.map-flat {
  @apply tw-bg-white tw-h-full lg:tw-flex lg:tw-flex-col lg:tw-items-center tw-relative tw-gap-[16px] tw-pb-20;
  &__wrapper {
    @apply tw-relative  tw-overflow-x-auto lg:tw-grid lg:tw-h-full lg:tw-content-center;
    position: relative;
    scrollbar-width: none;
    width: auto;
    .map-img {
      @apply tw-my-[75px] tw-px-30 lg:tw-px-0 lg:tw-mx-[130px] lg:tw-my-[36px] tw-relative;
    }
  }
  &__img {
    max-width: none;
    // height: 100%;
    width: 100%;
    margin: auto;
    object-fit: cover;
    @apply tw-max-w-none  tw-h-[290px] lg:tw-h-[320px]  2xl:tw-h-[560px] md:tw-h-full;
  }
}
</style>

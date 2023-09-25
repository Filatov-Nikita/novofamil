<template>
  <div class="grid">
    <div class="left">
      <Breadcrumbs class="tw-mb-30" />
      <h1 class="tw-text-white tw-font-nord tw-text-md2 2xl:tw-text-xl lg:tw-mb-[70px] 2xl:tw-mb-[90px">
        Кладовые
      </h1>
    </div>
    <div class="right tw-bg-white tw-relative">
      <div class="plan">
        <svg
          width="515"
          height="560"
          viewBox="0 0 515 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="514.125" height="560" fill="url(#pattern0)" />
          <g v-for="item in roomsList" :key="item.number">
            <g
              v-if="!$screen.touch"
              style="mix-blend-mode: multiply"
              opacity="0.4"
              v-html="item.el"
              @mouseenter="onMouseenter($event, item)"
              @mouseleave="onMouseleave"
            ></g>
            <g v-else
              style="mix-blend-mode: multiply"
              opacity="0.4"
              v-html="item.el"
              @click="onMouseenter($event, item)"
            ></g>
          </g>

          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1">
              <use
                xlink:href="#image0_184_15006"
                transform="scale(0.000348554 0.00032)" />
            </pattern>
            <image
              id="image0_184_15006"
              width="2869"
              height="3125"
              xlink:href="@/assets/images/store-rooms.png" />
          </defs>
        </svg>
      </div>
    </div>
  </div>

  <teleport to="body">
    <div
      v-if="flatPopup && currentFlat"
      class="flat-popup tw-min-w-[189px]"
      :style="flatPopup.coords"
      v-bind="{
        onMouseenter: !$screen.touch ? () => showedPopup = true : null,
        onMouseleave: !$screen.touch ? onMouseleave : null
      }"
    >
      <div class=" tw-grid">

        <div class=" tw-flex tw-mb-10">
          <div class=" tw-text-xl tw-mr-10 tw-font-nord">
            1-{{ currentFlat.id }}
          </div>
          <div class=" tw-text-base tw-mt-10">
            {{ currentFlat.square }}
          </div>
        </div>
        <AppButton class="tw-px-16 tw-py-10" @click="showedBook = true">
            Забронировать
        </AppButton>
        <AppButton v-if="$screen.touch" theme="gray" class="tw-px-16 tw-py-10 tw-mt-4" @click="closePopup">
            Закрыть
        </AppButton>
      </div>
    </div>

    <DialogBook
      v-if="currentFlat"
      themeType="кладовая"
      v-model:showed="showedBook"
      :flatNumber="currentFlat.id"
      @update:showed="currentFlat = null"
    />
  </teleport>
</template>
<script setup>
import DialogBook from "@/components/DialogBook.vue";
import { ref } from "vue";
import { debounce } from "throttle-debounce";
import { useStore } from "vuex";

const store = useStore();

store.commit('breadcrumbs/set', [
  { label: 'Главная', to: '/' },
  { label: 'О проекте', to: { name: 'about' } },
  { label: 'Кладовые', to: { name: 'store-rooms' } },
]);

const roomsList = [
  {
    id: 1,
    number: '1-1',
    square: '9.89',
    el: '<path data-v-0c4438bb="" d="M439.5 535.986H494.95V559.999H433.664L433.664 547.348H439.5V535.986Z" fill="#0AB81B"></path>',
  },
  {
    id: 2,
    number: '1-2',
    square: '6.96',
    el: '<rect data-v-0c4438bb="" x="434.201" y="512.152" width="37.1369" height="22.8393" fill="#0AB81B"></rect>',
  },
  {
    id: 3,
    number: '1-3',
    square: '5.76',
    el: '<rect data-v-0c4438bb="" x="404.633" y="493.158" width="17.1401" height="42.8237" fill="#0AB81B"></rect>',
  },
  {
    id: 4,
    number: '1-4',
    square: '8.74',
    el: '<rect data-v-0c4438bb="" x="434.201" y="483.839" width="37.1369" height="28.5492" fill="#0AB81B"></rect>',
  },
  {
    id: 5,
    number: '1-5',
    square: '9.98',
    el: '<path data-v-0c4438bb="" d="M471.295 483.839H481.809V488.125H494.95V535.986H471.295V483.839Z" fill="#0AB81B"></path>',
  },
  {
    id: 6,
    number: '1-6',
    square: '3.31',
    el: '<rect data-v-0c4438bb="" x="482.406" y="451.584" width="12.544" height="36.1984" fill="#0AB81B"></rect>',
  },
  {
    id: 7,
    number: '1-7',
    square: '5.46',
    el: '<path data-v-0c4438bb="" d="M354.099 437.248H363.555V438.676H371.66V484.378H360.853V470.096H354.099V437.248Z" fill="#0AB81B"></path>',
  },
  {
    id: 8,
    number: '1-8',
    square: '4.08',
    el: '<rect data-v-0c4438bb="" x="368.076" y="395.493" width="17.7408" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 9,
    number: '1-9',
    square: '3.72',
    el: '<rect data-v-0c4438bb="" x="350.873" y="395.493" width="17.2032" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 10,
    number: '1-10',
    square: '3.72',
    el: '<rect data-v-0c4438bb="" x="334.566" y="395.493" width="16.3072" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 11,
    number: '1-11',
    square: '3.56',
    el: '<rect data-v-0c4438bb="" x="318.259" y="395.493" width="15.9488" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 12,
    number: '1-12',
    square: '4.14',
    el: '<rect data-v-0c4438bb="" x="299.443" y="395.493" width="18.4576" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 13,
    number: '1-13',
    square: '4.40',
    el: '<rect data-v-0c4438bb="" x="280.806" y="395.493" width="18.6368" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 14,
    number: '1-14',
    square: '3.87',
    el: '<rect data-v-0c4438bb="" x="263.603" y="395.493" width="17.2032" height="28.4928" fill="#0AB81B"></rect>',
  },

  {
    id: 15,
    number: '1-15',
    square: '4.03',
    el: '<path data-v-0c4438bb="" d="M246.4 395.493H263.603V423.986H244.966V411.877H246.4V395.493Z" fill="#0AB81B"></path>',
  },
  {
    id: 16,
    number: '1-16',
    square: '4.07',
    el: '<rect data-v-0c4438bb="" x="227.046" y="395.493" width="17.92" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 17,
    number: '1-17',
    square: '4.37',
    el: '<path data-v-0c4438bb="" d="M210.56 395.493H227.046V423.628H206.259V411.67H210.56V395.493Z" fill="#0AB81B"></path>',
  },
  {
    id: 18,
    number: '1-18',
    square: '3.09',
    el: '<rect data-v-0c4438bb="" x="190.848" y="395.493" width="14.336" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 19,
    number: '1-19',
    square: '3.46',
    el: '<rect data-v-0c4438bb="" x="176.153" y="395.493" width="14.336" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 20,
    number: '1-20',
    square: '3.82',
    el: '<rect data-v-0c4438bb="" x="147.84" y="414.668" width="13.44" height="31.1808" fill="#0AB81B"></rect>',
  },
  {
    id: 21,
    number: '1-21',
    square: '3.88',
    el: '<rect data-v-0c4438bb="" x="175.795" y="437.238" width="29.9952" height="17.1295" fill="#0AB81B"></rect>',
  },

  {
    id: 22,
    number: '1-22',
    square: '5.63',
    el: '<rect data-v-0c4438bb="" x="206.259" y="437.248" width="20.9664" height="35.6608" fill="#0AB81B"></rect>',
  },
  {
    id: 23,
    number: '1-23',
    square: '5.25',
    el: '<rect data-v-0c4438bb="" x="227.225" y="437.238" width="17.1401" height="35.6864" fill="#0AB81B"></rect>',
  },
  {
    id: 24,
    number: '1-24',
    square: '5.31',
    el: '<rect data-v-0c4438bb="" x="244.428" y="437.238" width="18.5685" height="35.6864" fill="#0AB81B"></rect>',
  },
  {
    id: 25,
    number: '1-25',
    square: '4.91',
    el: '<rect data-v-0c4438bb="" x="263.065" y="437.248" width="17.7408" height="35.6608" fill="#0AB81B"></rect>',
  },
  {
    id: 26,
    number: '1-26',
    square: '4.85',
    el: '<rect data-v-0c4438bb="" x="280.806" y="437.248" width="19.3536" height="32.7936" fill="#0AB81B"></rect>',
  },
  {
    id: 27,
    number: '1-27',
    square: '4.51',
    el: '<rect data-v-0c4438bb="" x="299.622" y="437.238" width="18.5685" height="32.8315" fill="#0AB81B"></rect>',
  },
  {
    id: 28,
    number: '1-28',
    square: '4.59',
    el: '<rect data-v-0c4438bb="" x="318.259" y="437.248" width="16.8448" height="32.7936" fill="#0AB81B"></rect>',
  },
  {
    id: 29,
    number: '1-29',
    square: '4.64',
    el: '<rect data-v-0c4438bb="" x="336" y="437.238" width="18.5685" height="32.8315" fill="#0AB81B"></rect>',
  },
  {
    id: 30,
    number: '1-30',
    square: '6.36',
    el: '<path data-v-0c4438bb="" d="M145.331 344.601H175.795V379.365H162.739V366.329H145.331L145.331 344.601Z" fill="#0AB81B"></path>',
  },
  {
    id: 31,
    number: '1-31',
    square: '4.30',
    el: '<rect data-v-0c4438bb="" x="146.048" y="320.588" width="21.8624" height="24.0128" fill="#0AB81B"></rect>',
  },
  {
    id: 32,
    number: '1-32',
    square: '3.43',
    el: '<rect data-v-0c4438bb="" x="146.048" y="305.894" width="29.0304" height="13.9776" fill="#0AB81B"></rect>',
  },
  {
    id: 33,
    number: '1-33',
    square: '3.66',
    el: '<rect data-v-0c4438bb="" x="146.048" y="290.125" width="28.1344" height="15.0528" fill="#0AB81B"></rect>',
  },
  {
    id: 34,
    number: '1-34',
    square: '3.89',
    el: '<rect data-v-0c4438bb="" x="146.048" y="273.279" width="28.672" height="15.4112" fill="#0AB81B"></rect>',
  },
  {
    id: 35,
    number: '1-35',
    square: '4.04',
    el: '<rect data-v-0c4438bb="" x="146.048" y="254.822" width="29.0304" height="17.2032" fill="#0AB81B"></rect>',
  },
  {
    id: 36,
    number: '1-36',
    square: '3.53',
    el: '<rect data-v-0c4438bb="" x="146.048" y="239.77" width="29.0304" height="14.336" fill="#0AB81B"></rect>',
  },
  {
    id: 37,
    number: '1-37',
    square: '3.43',
    el: '<rect data-v-0c4438bb="" x="146.048" y="222.387" width="28.672" height="16.6656" fill="#0AB81B"></rect>',
  },
  {
    id: 38,
    number: '1-38',
    square: '3.58',
    el: '<rect data-v-0c4438bb="" x="144.614" y="207.871" width="30.1056" height="14.1568" fill="#0AB81B"></rect>',
  },
  {
    id: 39,
    number: '1-39',
    square: '3.81',
    el: '<rect data-v-0c4438bb="" x="144.614" y="192.102" width="29.3888" height="15.7696" fill="#0AB81B"></rect>',
  },

  {
    id: 40,
    number: '1-40',
    square: '-',
    el: '<rect data-v-0c4438bb="" x="144.614" y="173.823" width="29.3888" height="17.5616" fill="#0AB81B"></rect>',
  },
  {
    id: 41,
    number: '1-41',
    square: '4.47',
    el: '<rect data-v-0c4438bb="" x="144.614" y="156.262" width="29.3888" height="17.5616" fill="#0AB81B"></rect>',
  },
  {
    id: 42,
    number: '1-42',
    square: '4.23',
    el: '<rect data-v-0c4438bb="" x="144.614" y="138.88" width="30.464" height="17.3824" fill="#0AB81B"></rect>',
  },
  {
    id: 43,
    number: '1-43',
    square: '4.60',
    el: '<rect data-v-0c4438bb="" x="144.614" y="120.602" width="30.464" height="17.3824" fill="#0AB81B"></rect>',
  },
  {
    id: 44,
    number: '1-44',
    square: '4.67',
    el: '<rect data-v-0c4438bb="" x="144.614" y="101.427" width="30.464" height="17.3824" fill="#0AB81B"></rect>',
  },
  {
    id: 45,
    number: '1-45',
    square: '2.97',
    el: '<rect data-v-0c4438bb="" x="96.5884" y="125.261" width="33.5104" height="13.6192" fill="#0AB81B"></rect>',
  },
  {
    id: 46,
    number: '1-46',
    square: '4.27',
    el: '<rect data-v-0c4438bb="" x="97.4844" y="139.597" width="33.5104" height="15.5904" fill="#0AB81B"></rect>',
  },
  {
    id: 47,
    number: '1-47',
    square: '4.90',
    el: '<rect data-v-0c4438bb="" x="96.5884" y="156.262" width="33.5104" height="18.2784" fill="#0AB81B"></rect>',
  },
  {
    id: 48,
    number: '1-48',
    square: '4.61',
    el: '<rect data-v-0c4438bb="" x="96.5884" y="174.54" width="33.5104" height="18.2784" fill="#0AB81B"></rect>',
  },
  {
    id: 49,
    number: '1-49',
    square: '3.97',
    el: '<path data-v-0c4438bb="" d="M96.5884 192.012H130.099V207.871H102.416H96.5884V204.237V192.012Z" fill="#0AB81B"></path>',
  },
  {
    id: 50,
    number: '1-50',
    square: '3.66',
    el: '<path data-v-0c4438bb="" d="M96.5884 208.23H130.099V222.387H102.416H96.5884V219.144V208.23Z" fill="#0AB81B"></path>',
  },

  {
    id: 51,
    number: '1-51',
    square: '6.24',
    el: '<rect data-v-0c4438bb="" x="106.803" y="222.924" width="23.296" height="31.8976" fill="#0AB81B"></rect>',
  },
  {
    id: 52,
    number: '1-52',
    square: '3.61',
    el: '<rect data-v-0c4438bb="" x="106.803" y="254.822" width="24.7296" height="17.2032" fill="#0AB81B"></rect>',
  },
  {
    id: 53,
    number: '1-53',
    square: '3.25',
    el: '<rect data-v-0c4438bb="" x="107.52" y="272.562" width="24.0128" height="16.128" fill="#0AB81B"></rect>',
  },
  {
    id: 54,
    number: '1-54',
    square: '2.60',
    el: '<rect data-v-0c4438bb="" x="107.52" y="289.407" width="24.0128" height="13.0816" fill="#0AB81B"></rect>',
  },
  {
    id: 55,
    number: '1-55',
    square: '3.41',
    el: '<rect data-v-0c4438bb="" x="109.67" y="303.564" width="21.8624" height="17.92" fill="#0AB81B"></rect>',
  },
  {
    id: 56,
    number: '1-56',
    square: '5.91',
    el: '<rect data-v-0c4438bb="" x="105.369" y="322.56" width="26.1632" height="29.2096" fill="#0AB81B"></rect>',
  },
];

const flatPopup = ref(null);
const showedPopup = ref(null);
const currentFlat = ref(null);
const showedBook = ref(false);

const onMouseenter = (e, flat) => {
  showedPopup.value = true;

  const { left, top } = e.srcElement.getBoundingClientRect();
  const { pageYOffset: pageY, pageXOffset: pageX } = window;
  flatPopup.value = {
    coords: { top: top + pageY + 10 + "px", left: left + pageX + "px" },
  };
  currentFlat.value = flat;
};

const hidePopup = debounce(200, () => {
  if (showedPopup.value ) return;
  flatPopup.value = null;
});

const onMouseleave = () => {
  showedPopup.value = false;
  hidePopup();
};

function closePopup() {
  showedPopup.value = false;
  flatPopup.value = null;
}
</script>
<style lang="scss" scoped>
.grid {
  @apply tw-overflow-hidden tw-grid  tw-gap-32 lg:tw-pl-40 lg:tw-grid-cols-[minmax(0,_325px)_1fr] 2xl:tw-grid-cols-[minmax(0,_815px)_1fr];
  .left,
  .right {
    @screen lg {
      height: calc(100vh - 150px);
    }
    @screen 2xl {
      height: calc(100vh - 182px);
    }
  }
  .left {
    @apply tw-pl-16 lg:tw-pl-0 tw-pt-[40px] 2xl:tw-pt-[70px];
  }
  .right {
    @apply tw-p-16 lg:tw-p-[52px];
    overflow: auto;
    .plan {
      @apply tw-grid tw-place-content-center;
      @apply tw-relative tw-overflow-auto tw-h-full;
      &-img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
      &-svg {
        height: 100%;
        left: 0;
        overflow: visible !important;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
  }
}
.flat-popup {
  position: absolute;
  transform: translateY(-100%);
  padding: 14px;
  display: flex;
  gap: 27px;
  z-index: 100;
  min-width: 150px;
  border-radius: 14px;
  color: theme("colors.secondary");
  background: theme("colors.white");
  box-shadow: 0px 74px 30px rgba(0, 0, 0, 0.01),
    0px 42px 25px rgba(0, 0, 0, 0.05), 0px 19px 19px rgba(0, 0, 0, 0.09),
    0px 5px 10px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
}
</style>

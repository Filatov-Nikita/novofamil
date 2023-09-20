<template>
  <div class="grid">
    <div class="left">
      <h1 class="tw-text-white tw-font-nord tw-text-md2 2xl:tw-text-xl lg:tw-mb-[70px] 2xl:tw-mb-[90px">
        Кладовые
      </h1>
      <div class="tw-hidden lg:tw-grid tw-justify-center tw-w-fit tw-gap-16">
        <div class="tw-text-secondary tw-text-center">Этаж</div>
        <div class="tw-grid tw-grid-cols-2 tw-gap-12">
          <div
            v-for="item in floors"
            class="tw-w-32 tw-h-32 tw-rounded-full tw-grid tw-place-content-center tw-text-third tw-border tw-border-third">
            {{ item }}
        </div>
        </div>
      </div>
    </div>
    <div class="right tw-bg-white tw-relative">
      <div class="plan">
        <!-- <img src="@/assets/images/store-rooms.png" alt="" class="plan-img" /> -->
        <svg
          width="515"
          height="560"
          viewBox="0 0 515 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="514.125" height="560" fill="url(#pattern0)" />
          <g v-for="item in roomsList">
            <g
              style="mix-blend-mode: multiply"
              opacity="0.4"
              v-html="item.el"
              @click="showFlat(item.id, item.status)"
              @mouseenter="onMouseenter($event, item)"
              @mouseleave="onMouseleave"
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
      v-if="flatPopup"
      class="flat-popup tw-min-w-[189px]"
      :style="flatPopup.coords"
      @mouseenter="showedPopup = true"
      @mouseleave="onMouseleave">
      <div class=" tw-grid">

        <div class=" tw-flex tw-mb-10">
          <div class=" tw-text-xl tw-mr-10 tw-font-nord">
            1-34
          </div>
          <div class=" tw-text-base tw-mt-10">
            3.82
          </div>
        </div>
        <AppButton
        class=" tw-px-16 tw-py-10"
              
            >
            Забронировать
            </AppButton>
      </div>
    </div>

    <!-- <DialogBook
      v-if="flatPopup"
      v-model:showed="showedBook"
      :flatNumber="flatPopup.flat.number"
      @update:showed="flatPopup = null" /> -->
  </teleport>

  <!-- @click="showFlat(flat.id, flat.status)"
              @mouseenter="onMouseenter($event, flat)"
              @mouseleave="onMouseleave" -->
</template>
<script setup>
import DialogBook from "@/components/DialogBook.vue";
import { computed, toRef, ref, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import { debounce } from "throttle-debounce";
const floors = [
  13,12,11,10,9,8,7,6,5,4,3,2,1
]
const roomsList = [
  {
    id: 1,
    floor: 1,
    el: '<path data-v-0c4438bb="" d="M439.5 535.986H494.95V559.999H433.664L433.664 547.348H439.5V535.986Z" fill="#0AB81B"></path>',
  },
  {
    id: 2,
    floor: 2,
    el: '<rect data-v-0c4438bb="" x="434.201" y="512.152" width="37.1369" height="22.8393" fill="#0AB81B"></rect>',
  },
  {
    id: 3,
    floor: 3,
    el: '<rect data-v-0c4438bb="" x="404.633" y="493.158" width="17.1401" height="42.8237" fill="#0AB81B"></rect>',
  },
  {
    id: 4,
    floor: 4,
    el: '<rect data-v-0c4438bb="" x="434.201" y="483.839" width="37.1369" height="28.5492" fill="#0AB81B"></rect>',
  },
  {
    id: 5,
    floor: 5,
    el: '<path data-v-0c4438bb="" d="M471.295 483.839H481.809V488.125H494.95V535.986H471.295V483.839Z" fill="#0AB81B"></path>',
  },
  {
    id: 6,
    floor: 6,
    el: '<rect data-v-0c4438bb="" x="482.406" y="451.584" width="12.544" height="36.1984" fill="#0AB81B"></rect>',
  },
  {
    id: 7,
    floor: 7,
    el: '<path data-v-0c4438bb="" d="M354.099 437.248H363.555V438.676H371.66V484.378H360.853V470.096H354.099V437.248Z" fill="#0AB81B"></path>',
  },
  {
    id: 8,
    floor: 8,
    el: '<rect data-v-0c4438bb="" x="368.076" y="395.493" width="17.7408" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 9,
    floor: 9,
    el: '<rect data-v-0c4438bb="" x="350.873" y="395.493" width="17.2032" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 10,
    floor: 10,
    el: '<rect data-v-0c4438bb="" x="334.566" y="395.493" width="16.3072" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 11,
    floor: 11,
    el: '<rect data-v-0c4438bb="" x="318.259" y="395.493" width="15.9488" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 12,
    floor: 12,
    el: '<rect data-v-0c4438bb="" x="299.443" y="395.493" width="18.4576" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 13,
    floor: 13,
    el: '<rect data-v-0c4438bb="" x="280.806" y="395.493" width="18.6368" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 14,
    floor: 14,
    el: '<rect data-v-0c4438bb="" x="263.603" y="395.493" width="17.2032" height="28.4928" fill="#0AB81B"></rect>',
  },

  {
    id: 15,
    floor: 15,
    el: '<path data-v-0c4438bb="" d="M246.4 395.493H263.603V423.986H244.966V411.877H246.4V395.493Z" fill="#0AB81B"></path>',
  },
  {
    id: 16,
    floor: 16,
    el: '<rect data-v-0c4438bb="" x="227.046" y="395.493" width="17.92" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 17,
    floor: 17,
    el: '<path data-v-0c4438bb="" d="M210.56 395.493H227.046V423.628H206.259V411.67H210.56V395.493Z" fill="#0AB81B"></path>',
  },
  {
    id: 18,
    floor: 18,
    el: '<rect data-v-0c4438bb="" x="190.848" y="395.493" width="14.336" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 19,
    floor: 19,
    el: '<rect data-v-0c4438bb="" x="176.153" y="395.493" width="14.336" height="28.4928" fill="#0AB81B"></rect>',
  },
  {
    id: 20,
    floor: 20,
    el: '<rect data-v-0c4438bb="" x="147.84" y="414.668" width="13.44" height="31.1808" fill="#0AB81B"></rect>',
  },
  {
    id: 21,
    floor: 21,
    el: '<rect data-v-0c4438bb="" x="175.795" y="437.238" width="29.9952" height="17.1295" fill="#0AB81B"></rect>',
  },

  {
    id: 22,
    floor: 22,
    el: '<rect data-v-0c4438bb="" x="206.259" y="437.248" width="20.9664" height="35.6608" fill="#0AB81B"></rect>',
  },
  {
    id: 23,
    floor: 23,
    el: '<rect data-v-0c4438bb="" x="227.225" y="437.238" width="17.1401" height="35.6864" fill="#0AB81B"></rect>',
  },
  {
    id: 24,
    floor: 24,
    el: '<rect data-v-0c4438bb="" x="244.428" y="437.238" width="18.5685" height="35.6864" fill="#0AB81B"></rect>',
  },
  {
    id: 25,
    floor: 25,
    el: '<rect data-v-0c4438bb="" x="263.065" y="437.248" width="17.7408" height="35.6608" fill="#0AB81B"></rect>',
  },
  {
    id: 26,
    floor: 26,
    el: '<rect data-v-0c4438bb="" x="280.806" y="437.248" width="19.3536" height="32.7936" fill="#0AB81B"></rect>',
  },
  {
    id: 27,
    floor: 27,
    el: '<rect data-v-0c4438bb="" x="299.622" y="437.238" width="18.5685" height="32.8315" fill="#0AB81B"></rect>',
  },
  {
    id: 28,
    floor: 28,
    el: '<rect data-v-0c4438bb="" x="318.259" y="437.248" width="16.8448" height="32.7936" fill="#0AB81B"></rect>',
  },
  {
    id: 29,
    floor: 29,
    el: '<rect data-v-0c4438bb="" x="336" y="437.238" width="18.5685" height="32.8315" fill="#0AB81B"></rect>',
  },
  {
    id: 30,
    floor: 30,
    el: '<path data-v-0c4438bb="" d="M145.331 344.601H175.795V379.365H162.739V366.329H145.331L145.331 344.601Z" fill="#0AB81B"></path>',
  },
  {
    id: 31,
    floor: 31,
    el: '<rect data-v-0c4438bb="" x="146.048" y="320.588" width="21.8624" height="24.0128" fill="#0AB81B"></rect>',
  },
  {
    id: 32,
    floor: 32,
    el: '<rect data-v-0c4438bb="" x="146.048" y="305.894" width="29.0304" height="13.9776" fill="#0AB81B"></rect>',
  },
  {
    id: 33,
    floor: 33,
    el: '<rect data-v-0c4438bb="" x="146.048" y="290.125" width="28.1344" height="15.0528" fill="#0AB81B"></rect>',
  },
  {
    id: 34,
    floor: 34,
    el: '<rect data-v-0c4438bb="" x="146.048" y="273.279" width="28.672" height="15.4112" fill="#0AB81B"></rect>',
  },
  {
    id: 35,
    floor: 35,
    el: '<rect data-v-0c4438bb="" x="146.048" y="254.822" width="29.0304" height="17.2032" fill="#0AB81B"></rect>',
  },
  {
    id: 36,
    floor: 36,
    el: '<rect data-v-0c4438bb="" x="146.048" y="239.77" width="29.0304" height="14.336" fill="#0AB81B"></rect>',
  },
  {
    id: 37,
    floor: 37,
    el: '<rect data-v-0c4438bb="" x="146.048" y="222.387" width="28.672" height="16.6656" fill="#0AB81B"></rect>',
  },
  {
    id: 38,
    floor: 38,
    el: '<rect data-v-0c4438bb="" x="144.614" y="207.871" width="30.1056" height="14.1568" fill="#0AB81B"></rect>',
  },
  {
    id: 39,
    floor: 39,
    el: '<rect data-v-0c4438bb="" x="144.614" y="192.102" width="29.3888" height="15.7696" fill="#0AB81B"></rect>',
  },

  {
    id: 40,
    floor: 40,
    el: '<rect data-v-0c4438bb="" x="144.614" y="173.823" width="29.3888" height="17.5616" fill="#0AB81B"></rect>',
  },
  {
    id: 41,
    floor: 41,
    el: '<rect data-v-0c4438bb="" x="144.614" y="156.262" width="29.3888" height="17.5616" fill="#0AB81B"></rect>',
  },
  {
    id: 42,
    floor: 42,
    el: '<rect data-v-0c4438bb="" x="144.614" y="138.88" width="30.464" height="17.3824" fill="#0AB81B"></rect>',
  },
  {
    id: 43,
    floor: 43,
    el: '<rect data-v-0c4438bb="" x="144.614" y="120.602" width="30.464" height="17.3824" fill="#0AB81B"></rect>',
  },
  {
    id: 44,
    floor: 44,
    el: '<rect data-v-0c4438bb="" x="144.614" y="101.427" width="30.464" height="17.3824" fill="#0AB81B"></rect>',
  },
  {
    id: 45,
    floor: 45,
    el: '<rect data-v-0c4438bb="" x="96.5884" y="125.261" width="33.5104" height="13.6192" fill="#0AB81B"></rect>',
  },
  {
    id: 46,
    floor: 46,
    el: '<rect data-v-0c4438bb="" x="97.4844" y="139.597" width="33.5104" height="15.5904" fill="#0AB81B"></rect>',
  },
  {
    id: 47,
    floor: 47,
    el: '<rect data-v-0c4438bb="" x="96.5884" y="156.262" width="33.5104" height="18.2784" fill="#0AB81B"></rect>',
  },
  {
    id: 48,
    floor: 48,
    el: '<rect data-v-0c4438bb="" x="96.5884" y="174.54" width="33.5104" height="18.2784" fill="#0AB81B"></rect>',
  },
  {
    id: 49,
    floor: 49,
    el: '<path data-v-0c4438bb="" d="M96.5884 192.012H130.099V207.871H102.416H96.5884V204.237V192.012Z" fill="#0AB81B"></path>',
  },
  {
    id: 50,
    floor: 50,
    el: '<path data-v-0c4438bb="" d="M96.5884 208.23H130.099V222.387H102.416H96.5884V219.144V208.23Z" fill="#0AB81B"></path>',
  },

  {
    id: 51,
    floor: 51,
    el: '<rect data-v-0c4438bb="" x="106.803" y="222.924" width="23.296" height="31.8976" fill="#0AB81B"></rect>',
  },
  {
    id: 52,
    floor: 52,
    el: '<rect data-v-0c4438bb="" x="106.803" y="254.822" width="24.7296" height="17.2032" fill="#0AB81B"></rect>',
  },
  {
    id: 53,
    floor: 53,
    el: '<rect data-v-0c4438bb="" x="107.52" y="272.562" width="24.0128" height="16.128" fill="#0AB81B"></rect>',
  },
  {
    id: 54,
    floor: 54,
    el: '<rect data-v-0c4438bb="" x="107.52" y="289.407" width="24.0128" height="13.0816" fill="#0AB81B"></rect>',
  },
  {
    id: 55,
    floor: 55,
    el: '<rect data-v-0c4438bb="" x="109.67" y="303.564" width="21.8624" height="17.92" fill="#0AB81B"></rect>',
  },
  {
    id: 56,
    floor: 56,
    el: '<rect data-v-0c4438bb="" x="105.369" y="322.56" width="26.1632" height="29.2096" fill="#0AB81B"></rect>',
  },
];
const router = useRouter();
const flatPopup = ref(null);
const showedPopup = ref(null);
const showFlat = (flatId, flatStatus) => {
  if (flatStatus === "sold") return;
  router.push({ name: "flats.one", params: { id: flatId } });
};

const onMouseenter = (e, flat) => {
  showedPopup.value = true;
  
  const { left, top } = e.srcElement.getBoundingClientRect();
  const { pageYOffset: pageY, pageXOffset: pageX } = window;
  flatPopup.value = {
    coords: { top: top + pageY + 10 + "px", left: left + pageX + "px" },
    flat,
  };
  // emit("update:showed", flat);
};

const hidePopup = debounce(200, () => {
  if (showedPopup.value ) return;
  flatPopup.value = null;
  // emit("update:showed", null);
});

const onMouseleave = () => {
  showedPopup.value = false;
  hidePopup();
};
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
    @apply tw-pl-16 lg:tw-pl-0 tw-pt-[84px] 2xl:tw-pt-[100px];
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

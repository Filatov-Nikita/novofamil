<template>
  <div class="grid">
    <div class="left">
      <Breadcrumbs class="tw-mb-30" />
      <h1 class="tw-text-white tw-font-nord tw-text-md2 2xl:tw-text-xl lg:tw-mb-[70px] 2xl:tw-mb-[90px">
        Кладовые
      </h1>
    </div>
    <div class="right tw-bg-[#F8FCFD] tw-relative">
      <div class="zoom">
        <button class="zoom-btn" @click="increase">+</button>
        <button class="zoom-btn" @click="reduce">-</button>
      </div>
      <div class="bottom-panel">
        <div>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3bdc335c=""><path d="M63.5 39C63.5 52.531 52.531 63.5 39 63.5C25.469 63.5 14.5 52.531 14.5 39C14.5 25.469 25.469 14.5 39 14.5C52.531 14.5 63.5 25.469 63.5 39Z" stroke="#D6DEDF" data-v-3bdc335c=""></path><path d="M51.9983 39.3963C51.9948 39.605 51.9085 39.8066 51.7584 39.9567C51.6083 40.1067 51.4068 40.193 51.1981 40.1966L39.3934 40.3955L39.1945 52.2006C39.1912 52.3796 39.1271 52.5542 39.0126 52.6956C38.8981 52.837 38.7401 52.9368 38.5647 52.9784C38.3893 53.0201 38.2069 53.0011 38.0477 52.9247C37.8885 52.8482 37.7619 52.7189 37.6889 52.558L27.069 29.1333C27.0027 28.988 26.9836 28.8242 27.0142 28.6644C27.0448 28.5045 27.1236 28.3563 27.24 28.24C27.3563 28.1237 27.5045 28.0448 27.6644 28.0142C27.8242 27.9836 27.9879 28.0027 28.1333 28.069L51.557 38.6893C51.6918 38.7502 51.8051 38.849 51.8835 38.9739C51.962 39.0989 52.0023 39.2449 51.9999 39.3947L51.9983 39.3963Z" fill="#D6DEDF" data-v-3bdc335c=""></path><path d="M16.7175 3.28249C20.4275 6.99247 20.4275 13.0075 16.7175 16.7175C13.0075 20.4275 6.99247 20.4275 3.28249 16.7175C-0.427495 13.0075 -0.427494 6.99246 3.28249 3.28248C6.99247 -0.427496 13.0075 -0.427495 16.7175 3.28249Z" fill="#FA864B" stroke="#FA864B" data-v-3bdc335c=""></path><path d="M10.4677 13.0113C9.83568 13.0113 9.27968 12.8833 8.79968 12.6273C8.31968 12.3713 7.94768 12.0113 7.68368 11.5473C7.42768 11.0753 7.29968 10.5313 7.29968 9.91534C7.29968 9.30734 7.43168 8.77134 7.69568 8.30734C7.95968 7.83534 8.32768 7.47134 8.79968 7.21534C9.27968 6.95134 9.83168 6.81934 10.4557 6.81934C11.3197 6.81934 12.0677 7.12334 12.6997 7.73134L11.8837 8.60734C11.7077 8.43134 11.4957 8.29534 11.2477 8.19934C10.9997 8.09534 10.7437 8.04334 10.4797 8.04334C9.93568 8.04334 9.49168 8.21934 9.14768 8.57134C8.81168 8.91534 8.64368 9.36334 8.64368 9.91534C8.64368 10.4753 8.81168 10.9273 9.14768 11.2713C9.49168 11.6153 9.93568 11.7873 10.4797 11.7873C10.7677 11.7873 11.0397 11.7353 11.2957 11.6313C11.5517 11.5273 11.7677 11.3753 11.9437 11.1753L12.7717 12.0753C12.4437 12.3953 12.0917 12.6313 11.7157 12.7833C11.3397 12.9353 10.9237 13.0113 10.4677 13.0113Z" fill="white" data-v-3bdc335c=""></path></svg>
        </div>
        <div>
          <div class="status-info before:tw-bg-positive">
            <span>кладовая свободна</span>
          </div>
        </div>
        <div>
          <svg width="54" height="66" viewBox="0 0 54 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.999999 34L1 61C1 62.8856 1 63.8284 1.58579 64.4142C2.17157 65 3.11438 65 5 65L26 65C27.8856 65 28.8284 65 29.4142 64.4142C30 63.8284 30 62.8856 30 61L30 51C30 49.1144 30 48.1716 29.4142 47.5858C28.8284 47 27.8856 47 26 47L23 47C21.1144 47 20.1716 47 19.5858 46.4142C19 45.8284 19 44.8856 19 43L19 34C19 32.1144 19 31.1716 18.4142 30.5858C17.8284 30 16.8856 30 15 30L5 30C3.11438 30 2.17157 30 1.58579 30.5858C0.999999 31.1716 0.999999 32.1144 0.999999 34Z" fill="#FA864B" fill-opacity="0.6" stroke="#F28148"/>
            <path d="M15 1L5 1C3.11439 1 2.17158 1 1.58579 1.58579C1 2.17157 1 3.11438 1 5L1 26C1 27.8856 1 28.8284 1.58579 29.4142C2.17157 30 3.11438 30 5 30L15 30C16.8856 30 17.8284 30 18.4142 29.4142C19 28.8284 19 27.8856 19 26V18.7025V15.6699L19 5C19 3.11438 19 2.17157 18.4142 1.58579C17.8284 1 16.8856 1 15 1Z" fill="#FA864B" fill-opacity="0.6" stroke="#F28148"/>
            <path d="M9.16594 15.9922L9.92375 16.1836C9.7649 16.806 9.47844 17.2812 9.06437 17.6094C8.65292 17.9349 8.14901 18.0977 7.55266 18.0977C6.93547 18.0977 6.43286 17.9727 6.04484 17.7227C5.65943 17.4701 5.36516 17.1055 5.16203 16.6289C4.96151 16.1523 4.86125 15.6406 4.86125 15.0938C4.86125 14.4974 4.97453 13.9779 5.20109 13.5352C5.43026 13.0898 5.75448 12.7526 6.17375 12.5234C6.59562 12.2917 7.05917 12.1758 7.56437 12.1758C8.13729 12.1758 8.61906 12.3216 9.00969 12.6133C9.40031 12.9049 9.67245 13.3151 9.82609 13.8438L9.08 14.0195C8.94719 13.6029 8.75448 13.2995 8.50187 13.1094C8.24927 12.9193 7.93156 12.8242 7.54875 12.8242C7.10865 12.8242 6.74016 12.9297 6.44328 13.1406C6.14901 13.3516 5.94198 13.6354 5.82219 13.9922C5.7024 14.3464 5.6425 14.7122 5.6425 15.0898C5.6425 15.5768 5.71281 16.0026 5.85344 16.3672C5.99667 16.7292 6.21802 17 6.5175 17.1797C6.81698 17.3594 7.1412 17.4492 7.49016 17.4492C7.91464 17.4492 8.27401 17.3268 8.56828 17.082C8.86255 16.8372 9.06177 16.474 9.16594 15.9922ZM10.42 16.4883L11.1231 16.3945C11.2039 16.793 11.3406 17.0807 11.5333 17.2578C11.7286 17.4323 11.9656 17.5195 12.2442 17.5195C12.5749 17.5195 12.8536 17.4049 13.0802 17.1758C13.3093 16.9466 13.4239 16.6628 13.4239 16.3242C13.4239 16.0013 13.3184 15.7357 13.1075 15.5273C12.8966 15.3164 12.6283 15.2109 12.3028 15.2109C12.17 15.2109 12.0046 15.237 11.8067 15.2891L11.8848 14.6719C11.9317 14.6771 11.9695 14.6797 11.9981 14.6797C12.2976 14.6797 12.5671 14.6016 12.8067 14.4453C13.0463 14.2891 13.1661 14.0482 13.1661 13.7227C13.1661 13.4648 13.0789 13.2513 12.9044 13.082C12.7299 12.9128 12.5046 12.8281 12.2286 12.8281C11.9552 12.8281 11.7273 12.9141 11.545 13.0859C11.3627 13.2578 11.2455 13.5156 11.1934 13.8594L10.4903 13.7344C10.5763 13.263 10.7716 12.8984 11.0763 12.6406C11.3809 12.3802 11.7598 12.25 12.213 12.25C12.5255 12.25 12.8132 12.3177 13.0763 12.4531C13.3393 12.5859 13.5398 12.7682 13.6778 13C13.8184 13.2318 13.8888 13.4779 13.8888 13.7383C13.8888 13.9857 13.8223 14.2109 13.6895 14.4141C13.5567 14.6172 13.3601 14.7786 13.0997 14.8984C13.4382 14.9766 13.7013 15.1393 13.8888 15.3867C14.0763 15.6315 14.17 15.9388 14.17 16.3086C14.17 16.8086 13.9877 17.2331 13.6231 17.582C13.2585 17.9284 12.7976 18.1016 12.2403 18.1016C11.7377 18.1016 11.3197 17.9518 10.9864 17.6523C10.6557 17.3529 10.4669 16.9648 10.42 16.4883Z" fill="white"/>
            <path d="M9.16594 55.9922L9.92375 56.1836C9.7649 56.806 9.47844 57.2812 9.06437 57.6094C8.65292 57.9349 8.14901 58.0977 7.55266 58.0977C6.93547 58.0977 6.43286 57.9727 6.04484 57.7227C5.65943 57.4701 5.36516 57.1055 5.16203 56.6289C4.96151 56.1523 4.86125 55.6406 4.86125 55.0938C4.86125 54.4974 4.97453 53.9779 5.20109 53.5352C5.43026 53.0898 5.75448 52.7526 6.17375 52.5234C6.59562 52.2917 7.05917 52.1758 7.56437 52.1758C8.13729 52.1758 8.61906 52.3216 9.00969 52.6133C9.40031 52.9049 9.67245 53.3151 9.82609 53.8438L9.08 54.0195C8.94719 53.6029 8.75448 53.2995 8.50187 53.1094C8.24927 52.9193 7.93156 52.8242 7.54875 52.8242C7.10865 52.8242 6.74016 52.9297 6.44328 53.1406C6.14901 53.3516 5.94198 53.6354 5.82219 53.9922C5.7024 54.3464 5.6425 54.7122 5.6425 55.0898C5.6425 55.5768 5.71281 56.0026 5.85344 56.3672C5.99667 56.7292 6.21802 57 6.5175 57.1797C6.81698 57.3594 7.1412 57.4492 7.49016 57.4492C7.91464 57.4492 8.27401 57.3268 8.56828 57.082C8.86255 56.8372 9.06177 56.474 9.16594 55.9922ZM14.1114 57.3242V58H10.3263C10.321 57.8307 10.3484 57.668 10.4083 57.5117C10.5046 57.2539 10.6583 57 10.8692 56.75C11.0828 56.5 11.3901 56.2109 11.7911 55.8828C12.4135 55.3724 12.8341 54.9688 13.0528 54.6719C13.2716 54.3724 13.3809 54.0898 13.3809 53.8242C13.3809 53.5456 13.2807 53.3112 13.0802 53.1211C12.8822 52.9284 12.6231 52.832 12.3028 52.832C11.9643 52.832 11.6934 52.9336 11.4903 53.1367C11.2872 53.3398 11.1843 53.6211 11.1817 53.9805L10.4591 53.9062C10.5085 53.3672 10.6947 52.957 11.0177 52.6758C11.3406 52.3919 11.7742 52.25 12.3184 52.25C12.8679 52.25 13.3028 52.4023 13.6231 52.707C13.9434 53.0117 14.1036 53.3893 14.1036 53.8398C14.1036 54.069 14.0567 54.2943 13.963 54.5156C13.8692 54.737 13.713 54.9701 13.4942 55.2148C13.2781 55.4596 12.9174 55.7956 12.4122 56.2227C11.9903 56.5768 11.7195 56.8177 11.5997 56.9453C11.4799 57.0703 11.3809 57.1966 11.3028 57.3242H14.1114Z" fill="white"/>
            <path d="M53 61L53 51C53 49.1144 53 48.1716 52.4142 47.5858C51.8284 47 50.8856 47 49 47L34 47C32.1144 47 31.1716 47 30.5858 47.5858C30 48.1716 30 49.1144 30 51L30 61C30 62.8856 30 63.8284 30.5858 64.4142C31.1716 65 32.1144 65 34 65L38.9601 65L41.3652 65L49 65C50.8856 65 51.8284 65 52.4142 64.4142C53 63.8284 53 62.8856 53 61Z" fill="#FA864B" fill-opacity="0.6" stroke="#F28148"/>
            <path d="M41.1659 55.9922L41.9237 56.1836C41.7649 56.806 41.4784 57.2812 41.0644 57.6094C40.6529 57.9349 40.149 58.0977 39.5527 58.0977C38.9355 58.0977 38.4329 57.9727 38.0448 57.7227C37.6594 57.4701 37.3652 57.1055 37.162 56.6289C36.9615 56.1523 36.8612 55.6406 36.8612 55.0938C36.8612 54.4974 36.9745 53.9779 37.2011 53.5352C37.4303 53.0898 37.7545 52.7526 38.1737 52.5234C38.5956 52.2917 39.0592 52.1758 39.5644 52.1758C40.1373 52.1758 40.6191 52.3216 41.0097 52.6133C41.4003 52.9049 41.6724 53.3151 41.8261 53.8438L41.08 54.0195C40.9472 53.6029 40.7545 53.2995 40.5019 53.1094C40.2493 52.9193 39.9316 52.8242 39.5487 52.8242C39.1086 52.8242 38.7402 52.9297 38.4433 53.1406C38.149 53.3516 37.942 53.6354 37.8222 53.9922C37.7024 54.3464 37.6425 54.7122 37.6425 55.0898C37.6425 55.5768 37.7128 56.0026 37.8534 56.3672C37.9967 56.7292 38.218 57 38.5175 57.1797C38.817 57.3594 39.1412 57.4492 39.4902 57.4492C39.9146 57.4492 40.274 57.3268 40.5683 57.082C40.8626 56.8372 41.0618 56.474 41.1659 55.9922ZM45.0645 58H44.3614V53.5195C44.1921 53.681 43.9695 53.8424 43.6934 54.0039C43.42 54.1654 43.1739 54.2865 42.9552 54.3672V53.6875C43.3484 53.5026 43.6921 53.2786 43.9864 53.0156C44.2807 52.7526 44.489 52.4974 44.6114 52.25H45.0645V58Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div class="street--left">ул. Красноводская</div>
      <div class="street--bottom">ул. Акназарова</div>
      <div class="plan" ref="planRef">
        <svg
          class="tw-absolute tw-left-0 tw-top-0"
          ref="svgRef"
          :width="planSize.width"
          :height="planSize.height"
          viewBox="0 0 515 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="514.125" height="560" fill="url(#pattern0)" />
          <g v-for="item in roomsList" :key="item.number">
            <g
              v-if="!$screen.touch"
                class="cell"
              style="mix-blend-mode: multiply"
              v-html="item.el"
              @mouseenter="onMouseenter($event, item)"
              @mouseleave="onMouseleave"
            ></g>
            <g v-else
              class="cell"
              style="mix-blend-mode: multiply"
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
      <div class="tw-grid tw-w-full">
        <div class="tw-flex tw-justify-between tw-mb-10">
          <div class="tw-text-[32px] lg:tw-text-xl tw-mr-10 tw-font-nord">
            1-{{ currentFlat.id }}
          </div>
          <div class="tw-text-base tw-mt-10">
            {{ currentFlat.square }}
          </div>
        </div>
        <div class="tw-flex tw-gap-8">
          <AppButton class="tw-px-16 tw-py-10 tw-w-full" @click="showedBook = true">
              Забронировать
          </AppButton>
          <AppButton v-if="$screen.touch" theme="gray" class="tw-p-0 tw-min-w-[44px] tw-h-[44px] tw-relative" @click="closePopup">
            <svg class="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.3335 8.26634L8.26215 7.33301L16.62 15.733L15.6914 16.6663L7.3335 8.26634Z" fill="white"/>
              <path d="M16.6668 8.26634L15.7382 7.33301L7.38028 15.733L8.30893 16.6663L16.6668 8.26634Z" fill="white"/>
            </svg>
          </AppButton>
        </div>
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
import { ref, onMounted, onUnmounted } from "vue";
import { debounce, throttle } from "throttle-debounce";
import { useStore } from "vuex";

const store = useStore();

store.commit('breadcrumbs/set', [
  { label: 'Главная', to: '/' },
  { label: 'О проекте', to: { name: 'about' } },
  { label: 'Кладовые', to: { name: 'store-rooms' } },
]);

const planRef = ref(null);
const svgRef = ref(null);

const planSize = ref({
  width: 515,
  height: 560
});

function alignCenterPlan() {
  const w = planRef.value.offsetWidth;
  const h = planRef.value.offsetHeight;
  const pw = planSize.value.width;
  const ph = planSize.value.height;

  if(pw < w) svgRef.value.style.left = ((w - pw) / 2) + 'px';
  else svgRef.value.style.left = '0';

  if(ph < h) svgRef.value.style.top = ((h - ph) / 2) + 'px';
  else svgRef.value.style.top = '0';
}

const alignWrapped = throttle(500, alignCenterPlan);

onMounted(() => {
  alignCenterPlan();
  window.addEventListener('resize', alignWrapped);
});

onUnmounted(() => {
  window.removeEventListener('resize', alignWrapped);
});

function increase() {
  planSize.value.width *= 1.2;
  planSize.value.height *= 1.2;
  alignCenterPlan();
}

function reduce() {
  planSize.value.width /= 1.2;
  planSize.value.height /= 1.2;
  alignCenterPlan();
}

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
.cell {
  opacity: 0;
}

.cell:hover {
  opacity: 0.4;
}

.street--left, .street--bottom {
  color: #9FB7BC;
  font-size: 14px;
  line-height: 140%;
  position: absolute;
}

.street--left {
  top: 50%;
  left: -20px;
  transform: rotate(-90deg) translateY(-50%);
}

.street--bottom {
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);
}

.bottom-panel {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;
  align-items: flex-end;
  @apply tw-px-16 tw-py-16 tw-pb-32 lg:tw-px-40 lg:tw-pb-16;
}

.status-info {
  @apply tw-font-arial tw-text-xs tw-leading-120 tw-text-gray  tw-flex tw-flex-wrap tw-items-center tw-gap-x-10;
}
.status-info::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

@screen xl {
  .status-info {
    @apply tw-text-sm;
  }
  .status-info::before {
    width: 14px;
    height: 14px;
  }
}

.zoom {
  position: absolute;
  right: 30px;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.zoom-btn {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  font-size: 28px;
  color: #9BA5B0;
  background: #F2F2F2;
  font-weight: 400;
  margin: 10px;
}

.grid {
  grid-template-rows: auto 1fr;
  @apply tw-overflow-hidden tw-grid tw-gap-32 lg:tw-pl-40 lg:tw-grid-rows-none lg:tw-grid-cols-[minmax(0,_325px)_1fr] 2xl:tw-grid-cols-[minmax(0,_815px)_1fr];
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
    @apply tw-p-16 tw-pb-[100px] lg:tw-p-[52px] tw-pr-[90px] lg:tw-pb-[100px] lg:tw-pr-[90px];
    overflow: auto;
    .plan {
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
  padding: 16px;
  display: flex;
  gap: 27px;
  z-index: 100;
  min-width: 190px;
  border-radius: 14px;
  color: theme("colors.secondary");
  background: theme("colors.white");
  box-shadow: 0px 74px 30px rgba(0, 0, 0, 0.01),
    0px 42px 25px rgba(0, 0, 0, 0.05), 0px 19px 19px rgba(0, 0, 0, 0.09),
    0px 5px 10px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
}
</style>

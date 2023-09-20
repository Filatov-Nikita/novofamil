<template>
  <app-page class="tw-relative">
    <div
      class="wrapper xl:tw-h-full xl:tw-flex xl-separator md:tw-pb-[410px] xl:tw-pb-0">
      <div class="xl:tw-w-1/2 md:tw-relative md:tw-z-10">
        <Breadcrumbs class="tw-mb-40" />
        <h1 class="h1 tw-mb-20 2xl:tw-mb-[50px]">Расположение</h1>
        <div
          class="tw-flex tw-overflow-x-auto app-scroll-x tw-pb-20 tw-mb-20 -tw-ml-20 md:tw-max-w-[700px] md:-tw-mt-16 md:tw-flex-wrap xl:tw-max-w-[450px] xl:-tw-mt-10 xl:-tw-ml-30">
          <div
            class="tw-shrink-0 tw-pl-20 md:tw-pt-16 md:tw-w-1/4 last:tw-mr-0 xl:tw-w-1/2 xl:tw-mr-0 xl:tw-pt-10 xl:tw-pl-30"
            v-for="tab in tabs"
            :key="tab.name">
            <TabsItem
              class="md:tw-w-full"
              :active="tabValue === tab.name"
              :fill="tab.fill"
              v-bind="tab"
              @click="tabValue = tab.name" />
          </div>
        </div>
      </div>
      <div
        class="xl:tw-w-1/2 md:tw-absolute md:tw-bottom-0 md:tw-left-0 md:tw-right-0 md:tw-h-full md:tw-pt-[280px] xl:tw-left-auto xl:tw-pt-0 xl:tw-top-0 2xl:tw-mt-0 2xl:tw-py-30">
        <yandex-map
          class="tw-h-[290px] md:tw-h-full"
          :coords="homePoint.coords"
          :zoom="16"
          :controls="[]">
          <ymap-marker
            v-for="location in markers"
            :key="location.id"
            :marker-id="location.id"
            v-bind="location" />
        </yandex-map>
      </div>
    </div>
  </app-page>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import TabsItem from "@/components/TabsItem.vue";

export default {
  created() {
    this.$store.commit('breadcrumbs/set', [
      { label: 'Главная', to: '/' },
      { label: 'Расположение', to: { name: 'location' } },
    ]);
  },
  data() {
    return {
      categoryIcon: {
        razv: "smile",
        school: "edu",
        sport: "sport",
        det: "horse",
        health: "health",
        market: "market",
        bus: "bus",
        home: "home",
      },
      tabValue: "all",
      tabs: [
        {
          name: "all",
          label: "Все",
          icon: "location",
          fill: "#4C7D86",
        },
        {
          name: "razv",
          label: "Развлечения",
          icon: "smile",
          fill: "#4C7D86",
        },
        {
          name: "school",
          label: "Школы",
          icon: "edu",
          fill: "#4C7D86",
        },
        {
          name: "sport",
          label: "Спорт",
          icon: "sport",
          fill: "#4C7D86",
        },
        {
          name: "det",
          label: "Детские сады",
          icon: "horse",
          fill: "#4C7D86",
        },
        {
          name: "health",
          label: "Здоровье",
          icon: "health",
          fill: "#4C7D86",
        },
        {
          name: "market",
          label: "Магазины",
          icon: "market",
          fill: "#4C7D86",
        },
        {
          name: "bus",
          label: "Остановки",
          icon: "bus",
          fill: "#4C7D86",
        },
      ],
      points: getPoints(),
      homePoint: {
        id: 0,
        category: "home",
        coords: [54.714942, 55.999388],
        name: 'Жилой комплекс "НОВЫЙ ФАМИЛЬНЫЙ"',
      },
    };
  },
  computed: {
    markers() {
      return [this.homePoint, ...this.filteredPoints].map((point) => ({
        ...point,
        "balloon-template": this.balloonHtml(point.name),
        icon: this.makeIcon(point.category),
      }));
    },
    filteredPoints() {
      if (this.tabValue === "all") return this.points;
      return this.points.filter((point) => point.category === this.tabValue);
    },
  },
  methods: {
    makeIcon(category) {
      if (category === "home") {
        return {
          layout: "default#image",
          imageHref: "/markers/home.png",
          imageSize: [64, 64],
        };
      }

      return {
        layout: "default#image",
        imageHref: "/markers/" + this.categoryIcon[category] + ".svg",
        imageSize: [36, 36],
      };
    },
    balloonHtml(name) {
      return `
        <p>${name}</p>
      `;
    },
  },
  components: {
    TabsItem,
    Breadcrumbs
},
};

function getPoints() {
  let id = 0;

  function setId() {
    return ++id;
  }

  return [
    {
      id: setId(),
      category: "health",
      coords: [54.718672, 56.002777],
      name: "Детская поликлиника № 3",
    },
    {
      id: setId(),
      category: "health",
      coords: [54.722006, 55.993457],
      name: "Поликлиника № 48",
    },
    {
      id: setId(),
      category: "health",
      coords: [54.711369, 55.990595],
      name: "Поликлиника № 1",
    },
    {
      id: setId(),
      category: "health",
      coords: [54.711657, 56.005132],
      name: "Республиканская детская клиническая больница, Консультативно-диагностическая поликлиника",
    },
    {
      id: setId(),
      category: "health",
      coords: [54.710622, 56.003309],
      name: "Республиканский кардиологический центр, Консультативно-диагностическая поликлиника",
    },
    {
      id: setId(),
      category: "health",
      coords: [54.708544, 56.000982],
      name: "КБСМП поликлиническое отделение №1",
    },
    {
      id: setId(),
      category: "health",
      coords: [54.715601, 55.99789],
      name: 'Медцентр, медицинская лаборатория "Медси-Промедицина"',
    },
    {
      id: setId(),
      category: "health",
      coords: [54.713562, 56.000575],
      name: "Клиника современной флебологии",
    },
    {
      id: setId(),
      category: "health",
      coords: [54.713866, 56.00107],
      name: "Стоматология доктора Томилиной",
    },
    {
      id: setId(),
      category: "health",
      coords: [54.716696, 55.999323],
      name: "32 Карата, Стоматологическая клиника",
    },
    {
      id: setId(),
      category: "health",
      coords: [54.713462, 56.001326],
      name: 'Медицинская реабилитация, медцентр, клиника "Вэлм"',
    },
    {
      id: setId(),
      category: "health",
      coords: [54.715354, 56.00348],
      name: "Томоград, диагностический центр",
    },
    {
      id: setId(),
      category: "school",
      coords: [54.719017, 56.000859],
      name: "Школа № 110",
    },
    {
      id: setId(),
      category: "school",
      coords: [54.712982, 56.003164],
      name: "Республиканская художественная гимназия-интернат имени К. А. Давлеткильдеева",
    },
    {
      id: setId(),
      category: "school",
      coords: [54.718010, 55.993683],
      name: "Уфимская школа-интернат № 28",
    },
    {
      id: setId(),
      category: "school",
      coords: [54.715687, 56.008059],
      name: "Частная школа 3000",
    },
    {
      id: setId(),
      category: "school",
      coords: [54.719989, 56.012294],
      name: "Гимназия № 16",
    },
    {
      id: setId(),
      category: "det",
      coords: [54.71478, 55.997521],
      name: "Детский сад № 235",
    },
    {
      id: setId(),
      category: "det",
      coords: [54.709762, 55.994312],
      name: "Детский сад № 53",
    },
    {
      id: setId(),
      category: "det",
      coords: [54.70911, 55.996646],
      name: "Детский сад № 3",
    },
    {
      id: setId(),
      category: "det",
      coords: [54.717884, 56.00011],
      name: "Детский сад № 244",
    },
    {
      id: setId(),
      category: "det",
      coords: [54.710589, 55.992447],
      name: 'Детский сад "Радуга Детства"',
    },
    {
      id: setId(),
      category: "det",
      coords: [54.716324, 55.999997],
      name: 'Детский сад "Baby boss"',
    },
    {
      id: setId(),
      category: "det",
      coords: [54.716324, 55.999997],
      name: 'Центр развития ребёнка, детский сад "Лисенок"',
    },
    {
      id: setId(),
      category: "market",
      coords: [54.715381, 55.998026],
      name: '"Байрам", Магазин продуктов ',
    },
    {
      id: setId(),
      category: "market",
      coords: [54.713326, 55.992771],
      name: "Магнит Экстра, продуктовый гипермаркет",
    },
    {
      id: setId(),
      category: "market",
      coords: [54.716656, 56.003305],
      name: "Магнит, супермаркет",
    },
    {
      id: setId(),
      category: "market",
      coords: [54.711807, 55.997842],
      name: "Магнит, супермаркет",
    },
    {
      id: setId(),
      category: "market",
      coords: [54.713463, 55.995905],
      name: "ВкусВилл, супермаркет",
    },
    {
      id: setId(),
      category: "market",
      coords: [54.713621, 56.000329],
      name: "Eight & Eleven, Магазин продуктов",
    },



    {
      id: setId(),
      category: "sport",
      coords: [54.713693, 56.000016],
      name: '"Академия ММА", спортивный клуб',
    },
    {
      id: setId(),
      category: "sport",
      coords: [54.713679, 55.993016],
      name: "МетроFitness, фитнес-клуб ",
    },
    {
      id: setId(),
      category: "sport",
      coords: [54.716976, 56.008443],
      name: "Фитнес Арена 3000, фитнес-клуб",
    },
    {
      id: setId(),
      category: "sport",
      coords: [54.716344, 56.00743],
      name: "Юпилатес, студия пилатеса",
    },
    {
      id: setId(),
      category: "sport",
      coords: [54.717409,56.007042],
      name: "Mass gym Fitness, фитнес-клуб",
    },


    {
      id: setId(),
      category: "razv",
      coords: [54.720461,56.001556],
      name: "Аркада, Торгово-развлекательный центр",
    },
    {
      id: setId(),
      category: "razv",
      coords: [54.713591,55.993762],
      name: "Иремель, Торгово-развлекательный центр",
    },
    {
      id: setId(),
      category: "bus",
      coords: [54.719394,56.008072],
      name: "УКРТБ, остановка общественного транспорта",
    },
    {
      id: setId(),
      category: "bus",
      coords: [54.714167,55.999439],
      name: "Бакалинская улица, остановка общественного транспорта",
    },
    {
      id: setId(),
      category: "razv",
      coords: [54.713412,55.994182],
      name: "Мегаполис, кинотеатр, боулинг-клуб",
    },
    {
      id: setId(),
      category: "razv",
      coords: [54.717026,55.984934],
      name: "Ultra Cinema, кинотеатр",
    },

    {
      id: setId(),
      category: "razv",
      coords: [54.713735,55.994485],
      name: "Максимилианс, ресторан, бар, паб, ночной клуб",
    },
    {
      id: setId(),
      category: "razv",
      coords: [54.715542,55.995269],
      name: "Своя компания, ресторан, кафе",
    },
    {
      id: setId(),
      category: "razv",
      coords: [54.714221,55.996492],
      name: "Балкан гриль, ресторан",
    },
    {
      id: setId(),
      category: "razv",
      coords: [54.714688,56.001411],
      name: "Эврен, кафе",
    },
    {
      id: setId(),
      category: "razv",
      coords: [54.715282,56.001008],
      name: "Трактир Изба, кафе, ресторан",
    },
    {
      id: setId(),
      category: "razv",
      coords: [54.713847,55.995922],
      name: "Брауни, пекарня, кофейня, кондитерская",
    },
    {
      id: setId(),
      category: "razv",
      coords: [54.713400,55.995800],
      name: "Бургер Кинг, быстрое питание, ресторан, кафе",
    },
    {
      id: setId(),
      category: "razv",
      coords: [54.714223,55.995523],
      name: "Сказка Востока, кафе",
    },
    {
      id: setId(),
      category: "razv",
      coords: [54.716499,56.007485],
      name: "Баракат, кафе",
    },

    // {
    //   id: setId(),
    //   category: "razv",
    //   coords: [54.713371,55.995162],
    //   name: "Сбербанк",
    // },
    // {
    //   id: setId(),
    //   category: "razv",
    //   coords: [54.712847,55.992761],
    //   name: "ВБТ банк",
    // },
    // {
    //   id: setId(),
    //   category: "razv",
    //   coords: [54.711903,55.992220],
    //   name: "Хоум Кредит банк, отделение",
    // },
    // {
    //   id: setId(),
    //   category: "razv",
    //   coords: [54.713107,55.993763],
    //   name: "Тинькофф, банкомат",
    // },
    // {
    //   id: setId(),
    //   category: "razv",
    //   coords: [54.713465,55.993591],
    //   name: "Уральский банк реконструкции и развития, банк",
    // },
    // {
    //   id: setId(),
    //   category: "razv",
    //   coords: [54.712860,55.993096],
    //   name: "Альфа-Банк, банкомат",
    // },
    // {
    //   id: setId(),
    //   category: "razv",
    //   coords: [54.714405,56.000631],
    //   name: "Альфа-Банк, банк",
    // },
    // {
    //   id: setId(),
    //   category: "razv",
    //   coords: [54.714065,55.997615],
    //   name: "Совкомбанк, банкточка банковского обслуживания",
    // },


  ];
}
</script>

<style></style>

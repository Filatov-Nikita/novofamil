<template>
  <app-page class="tw-pb-40 tw-relative decor">
    <div class="wrapper">
      <div class="developer xl-separator tw-relative">
        <div>
          <Breadcrumbs class="tw-mb-30" />
          <h1 class="h1 tw-max-w-[288px] tw-normal-case tw-mb-20 md:tw-max-w-[700px] xl:tw-col-span-1 xl:tw-mb-30 header">
            Застройщик <br class="tw-hidden md:tw-block" /> «Агидель-ИнвестСтрой»
          </h1>
        </div>
        <p class="title tw-text-white tw-uppercase tw-font-nord tw-text-md tw-leading-120 tw-mb-20 tw-max-w-[343px] md:tw-max-w-[700px] md:tw-text-[31px] md:tw-font-extrabold">
          Cпециализированный застройщик «Агидель-ИнвестСтрой» — застройщик, которому доверяют
        </p>
        <div class="tw-space-y-20 tw-mb-30 tw-text-third content" v-html="content"></div>
        <div class="features">
          <div class="tw-flex tw-flex-wrap -tw-ml-40 tw-mb-30 -tw-mt-20 xl:tw-mb-[50px] 2xl:tw-mb-30">
            <div class="tw-pt-20 tw-pl-40 tw-w-1/2 md:tw-w-auto md:tw-basis-[150px]">
              <p class="tw-text-lg tw-leading-100 tw-mb-10 tw-text-white tw-uppercase tw-font-nord md:tw-text-xl10 xl:tw-text-xl 2xl:tw-text-xl10">21+</p>
              <p class="tw-leading-120 tw-text-third">лет на рынке <br/> недвижимости</p>
            </div>
            <div class="tw-pt-20 tw-pl-40 tw-w-1/2 md:tw-w-auto md:tw-basis-[150px]">
              <p class="tw-text-lg tw-leading-100 tw-mb-10 tw-text-white tw-uppercase tw-font-nord md:tw-text-xl10 xl:tw-text-xl 2xl:tw-text-xl10">25</p>
              <p class="tw-leading-120 tw-text-third">реализованных <br/> домов</p>
            </div>
            <div class="tw-pt-20 tw-pl-40 tw-w-1/2 md:tw-w-auto md:tw-basis-[150px]">
              <p class="tw-text-lg tw-leading-100 tw-mb-10 tw-text-white tw-uppercase tw-font-nord md:tw-text-xl10 xl:tw-text-xl 2xl:tw-text-xl10">15</p>
              <p class="tw-leading-120 tw-text-third">домов сданы <br/> раньше срока</p>
            </div>
            <div class="tw-pt-20 tw-pl-40 tw-w-1/2 md:tw-w-auto">
              <p class="tw-text-lg tw-leading-100 tw-mb-10 tw-text-white tw-uppercase tw-font-nord md:tw-text-xl10 xl:tw-text-xl 2xl:tw-text-xl10">4 022</p>
              <p class="tw-leading-120 tw-text-third">квартир</p>
            </div>
          </div>
          <!-- <div>
            <AppLink external native target="_blank" :to="$store.state.homeSite + '/page-o_kompanii.php'">
              О застройщике
            </AppLink>
          </div> -->
        </div>
      </div>
    </div>
  </app-page>
</template>

<script>
export default {
  created() {
    this.$store.commit('breadcrumbs/set', [
      { label: 'Главная', to: '/' },
      { label: 'Застройщик', to: { name: 'developer' } },
    ]);
  },
  data() {
      return {
        content: `
          <p>
            Более 20 лет имя компании «Агидель-ИнвестСтрой» ассоциируется у жителей г. Уфы со стабильностью
            и гарантией качества. Мы привлекаем к работе лучших специалистов и используем самые последние инженерные решения, позволяющие использовать с пользой каждый квадратный метр квартиры. Тандем
            с генеральным подрядчиком ООО «Уфастроймонтаж» обеспечивает высокое качество работ и применение современных материалов. Поэтому неудивительно, что каждый год спрос на наши квартиры только растет.
          </p>
          <p>
            Основная цель компании - обеспечить население качественным жильем, поэтому мы предлагаем квартиры комфорт-класса. На сегодняшний день Специализированный застройщик «Агидель-ИнвестСтрой» ведет строительство и разрабатывает проекты новых жилых комплексов в микрорайонах Дёма, Черниковка, Инорс, Зелёная Роща, а теперь и в историческом центре Уфы.
            Все объекты спроектированы с учетом последних инноваций в сфере строительства и имеют благоустроенную придомовую территорию с современными детскими площадками
          </p>
      `
    };
  },
}
</script>

<style scoped>
.developer {
  display: grid;
  grid-template-columns: 100%;
  column-gap: 80px;
}

@screen xl {
  .developer {
    grid-template-columns: 720px 150px;
    column-gap: 80px;
  }

  .features {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
  }

  .title, .content {
    grid-column: 1 / 2;
  }

  .decor {
    background-image: url(@/assets/images/decor-1.png);
    background-repeat: no-repeat;
    background-size: 760px;
    background-position-y: center;
    background-position-x: -300px;
  }
}

@screen 2xl {
  .features {
    grid-column: 2 / 3;
    grid-row: auto;
  }

  .title, .content {
    grid-column: 2 / 3;
  }

  .developer {
    grid-template-columns: 50% 50%;
    column-gap: 0;
  }

  .header {
    grid-row: 1 / 6;
  }

  .decor {
    background-size: 1402px;
    background-position-x: -479px;
    background-position-y: center;
  }
}
</style>

<template>
  <app-page class="xl-separator tw-relative tw-pt-0 ">
    <div class="wrapper tw-h-full">
      <div class="grid xl:tw-h-full">
        <div class="tw-overflow-hidden xl:tw-border-r xl:tw-border-r-base-500 tw-pt-32 xl:tw-pr-[78px] xl:tw-pt-[84px] 2xl:tw-pt-[100px] tw-relative">
          <Breadcrumbs class="tw-mb-30 xl:tw-absolute xl:tw-top-30 xl:tw-left-0" />
          <h1 class="h1 tw-mb-20 md:tw-mb-30 2xl:tw-mb-40">Условия покупки</h1>
          <div
            class="tw-flex tw-pb-20 tw-overflow-x-auto tw-mb-30 md:tw-mb-10 app-scroll-x xl:tw-flex-wrap xl:-tw-mx-10 xl:-tw-mt-10"
          >
            <TabsItem
              class="tw-shrink-0 tw-mr-20 last:tw-mr-0 xl:tw-mx-10 xl:tw-mt-10"
              v-for="(tab, key) in tabs"
              :key="tab.label"
              :class="[ tab.class ]"
              :active="tabValue === key"
              v-bind="tab"
              @click="tabValue = tab.icon"
            />
          </div>
        </div>
        <TabsContent v-model="tabValue" class=" xl:tw-justify-self-center xl:tw-pt-[84px] 2xl:tw-pt-[100px] tw-mb-40 xl:tw-pl-20 2xl:tw-pl-[60px]">
          <TabsContentItem
            v-for="(section, key) in content"
            :key="key"
            :name="key"
          >
            <section>
              <h2 class="tw-text-[32px] tw-text-white tw-uppercase tw-font-nord tw-mb-20 2xl:tw-text-lg">
                {{ tabs[key].label }}
              </h2>
              <p class="tw-mb-20 2xl:tw-mb-30 tw-text-white" v-if="key === 'tradein'" v-html="tradeinTitle"></p>
              <ul class="2xl:tw-flex 2xl:tw-flex-wrap 2xl:-tw-ml-48 -tw-mt-10">
                <li
                  class="tw-text-sm tw-text-white tw-flex list-marker 2xl:tw-w-1/2 2xl:tw-pl-48 tw-pt-10"
                  v-for="(li, i) in content[key]"
                  :key="i"
                  :style="{ '--color': tabs[key].fill }"
                >
                    {{ li.text }}
                  </li>
              </ul>
              <p v-if="key === 'tradein'" class="tw-text-xs tw-text-third tw-mt-30">
                * Подробнее о приобретении квартир по программе трейд-ин уточняйте в офисе продаж
              </p>
              <AppButton
                v-if="tabValue === 'calc'"
                class="tw-mt-30 tw-w-full"
                :to="{ name: 'credit-calc' }"
                @click="$router.push({ name: 'credit-calc' })"
              >
                Ипотечный калькулятор
              </AppButton>
            </section>
          </TabsContentItem>
        </TabsContent>
      </div>
    </div>
  </app-page>
</template>

<script>
import TabsItem from '@/components/TabsItem.vue';

export default {
  created() {
    this.$store.commit('breadcrumbs/set', [
      { label: 'Главная', to: '/' },
      { label: 'Условия покупки', to: { name: 'purchase' } },
    ])
  },
  data() {
    return {
      tabValue: 'calc',
      tabs: {
        calc: {
          label: 'Ипотека',
          icon: 'calc',
          fill: '#3AB2ED',
          class: '2xl:-tw-order-4'
        },
        bank: {
          label: 'Рассрочка',
          icon: 'bank',
          fill: '#9BA5B0',
          class: ''
        },
        rub: {
          label: 'Наличный расчёт',
          icon: 'rub',
          fill: '#FFBC6B',
          class: '2xl:-tw-order-3'
        },
        mat: {
          label: 'Материнский капитал',
          icon: 'mat',
          fill: '#FE8DEE',
          class: ''
        },
        tradein: {
          label: 'Трейд-Ин',
          icon: 'tradein',
          fill: '#FBB03B',
          class: ''
        },
      },
      content: {
        calc: [
          {
            text: 'Подбор квартиры (с менеджером в офисе продаж)',
          },
          {
            text: 'Согласование порядка расчетов и бронирование квартиры cрок бронирования — не более двух недель)',
          },
          {
            text: 'Подача в банк заявления на предоставление кредита',
          },
          {
            text: 'Подписание кредитного договора',
          },
          {
            text: 'Подписание договора долевого участия и регистрация его в Росреестре с сопровождением представителя застройщика',
          },
          {
            text: 'Открытие эскроу счета в банке (на этом счете ваши средства хранятся до сдачи дома и только затем перечисляются застройщику)',
          },
          {
            text: 'Передача зарегистрированного договора в банк для перечисления денежных средств',
          },
          {
            text: 'Ожидание ввода дома в эксплуатацию',
          },
        ],
        bank: [
          {
            text: 'Подбор квартиры (с менеджером в офисе продаж)',
          },
          {
            text: 'Согласование порядка расчетов и бронирование квартиры (срок бронирования — не более двух недель)',
          },
          {
            text: 'Согласование графика платежей по рассрочке (рассрочка беспроцентная, предоставляется до завершения строительства при обязательном первоначальном взносе 50%)',
          },
          {
            text: 'Подписание договора долевого участия и регистрация его в Росреестре с сопровождением представителя застройщика',
          },
          {
            text: 'Открытие эскроу счета в банке (на этом счете ваши средства хранятся до сдачи дома и только затем перечисляются застройщику)',
          },
          {
            text: 'Перечисление денежных средств на эскроу-счет в соответствии с графиком',
          },
          {
            text: 'Ожидание ввода дома в эксплуатацию',
          },
        ],
        rub: [
          {
            text: 'Подбор квартиры (с менеджером в офисе продаж)',
          },
          {
            text: 'Согласование порядка расчетов и бронирование квартиры (срок бронирования — не более двух недель)',
          },
          {
            text: 'Подписание договора долевого участия и регистрация его в Росреестре с сопровождением представителя застройщика',
          },
          {
            text: 'Открытие эскроу счета в банке (на этом счете ваши средства хранятся до сдачи дома и только затем перечисляются застройщику)',
          },
          {
            text: 'Перечисление денежных средств на эскроу-счет',
          },
          {
            text: 'Ожидание ввода дома в эксплуатацию',
          },
        ],
        mat: [
          {
            text: 'Подбор квартиры (с менеджером в офисе продаж)',
          },
          {
            text: 'Предоставление необходимого пакета документов: паспорт, государственный сертификат на материнский (семейный) капитал, справка об остатке средств материнского капитала',
          },
          {
            text: 'Согласование порядка расчетов и бронирование квартиры (срок бронирования — не более двух недель)',
          },
          {
            text: 'Подписание договора долевого участия и регистрация его в Росреестре с сопровождением представителя застройщика',
          },
          {
            text: 'Открытие эскроу счета в банке (на этом счете ваши средства хранятся до сдачи дома и только затем перечисляются застройщику)',
          },
          {
            text: 'Предоставление в территориальный орган Пенсионного фонда пакета документов для перечисления средств материнского капитала на эскроу-счет застройщика',
          },
          {
            text: 'Ожидание ввода дома в эксплуатацию',
          },
        ],
        tradein: [
          {
            text: 'Выбираете квартиру',
          },
          {
            text: 'Готовите к продаже старую квартиру вместе с менеджером застройщика по trade-in (выезд, ознакомление с документами, оценка, съемка)',
          },
          {
            text: 'Заключаете договор на реализацию вашей квартиры',
          },
          {
            text: 'Бронируете новую квартиру по фиксированной стоимости (на срок не более 2 месяцев)',
          },
          {
            text: 'Продаете старую квартиру силами наших менеджеров',
          },
          {
            text: 'Оформляете сделки по продаже-покупке',
          },
        ],
      },
      tradeinTitle: 'Если для покупки квартиры вам необходимо продать имеющееся жилье, вы можете воспользоваться услугой Trade-in. Сотрудники отдела продаж сделают все за вас: проведут оценку рыночной стоимости, проверят юридическую чистоту, подадут объявление о продаже вашей старой квартиры, проведут сделку. И все это бесплатно<sup>*</sup>'
    };
  },
  components: {
    TabsItem,
  },
};
</script>
<style scoped lang="scss">

.grid {
    @apply tw-grid xl:tw-grid-cols-2 2xl:tw-grid-cols-[minmax(0px,_795px)_1fr]
  }
</style>

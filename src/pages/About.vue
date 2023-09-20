<template>
  <app-page paddingClasses="tw-pt-30 lg:tw-pt-0">
    <div class="grid lg:tw-border-b lg:tw-border-solid lg:tw-border-base-500 tw-mb-48 2xl:tw-mb-[96px]">
      <div class="wrapper">
        <div class="md:tw-mt-0 lg:tw-flex">
          <div class="lg:tw-w-1/2 lg:tw-py-[84px] 2xl:tw-py-[100px]">
            <h1 class="h1 tw-text-[32px] tw-text-white tw-font-nord tw-mb-30 2xl:tw-text-xl">
              О проекте
            </h1>
          </div>
          <div class="lg:tw-w-1/2 lg:tw-pl-[46px] lg:tw-pr-40 lg:tw-py-[84px] 2xl:tw-pl-[155px] 2xl:tw-pt-[100px] lg:tw-border-l lg:tw-border-base-500 lg:tw-border-solid">
            <div class="tw-max-w-[343px] md:tw-max-w-[455px] 2xl:tw-max-w-[600px]">
              <p class="tw-text-[20px] lg:tw-text-md tw-text-white tw-font-nord tw-leading-120 tw-mb-20 2xl:tw-text-[32px]">
                Жилой комплекс “Новый Фамильный”&nbsp;— новый уровень семейного комфорта и безопасности в&nbsp;Зелёной&nbsp;роще
              </p>
              <p class="tw-text-third tw-mb-32 2xl:tw-mb-48 tw-max-w-[343px] md:tw-max-w-[455px] 2xl:tw-max-w-[550px]">
                все достижения современного домостроения и принципов комфортного проживания воплощены в жилом комплексе «Новый Фамильный»
              </p>
              <div class="tw-flex tw-flex-wrap tw-gap-x-20 tw-gap-y-24 lg:tw-gap-32 2xl:tw-gap-[86px]">
                <div class="tw-grow">
                  <p class="tw-text-[32px] tw-mb-4 2xl:tw-text-xl tw-font-nord tw-text-white">210</p>
                  <p class="tw-text-third">квартир</p>
                </div>
                <div class="tw-grow">
                  <p class="tw-text-[32px] tw-mb-4 2xl:tw-text-xl tw-font-nord tw-text-white">3</p>
                  <p class="tw-text-third">секции</p>
                </div>
                <div class="tw-grow">
                  <p class="tw-text-[32px] tw-mb-4 2xl:tw-text-xl tw-font-nord tw-text-white">1&nbsp;уровень</p>
                  <p class="tw-text-third">подземного паркнига</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tw-mb-32 md:tw-mb-48 2xl:tw-mb-[96px]">
      <div class="wrapper">
        <div class="cards">
          <article
            class="tw-w-full md:tw-w-1/2 lg:tw-w-1/3 tw-py-16 md:tw-px-10 md:tw-py-24"
            v-for="card, index in cards"
          >
            <div class="tw-mb-16">
              <span class="tw-inline-block tw-font-nord tw-align-middle tw-text-orange tw-mr-24 tw-text-md">
                (0{{ index + 1 }}—)
              </span>
              <router-link
                class="tw-inline-block tw-align-middle tw-uppercase tw-text-white tw-font-nord tw-text-md tw-leading-100"
                v-if="card.to" :to="card.to"
              >
                {{ card.name }}
              </router-link>
              <h2 v-else class="tw-inline-block tw-align-middle tw-uppercase tw-text-white tw-font-nord tw-text-md tw-leading-100">
                {{ card.name }}
              </h2>
            </div>
            <div class="tw-mb-24">
              <img class="tw-w-full" width="445" height="248" loading="lazy" :src="card.img" alt="">
            </div>
            <p class="tw-text-white" v-html="card.text"></p>
          </article>
          <article
            class="tw-w-full md:tw-w-1/2 lg:tw-w-1/3 tw-py-16 md:tw-px-10 md:tw-py-24"
          >
            <div class="tw-mb-16">
              <span class="tw-inline-block tw-font-nord tw-align-middle tw-text-orange tw-mr-24 tw-text-md">
                (05—)
              </span>
              <h2 class="tw-inline-block tw-align-middle tw-uppercase tw-text-white tw-font-nord tw-text-md tw-leading-100">
                Кладовые
              </h2>
            </div>
            <div class="tw-mb-24">
              <img class="tw-w-full" width="445" height="248" loading="lazy" src="@/assets/images/about/about-item.svg" alt="">
            </div>
            <p class="tw-text-white">
              <router-link class="tw-text-orange" to="/">Вместительные кладовые</router-link> — отличное решение для хранения сезонных вещей вне квартиры. Храните лыжи, санки, детские коляски, велосипеды и даже автомобильные шины на подземном этаже с доступом на лифте
            </p>
          </article>
          <article
            class="tw-w-full md:tw-w-1/2 lg:tw-w-1/3 tw-py-16 md:tw-px-10 md:tw-py-24"
          >
            <div class="tw-mb-16">
              <span class="tw-inline-block tw-font-nord tw-align-middle tw-text-orange tw-mr-24 tw-text-md">
                (06—)
              </span>
              <h2 class="tw-inline-block tw-align-middle tw-uppercase tw-text-white tw-font-nord tw-text-md tw-leading-100">
                Инженерия
              </h2>
            </div>
            <div class="tw-mb-24">
              <img class="tw-w-full" width="445" height="248" loading="lazy" src="@/assets/images/about/about-item.svg" alt="">
            </div>
            <ul class="tw-space-y-16 tw-pr-18">
              <li
                class="tw-w-full"
                style="--color: #FA864B"
                v-for="(item, i) in items"
                :key="i"
              >
                <span class="list-marker tw-flex tw-flex-nowrap tw-shrink-0">
                  <span class="tw-basis-full tw-text-white" v-html="item"></span>
                </span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
    <FormCallBack />
  </app-page>
</template>

<script>
import FormCallBack from '@/components/FormCallBack.vue';

export default {
  data() {
    return {
      cards: [
        {
          to: { name: 'location' },
          name: 'Расположение',
          img: require('@/assets/images/about/about-item.svg'),
          text: 'Жилой комплекс расположен на пересечении улиц Менделеева и Акназарова. Эта локация - удивительное сочетание всех преимуществ Зелёной рощи и близости необходимой инфраструктуры. «Новый Фамильный» интегрирован в сформированный благоустроенный жилой квартал и это делает его еще более привлекательным'
        },
        {
          name: 'Территория',
          img: require('@/assets/images/about/about-item.svg'),
          text: 'Территория комплекса полностью закрыта от посторонних. Это настоящий двор без машин, где дети гуляют в полной безопасности. Дворовое пространство имеет продуманное благоустройство с площадками для активных и спокойных игр, отдельными локациями для малышей и более взрослых детей, а также спортивное ядро.'
        },
        {
          name: 'Подъезды',
          img: require('@/assets/images/about/about-item.svg'),
          text: '«Новый Фамильный» встречает жильцов теплым светом прозрачных входных групп. Такой принцип оформления подъездных холлов дает более высокие характеристики безопасности и возможность видеть с улицы внутреннее пространство холла. Отделка подъездных холлов выполнена по авторскому дизайну с применением качественных и эффектных материалов. В каждой секции предусмотрено 2 скоростных бесшумных лифта.'
        },
        {
          name: 'Квартиры',
          img: require('@/assets/images/about/about-item.svg'),
          text: '«Новый Фамильный» - это коллекция квартир для больших и не очень больших семей. Здесь наши архитекторы реализовали  принципы умного зонирования жилых и вспомогательных пространств. Это позволило сделать каждую квартиру максимально эргономичной, эффективной и комфортной вне зависимости от ее площади.<br><br>Количество уникальных планировочных решений также привлекает к себе внимание: более 35 вариантов планировок под любой состав семьи и их требования доступны для будущих жителей «Нового Фамильного»'
        },
      ],
      items: getItems()
    }
  },
  components: {
    FormCallBack
  }
}

function getItems() {
  return [
    'Технология строительства: монолит-каркас',
    'Вентилируемый фасад',
    'Энергоэффективное и звукоизолирующее остекление',
    'Звукоизоляция пола; разводка электрических сетей',
    'По 2 лифта в каждой секции — пассажирский и&nbsp;грузовой',
    'Отделка: черновая',
  ]
}
</script>

<style scoped>
  .cards {
    display: flex;
    flex-wrap: wrap;
    margin: -16px 0px;
  }

  .callback {
    margin-top: 60px;
  }

  @screen md {
    .cards {
      margin: -24px -10px;
    }
  }

  @screen 2xl {
    .cards {
      max-width: 1400px;
    }

    .engen {
      flex-basis: 818px;
      padding-right: 105px;
    }

    .callback {
      flex-grow: 1;
      flex-basis: 700px;
      margin-right: -150px;
      margin-top: 0;
    }
  }
</style>

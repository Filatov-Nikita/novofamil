<template>
  <div
    class="tw-p-16 tw-pb-32 md:tw-p-40 tw-bg-base-700 tw-flex tw-flex-wrap"
    :class="{
      'lg:tw-h-[378px] 2xl:tw-h-[710px]': !pageView,
      'tw-content-center bg-img': pageView,
    }"
  >
    <div v-if="!pageView" class="tw-basis-full lg:tw-grow-[2] tw-h-[270px] lg:tw-h-full lg:tw-basis-[400px] lg:tw-pr-20 tw-mb-32 lg:tw-mb-0">
      <yandex-map
        v-if="coords && address"
        class="tw-mix-blend-luminosity tw-relative tw-z-10 tw-h-full tw-w-full"
        :coords="coords"
        :zoom="17"
        :controls="[]">
        <ymap-marker
          marker-id="place"
          :coords="coords"
          :hint-content="`офис - ${address}`" />
      </yandex-map>
    </div>
    <div
      class="tw-flex tw-flex-col tw-justify-between tw-basis-full lg:tw-basis-[200px] lg:tw-pr-20 tw-relative"
      :class="{
        'lg:tw-grow tw-h-full': !pageView,
        'lg:tw-grow-[2] lg:tw-h-full': pageView
       }"
    >
      <p
        class="tw-text-[32px] tw-leading-120 tw-uppercase tw-font-nord tw-text-white 2xl:tw-text-xl tw-max-w-[254px]"
        :class="{ 'tw-mb-12': pageView }"
      >
        Заказать звонок
      </p>
      <p
        class="tw-text-third tw-text-base"
        :class="{ 'tw-mb-24': pageView }"
      >
        Оставьте заявку и&nbsp;наши менеджеры
        <br>
        свяжутся с&nbsp;вами в&nbsp;ближайшее время
      </p>
      <button
        v-if="pageView"
        class="tw-w-48 tw-h-48 tw-absolute tw-right-16 -tw-top-[50px] lg:tw-right-[64px] lg:tw-top-0 2xl:tw-right-[100px]"
        @click="$emit('close')"
      >
        <svg class=" tw-w-full tw-h-full tw-fill-base-500">
          <use xlink:href="/sprite.svg#close"></use>
        </svg>
      </button>
    </div>
    <div
      class="tw-basis-full lg:tw-grow lg:tw-basis-[200px]"
      :class="{
        'tw-h-full': !pageView,
        'lg:tw-h-full': pageView
      }"
    >
      <Form
        class="tw-flex tw-flex-col tw-justify-between"
        :class="{
          'tw-h-full': !pageView,
          'lg:tw-h-full': pageView
        }"
        v-slot="{ isSubmitting }" @submit="submit"
      >
        <div class="">
          <AppInput
            class="tw-w-full"
            rules="required"
            name="name"
            label="Ваше имя"
          />
          <AppInput
            class="tw-w-full"
            rules="required|cellphone"
            name="cellphone"
            label="Номер телефона"
            type="tel"
          />
        </div>
        <div>
          <FormSecretInput />
          <AppButton
            class="tw-w-full tw-mt-12 tw-mb-24"
            type="submit"
            :disabled="isSubmitting"
          >
            Отправить
          </AppButton>
          <AppCheckbox name="sogl" label="Условия" :value="false">
            <span class="tw-text-xs tw-leading-120">
              Я соглашаюсь на&nbsp;обработку моих персональных данных в&nbsp;соответствии
              с&nbsp;<AppLink native to="/policy.pdf" target="_blank">Политикой&nbsp;конфиденциальности</AppLink>
              и&nbsp;<AppLink native to="/sogl.pdf" target="_blank">Согласием на&nbsp;обработку персональных данных</AppLink>
            </span>
          </AppCheckbox>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import FormSecretInput from '@/components/FormSecretInput.vue';

export default {
  props: {
    pageView: {
      default: false,
      type: Boolean
    }
  },
  emits: ['close'],
  async created() {
    if (this.address === null) {
      await this.getAddress();
    }

    if (this.coords === null) {
      await this.getCoords();
    }
  },
  computed: {
    ...mapGetters(["address", "coords", "worktime"]),
  },
  methods: {
    ...mapActions(["getAddress", "getCoords", "getWorktime"]),
    async submit({ name, cellphone, sogl }) {
      await this.$store.dispatch('getFeedback', { name, cellphone, theme: 'Обратный звонок', sogl });
      this.$notify({ type: 'success', text: 'Ваша заявка успешно отправлена!' });
      this.$ym.fireCallbackGoal();
    }
  },
  components: {
    FormSecretInput,
  }
}
</script>
<style scoped>
@screen lg {
  .bg-img {
    background-image: url('@/assets/images/decor-key2.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>

<template>
  <div class="tw-p-16 tw-pb-32 md:tw-p-40 tw-bg-base-700 tw-flex tw-flex-wrap lg:tw-h-[378px] 2xl:tw-h-[710px]">
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
      class="tw-h-full tw-flex tw-flex-col tw-justify-between tw-basis-full lg:tw-basis-[200px] lg:tw-pr-20"
      :class="{
        'lg:tw-grow': !pageView,
        'lg:tw-grow-[2]': pageView
       }"
    >
      <p class="tw-text-[32px] tw-leading-120 tw-uppercase tw-font-nord tw-text-white 2xl:tw-text-xl tw-max-w-[254px]">
        Заказать звонок
      </p>
      <p class="tw-text-third tw-text-base">
        Оставьте заявку и&nbsp;наши менеджеры
        <br>
        свяжутся с&nbsp;вами в&nbsp;ближайшее время
      </p>
    </div>
    <div class="tw-h-full  tw-basis-full lg:tw-grow lg:tw-basis-[200px]">
      <Form class="tw-h-full tw-flex tw-flex-col tw-justify-between" v-slot="{ isSubmitting }" @submit="submit">
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
          <AppButton
            class="tw-w-full tw-mb-24"
            type="submit"
            :disabled="isSubmitting"
          >
            Отправить
          </AppButton>
          <AppCheckbox class="" name="agreement" label="Условия" rules="required" :value="true">
            Я согласен с <AppLink native to="/policy.pdf" target="_blank">условиями передачи информации</AppLink>
          </AppCheckbox>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    pageView: {
      default: false,
      type: Boolean
    }
  },
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
    async submit({ name, cellphone }) {
      await this.$store.dispatch('getFeedback', { name, cellphone, theme: 'Обратный звонок' });
      this.$notify({ type: 'success', text: 'Ваша заявка успешно отправлена!' });
    }
  }
}
</script>
<style scoped>
</style>

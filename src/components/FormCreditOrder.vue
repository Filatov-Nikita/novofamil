<template>
  <div class="tw-p-16 tw-pb-32 md:tw-p-40 tw-bg-base-700 tw-flex tw-flex-wrap tw-content-center bg-img">
    <div class="tw-flex tw-flex-col tw-justify-between tw-basis-full lg:tw-basis-[200px] lg:tw-pr-20 tw-relative lg:tw-grow-[2] lg:tw-h-full">
      <p class="tw-text-[32px] tw-leading-120 tw-uppercase tw-font-nord tw-text-white 2xl:tw-text-xl tw-max-w-[254px] tw-mb-12">
        Заявка<br>на ипотеку
      </p>
      <p class="tw-text-third tw-text-base tw-mb-24">
        Расчет ипотеки является предварительным,
        <br>
        не является публичной офертой
      </p>
      <button
        class="tw-w-48 tw-h-48 tw-absolute tw-right-16 -tw-top-[50px] lg:tw-right-[64px] lg:tw-top-0 2xl:tw-right-[100px]"
        @click="$emit('close')"
      >
        <svg class=" tw-w-full tw-h-full tw-fill-base-500">
          <use xlink:href="/sprite.svg#close"></use>
        </svg>
      </button>
    </div>
    <div class="tw-basis-full lg:tw-grow lg:tw-basis-[200px] lg:tw-h-full">
      <Form
        class="tw-flex tw-flex-col tw-justify-between lg:tw-h-full"
        v-slot="{ isSubmitting }" @submit="submit"
      >
        <div>
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
export default {
  props: {
    creditSum: {
      required: true,
      type: Number,
    },
  },
  emits: ['close'],
  methods: {
    async submit({ name, cellphone }) {
      const theme = `Заявка на ипотеку (сумма кредита ${this.creditSum} руб)`;
      await this.$store.dispatch("getFeedback", { name, cellphone, theme });
      this.$notify({
        type: "success",
        text: "Ваша заявка успешно отправлена!",
      });
    },
  },
};
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

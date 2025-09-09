<template>
  <app-page class=" tw-pt-0 documents">
    <div class="wrapper xl:tw-h-full ">
      <div class="grid xl:tw-h-full">
        <div class="xl:tw-border-r  xl:tw-border-r-base-500 tw-pt-[84px] 2xl:tw-pt-[100px] tw-relative">
          <Breadcrumbs class="tw-absolute tw-top-30 tw-left-0" />
          <h1 class="h1 tw-mb-32">Документы</h1>
        </div>

        <div class="tw-text-base tw-text-gray tw-leading-120 2xl:tw-text-md xl:tw-pt-[84px] 2xl:tw-pt-[100px] xl:tw-pl-[36px]">
          <p>
            Разрешительная документация <br />
            на сайте
            <a
              class="tw-text-blue tw-underline"
              :href="$store.state.domrf"
              target="_blank">
              наш.дом.рф
            </a>
          </p>
          <div class="tw-mt-24">
            <a class="tw-text-blue tw-underline" href="/policy.pdf" target="_blank">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </div>
  </app-page>
</template>
<script>
export default {
  async created() {
    this.$store.commit('breadcrumbs/set', [
        { label: 'Главная', to: '/' },
        { label: 'Документы', to: { name: 'documents' } },
    ]);
  },
}
</script>
<style lang="scss" scoped>
.documents {
  position: relative;
  &::after {

    content: '';
      display: block;
      background-image: url(@/assets/images/decor-key.svg);
      background-size: cover;
      position: absolute;
      right: 0px;
      bottom: 50%;
      transform:  translateY(50%);
      z-index: -1;
      width: 498px;
      height: 352px;
  }
}
@screen lg {
  .documents::after {
      width: 820px;
      height: 642px;
      bottom: -50px;
      transform:  translateY(0%);
  }
}
.grid {

    @apply tw-grid xl:tw-grid-cols-2  2xl:tw-grid-cols-[minmax(0px,_795px)_1fr]
  }
</style>

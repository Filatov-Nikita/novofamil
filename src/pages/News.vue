<template>
  <app-page class="tw-pt-0">
    <div class="wrapper tw-h-full">
      <div class=" grid tw-h-full">

        <div class="left app-scroll-y xl:tw-border-r xl:tw-border-r-base-500 tw-pt-32 xl:tw-pr-[78px] lg:tw-pt-[84px] 2xl:tw-pt-[100px] tw-relative tw-pb-40">
          <Breadcrumbs class="tw-mb-30 lg:tw-absolute lg:tw-top-20 lg:tw-left-0" />
          <h1 class="h1 tw-mb-24">Новости и акции</h1>
          <NewsList v-if="items" :items="items" />
          <div
            class="tw-text-center tw-pt-20"
            v-if="$store.getters['loaders/is']('get news')"
          >
            <Spinner class="tw-mx-auto" />
          </div>
        </div>
        <div v-if="$grid['xl']" class="right app-scroll-y tw-pt-20 tw-relative">
          <NewsShow
            v-if="detailed"
            :id="showedId.value"
            :content="detailed"
          />
          <div v-if="$store.getters['loaders/is']('news one')" class="tw-absolute tw-top-0">
            <Spinner size="120px" />
          </div>
        </div>

      </div>
      <div class="news">
        <DialogNewsShow v-if="!$grid['xl']" :content="detailed" />
      </div>
    </div>
  </app-page>
</template>

<script>
import NewsList from '@/components/NewsList.vue';
import DialogNewsShow from '@/components/DialogNewsShow.vue';
import NewsShow from '@/components/NewsShow.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

export default {
  provide() {
    return {
      showedId: this.showedId,
      closestIds: () => this.closestIds,
      show: (id) => {
        this.showedId.value = id;
        if(id) this.newsOne(id);
      },
      prev: () => {
        this.showedId.value = this.closestIds.prev;
        this.newsOne(this.showedId.value);
      },
      next: () => {
        this.showedId.value = this.closestIds.next;
        this.newsOne(this.showedId.value);
      }
    }
  },
  async created() {
    this.$store.commit('breadcrumbs/set', [
      { label: 'Главная', to: '/' },
      { label: 'Новости и акции', to: { name: 'news' } },
    ]);

    return this.getNews();
  },
  data() {
    return {
      showedId: {
        value: null
      },
      detailed: null,
      items: null
    }
  },
  methods: {
    async getNews() {
      this.$store.dispatch('loaders/start', 'get news');
      const items = await this.$store.dispatch('news/getNews');
      this.items = items.reverse();
      this.$store.dispatch('loaders/end', 'get news');
    },
    async newsOne(id) {
      this.$store.dispatch('loaders/start', 'news one');
      this.detailed = await this.$store.dispatch('news/newsOne', { id });
      this.$store.dispatch('loaders/end', 'news one');
    }
  },
  computed: {
    indexMap() {
      return this.items.reduce((acc, item, index) => {
        acc[item.id] = index;
        return acc;
      }, {})
    },
    closestIds() {
      if(!this.showedId.value) return {
        next: null,
        prev: null,
      };

      const curIndex = this.indexMap[this.showedId.value];
      const prevIndex =  Math.max(0, curIndex - 1);
      const nextIndex =  Math.min(this.items.length - 1, curIndex + 1);

      return {
        prev: prevIndex === curIndex ? null : this.items[prevIndex].id,
        next: nextIndex === curIndex ? null : this.items[nextIndex].id,
      };
    },
  },
  components: {
    NewsList,
    DialogNewsShow,
    NewsShow,
    Breadcrumbs
}
}
</script>

<style scoped>
@screen lg {
  .grid {
    @apply tw-grid tw-grid-cols-2;
  }

  .right {
    padding-left: 20px;
  }
}
@screen 2xl {
  .news {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .grid {
    @apply  tw-grid-cols-[minmax(0px,_795px)_1fr]
  }

  .left, .right {
    height: calc(100vh - 182px);
    overflow-x: hidden;
  }

  .right {
    padding-left: 80px;
  }
}
</style>

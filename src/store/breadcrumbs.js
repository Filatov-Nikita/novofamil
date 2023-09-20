export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    items(state) {
      return state.items;
    },
    current(state) {
      return state.items[state.items.length - 1];
    },
    prevs(state) {
      return state.items.slice(0, -1);
    }
  },
  mutations: {
    set(state, items) {
      state.items = [ ...items ];
    },
    append(state, item) {
      state.items.push(item);
    }
  },
}

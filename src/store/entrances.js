import * as EntrancesAPI from '@/api/entrances';

export default {
  namespaced: true,
  getters: {
    streetPositions() {
      return (entranceId) => {
        switch(entranceId) {
          case 1: return [ 'Двор', 'ул. Менделеева', 'ул. Акназарова', 'ул. Красноводская' ];
          case 2: return [ '', 'Двор', 'ул. Акназарова', 'ул. Красноводская' ];
          case 3: return [ '', 'Двор', 'ул. Акназарова', 'ул. Красноводская' ];
        }
      };
    }
  },
  actions: {
    async entrancesOne(_c, { id }) {
      const { data } = await EntrancesAPI.show(id);
      return data;
    }
  }
}

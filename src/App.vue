<script >
  import { store } from './store.js';
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue'
  import CardsTemplate from './components/CardsTemplate.vue'

  export default {
    components: {
      AppHeader,
      CardsTemplate,
    },
    data() {
      return {
        store
      };
    },
    methods: {
      getCardsFromApi() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then((response) => {
          store.cards = response.data;
          store.isLoading = false;
          // console.log(store.cards.data[0].card_images[0].image_url);
          console.log(store.cards.data);
        });
      }
    },
    mounted() {
      this.getCardsFromApi();
    }
  }
</script>

<template>
  <AppHeader></AppHeader>
  <main class="p-5">
      <CardsTemplate :cardsObject="store.cards.data"></CardsTemplate>
  </main>
</template>

<style scoped>
  main{
    background-color: #D48F37;
  }
</style>

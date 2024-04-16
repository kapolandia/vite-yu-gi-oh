<script >
  import { store } from './store.js';
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue'
  import CardsTemplate from './components/CardsTemplate.vue'
  import SearchCard from './components/SearchCard.vue'

  export default {
    components: {
      AppHeader,
      CardsTemplate,
      SearchCard,
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
      },
      searchCardsFiltered(queryParameter){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php',{
          params: {
            archetype: queryParameter
          }
        })
        .then((response) => {
          store.cards = [];
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
      <SearchCard @selected="searchCardsFiltered"></SearchCard>
      <CardsTemplate :cardsObject="store.cards.data"></CardsTemplate>
  </main>
</template>

<style scoped>
  main{
    background-color: #D48F37;
  }
</style>

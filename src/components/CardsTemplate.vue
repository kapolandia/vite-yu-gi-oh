<script>

    export default{
        name: "CardsTemplate",
        props: {
            cardsObject : Object
        },
    }

</script>

<template>
    <div class="container p-5 bg-white rounded">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" v-for="card, index in cardsObject" >
          <div class="card" style="background-color: #D48F37;min-height: 480px;">
            <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-white">{{card.name}}</h5>
              <p class="card-text text-white">{{ card.type }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<style>
</style>
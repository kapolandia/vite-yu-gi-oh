<script>
    import {store} from '../store.js';
    import axios from 'axios';

    export default{
        name: "SearchCard",
        data() {
            return {
                store,
                searchQuery: store.searchQuery
            };
        },
        methods: {
            emitSelectedValue() {
                this.$emit('selected', this.searchQuery);
            },
            getCardsOptions() {
                axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
                .then((response) => {
                    store.archetype = response.data;

                    console.log(store.archetype);
                });
            },
        },
        mounted(){
            this.getCardsOptions();
        }
    }
    

</script>

<template>
    <select class="container form-select form-select-sm" aria-label="Small select example" v-model="searchQuery" @change="emitSelectedValue">
        <option value="alien">Alien</option>
        <option v-for="option in store.archetype" :value=" option.archetype_name "> {{ option.archetype_name }}</option>
    </select>
</template>

<style>
</style>
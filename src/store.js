import { reactive } from "vue";

export const store = reactive({
    cards: [],
    archetype: [],
    count: 20,
    isLoading: true,
    searchQuery : 'Cerca un archetipo',
});
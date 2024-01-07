import {writable} from 'svelte/store'



export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Olá, sou Rodrigo Mota'
    },
    {
        id: 2,
        rating: 1,
        text: 'Olá, sou Miguel Bizzi'
    },
    {
        id: 3,
        rating: 7,
        text: 'Oh my god, Miguel Bizzi, is the lixous'
    }
])
import {writable} from 'svelte/store'



export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Feedback teste3'
    },
    {
        id: 2,
        rating: 1,
        text: 'Feedback teste2'
    },
    {
        id: 3,
        rating: 7,
        text: 'Feedback teste1'
    }
])
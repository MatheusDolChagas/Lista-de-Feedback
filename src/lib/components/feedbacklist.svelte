<script lang="ts">
	import { fade, scale } from 'svelte/transition'
	// import { onMount, onDestroy } from 'svelte';
	import { FeedbackStore } from '../../stores/stores';
	import Feedbackitem from '$lib/components/feedbackitem.svelte';
	//  let feedback: { id: number; rating: number; text: string }[] = [
	// 	{ id: 1, rating: 12, text: 'mota' }
	// ];

	// const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)

	// onMount(()=>{
	// 	console.log('montado');
	// })

	// onDestroy(()=>{
	// 	unsubscribe();
	// })
</script>

{#each $FeedbackStore as fb (fb.id)}
<div in:scale  out:fade="{{duration: 500}}" >
	<Feedbackitem item="{fb}" /> 
</div>
{/each}

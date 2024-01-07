<script lang="ts">
	import { FeedbackStore } from '../../stores/stores';
	import Card from './Card.svelte';
	import { type IFeedBackItem } from '$lib/dtos/IFeedBackItem';
	export let item: IFeedBackItem;

	const handleDelete = (itemId: number) => {
		FeedbackStore.update((currentFeedback) => {
			return currentFeedback.filter(item => item.id != itemId)
		});
	};
</script>

<Card>
	<div class="num_display">
		{item.rating}
	</div>
	<button
		class="close"
		on:click={() => {
			handleDelete(item.id);
		}}>X</button
	>
	<p class="text_display">
		{item.text}
	</p>
</Card>

<style>
	.num_display {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: -0.625rem;
		left: -0.625rem;
		width: 3rem;
		height: 3rem;
		background: #ff6a95;
		color: #fff;
		border: 1px #eee solid;
		border-radius: 50%;
		padding: 0.625rem;
		font-size: 1.2rem;
	}

	.close {
		position: absolute;
		top: 0.625rem;
		right: 1.3rem;
		cursor: pointer;
		border: none;
		background: none;
	}
</style>

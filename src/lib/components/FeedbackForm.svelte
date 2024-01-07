<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { FeedbackStore } from '../../stores/stores';
	import Card from './Card.svelte';
	import Buttons from './Buttons.svelte';
	import RatingSelect from './RatingSelect.svelte';

	let texto: string = '';
	let rating: number = 10;
	let btnDisabled: boolean = true;
	let minimo: number = 10;
	let msg_retorno: string = '';

	const handleInput = () => {
		if (texto.trim().length <= minimo) {
			btnDisabled = true;
			msg_retorno = `Preencha ao menos ${minimo} caracteres`;
		} else {
			btnDisabled = false;
			msg_retorno = ``;
		}
	};

	const handleSelect = (e: CustomEvent) => (rating = e.detail);

	const handleSubmit = () => {
		if (texto.trim().length > minimo) {
			const newFeedback = {
				id: uuidv4(),
				rating: +rating,
				text: texto
			};
			FeedbackStore.update((currentFeedback)=>{
				return [newFeedback, ...currentFeedback]
			})
		}
	};
</script>

<Card>
	<header>
		<h2>Como você nos avaliaria?</h2>
	</header>
	<form on:submit|preventDefault={handleSubmit}>
		<RatingSelect on:rating-select={handleSelect} />
		<div class="input-group">
			<input
				style="flex: 1; outline:none; border:none"
				type="text"
				on:input={handleInput}
				bind:value={texto}
				placeholder="Diga algo que faz você continuar voltando"
			/>
			<Buttons tipo={'submit'} desabilitado={btnDisabled}>Enviar</Buttons>
		</div>
		{#if msg_retorno}
			<div class="message">
				{msg_retorno}
			</div>
		{/if}
	</form>
</Card>

<style>
	.input-group {
		border: 1px #000 solid;
		display: flex;
		padding: 10px;
		gap: 10px;
		justify-content: space-between;
	}
	header {
		max-width: 400px;
		margin: auto;
	}
	h2 {
		text-align: center;
	}
	.message {
		font-size: 15px;
		text-align: center;
	}
</style>

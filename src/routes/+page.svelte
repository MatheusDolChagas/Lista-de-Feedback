<script lang="ts">
	import Feedbacklist from '$lib/components/feedbacklist.svelte';
	import FeedbackStats from '$lib/components/FeedbackStats.svelte';
	import FeedbackForm from '$lib/components/FeedbackForm.svelte';
</script>

<main class="container">
	<FeedbackForm  />
	<FeedbackStats  />
	<Feedbacklist  />
</main>

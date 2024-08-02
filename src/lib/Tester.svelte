<script>
//TODO implement component to allow for testing on dev branch, especially on mobile. To view data etc. Maybe react to a keystroke etc
	export let data;
</script>

<div class="tester">
	<p>{JSON.stringify(data)}</p>
</div>

<style>
	.tester {
		background: blue;
	}
</style>


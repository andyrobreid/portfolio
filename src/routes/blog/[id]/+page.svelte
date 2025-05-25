<script>
	import Tester from "$lib/Tester.svelte";
	import title from "$lib/title";
	export let data
	
	$title = data.name;

	//TODO html injection sanitise
</script>

<div>
{@html data.content}
</div>

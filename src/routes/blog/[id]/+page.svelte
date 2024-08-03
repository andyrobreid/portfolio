<script>
	import Tester from "$lib/Tester.svelte";
	import {marked} from "marked";
	import title from "$lib/title";
	export let data
	
	$title = data.name;

	//TODO html injection sanitise
</script>

<div>
{@html marked.parse(data.content)}
</div>

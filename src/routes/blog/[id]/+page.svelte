<script>
	import Tester from "$lib/Tester.svelte";
	import {marked} from "marked";
	import title from "$lib/title";
	export let data
	
	$title = data.path;

	//TODO html injection sanitise
</script>

<h1>Blog Title</h1>

<div>
{@html marked.parse(data.content)}
</div>

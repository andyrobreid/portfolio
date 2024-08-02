<script>
	import Tester from "$lib/Tester.svelte";
	import {marked} from "marked";
	export let data
	//TODO html injection sanitise
</script>

<Tester data={data}/>

<h1>Blog Title</h1>

<div>
{@html marked.parse(data.content)}
</div>

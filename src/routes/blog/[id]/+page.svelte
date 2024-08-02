<script>
	import Tester from "$lib/Tester.svelte";
	import marked from "marked";
	export let data
</script>

<Tester data={data}/>

<h1>Blog Title</h1>

<div>
{marked.parse(data.content)}
</div>

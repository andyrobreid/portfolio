<script>
    	import Tester from "$lib/Tester.svelte";
	import title from "$lib/title";
	import {GetPropsFromParam} from "$lib/blog";

	export let data;

	$title = 'Blogs'
	let first = GetPropsFromParam(1);
</script>

<Tester data={data}/>
{#each data.result.forEach((element) => GetPropsFromParam(element.id)) as post}
	<a href={`/blog/${post.id}`}><h3>{post.name}</h3></a>
{/each}

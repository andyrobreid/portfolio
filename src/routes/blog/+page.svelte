<script>
    	import Tester from "$lib/Tester.svelte";
	import title from "$lib/title";
	import {GetTitleFromParam} from "$lib/blog";

	export let data;

	$title = 'Blogs'
	let first = GetTitleFromParam(1)
</script>

<Tester data={first}/>
{#each data.result as post}
	<a href={`/blog/${post.id}`}><h3>{GetTitleFromParam(post.id)[1]}</h3></a>
{/each}

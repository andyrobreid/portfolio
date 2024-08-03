<script>
    	import Tester from "$lib/Tester.svelte";
	import title from "$lib/title";
	import {GetTitleFromParam} from "$lib/blog";

	export let data;

	$title = 'Blogs'

</script>

{#each data.result as post}
	<Tester data={post}/>
	<a href={`/blog/${post.id}`}><h3>{GetTitleFromParam(post.id)}</h3></a>
{/each}

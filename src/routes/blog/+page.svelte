<script>
    	import Tester from "$lib/Tester.svelte";
	import title from "$lib/title";
	export let data;

	$title = 'Blogs'
</script>

{#each data.result as post}
	<a href={`/blog/${post.id}`}><h3>{post.path}</h3></a>
{/each}

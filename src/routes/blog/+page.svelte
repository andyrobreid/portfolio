<script>
    	import Tester from "$lib/Tester.svelte";
	export let data;
</script>
<h1>Blog posts</h1>

{#each data.result as post}
	<a href={`/blog/${post.id}`}><h3>{post.path}</h3></a>
{/each}

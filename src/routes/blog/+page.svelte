<script>
	export let data;
	console.log(data);
</script>
<h1>Blog posts</h1>

{#each data as post}
	<a href={post.path}>{post.path}</a>
{/each}

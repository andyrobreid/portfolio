<script>
    	import Tester from "$lib/Tester";
	export let data;
</script>
<h1>Blog posts</h1>

<Tester data={data}/>

<p>{data}</p>

{#each data as post}
	<a href={post.path}>{post.path}</a>
{/each}

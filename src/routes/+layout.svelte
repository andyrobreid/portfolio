<script>
	import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import Title from "$lib/title";
</script>

<Header title={$Title}/>

<slot></slot>

<Footer/>
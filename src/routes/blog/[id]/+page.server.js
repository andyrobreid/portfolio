//TODO add load function to get markdown post
import files from "$lib/blog.js";

export async function load({ params }){
	return {
		id: params.id,
		path: files[parseInt(params.id)]
	}
}


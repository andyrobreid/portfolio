//TODO add load function to get markdown post
import {files} from "$lib/blog.js";

export async function load({ params }){
	let item = files[parseInt(params.id)]
	let response = await fetch("/"+item.path)
	console.log(response)
	return {
		id: item.id,
		path: item.path,
		content: response.text
	}
}


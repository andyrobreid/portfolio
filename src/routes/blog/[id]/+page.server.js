//TODO add load function to get markdown post
import {files} from "$lib/blog.js";

export async function load({ params }){
	const item = files[parseInt(params.id)]
	let response = await fetch("/1-Lets_Start.md")
	console.log(response)
	return {
		id: item.id,
		path: item.path,
		content: response.text
	}
}


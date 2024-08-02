//TODO add load function to get markdown post
import {files} from "$lib/blog.js";

export async function load({ params }){
	const item = files[1]
	let response = await fetch("https://portfolio-git-dev-andyrobreids-projects.vercel.app/1-Lets_Start.md")
	console.log(response)
	return {
		id: item.id,
		path: item.path,
		content: response.text
	}
}


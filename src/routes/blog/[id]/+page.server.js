//TODO add load function to get markdown post
import {files, GetFileFromParam} from "$lib/blog.js";
import {URL} from "$env/static/private";	

export async function load({ params }){
	const item = GetFileFromParam(param.id);
	let response = await fetch(URL + "/" + item.path);
	return {
		id: item.id,
		path: item.path,
		content: await response.text()
	}
}


import files from "$lib/blog.js";
export async function load({params}){
	//TODO implement list of blogs hard coded
	return {
		result: files	
	}
}

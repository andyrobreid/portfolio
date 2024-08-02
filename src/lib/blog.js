export const files = [
	{id:1, path:"1-Lets_Start.md"}
]

export function GetFileFromParam(param){
	const i = parseInt(param) - 1;
	return files[i];
}

//TODO function for correctly labeling blog posts for blog titles sake



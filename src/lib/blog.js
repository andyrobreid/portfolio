export const files = [
	{id:1, path:"1-Lets_Start.md"}
]

export function GetFileFromParam(param){
	const i = parseInt(param) - 1;
	return files[i];
}

//TODO function for correctly labeling blog posts for blog titles sake

function SplitFilename(Filename){
	const parts = Filename.split('/\-|\.|/');
	return parts;
}

export function GetTitleFromParam(param){
	const i = parseInt(param) - 1;
	const post = files[i];
	const parts = SplitFilename(post.path);
	return parts[1];
}


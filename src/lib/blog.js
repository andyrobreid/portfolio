export const files = [
	{id:1, path:"1-Lets_Start.md"}
]

export function GetFileFromParam(param){
	const i = parseInt(param) - 1;
	return files[i];
}

//TODO function for correctly labeling blog posts for blog titles sake
function GetFile(number){
	const post = files[number-1];
}

function SplitFilename(Filename){
	const parts = Filename.split(/\-|\./);
	return parts;
}

function MapFilenameParts(Filename){
	const parts = SplitFilename(Filename);
	return {
		id: parts[0],
		name: parts[1].replace('_', ' '),
		ext: parts[2],
	}
}

export function GetPropsFromParam(number){
	//TODO Convert to get props and provide object with different file properties
	const post = GetFile(number);
	const parts = MapFilenameParts(post.path);
	return parts;
}


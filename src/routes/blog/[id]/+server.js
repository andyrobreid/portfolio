//TODO add load function to get markdown post


export function load({ params }){
	let path = "1-Lets_Start.md";
	return {
		id: params.id,
		path: path
	}
}


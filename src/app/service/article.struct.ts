export interface article{
	title: string,
	brief: string,
	type: number,
	imgs: string[],
	auth: string,
	from: string
}
export interface articleOfTheme{
	time:number,
	content:{
		theme:string,
		color:string,
		articles:article[]
	}
}
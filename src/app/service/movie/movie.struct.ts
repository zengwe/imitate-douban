import { serverRes } from '../request/request.struct';
import { actor } from '../actor/actor.struct';
export interface movie{
	id:number,
	name:string,
	origin_name:string,
	poster:string
	from:string,
	cord:number,
	cord_pepole_number:number,
	brief:string,
	images:string[],
	prevue:actor[],
	artors:actor[],
	director:{},
	publish_time:number,
	publish_country:number,
	type:string[],
	create_time:number,
	update_time:number
}
export interface movieListRes extends serverRes{
	data:movie[]
}
export interface movieRes extends serverRes{
	data:movie
}
export interface questParam{
	type:number,
	movieType:number,
	count:number
}
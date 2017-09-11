import { serverRes } from '../request/request.struct';
export interface actor{
	id:number,
	name:string,
	head:string,
	english_name:string,
	nick_name:string,
	gender:number,// 0none,1man,2woman
	birth_date:number,
	birth_addr:string,
	constellation:string,//星座
	create_time:number,
	update_time:number
}
export interface actorServerRes extends serverRes{
	data:actor
}
export interface requestParam{
	name:string
}
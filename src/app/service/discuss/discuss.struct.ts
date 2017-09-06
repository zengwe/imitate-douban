import { user } from '../user/user.struct';
import { serverRes } from '../request/request.struct';
export interface discuss{
	id:number,
	author:user,
	create_time:number,
	title:string,
	content:string
}
export interface discussListServerRes extends serverRes{
	data:discuss[]
}
export interface requestParam{
	type:number,
	id:number
}
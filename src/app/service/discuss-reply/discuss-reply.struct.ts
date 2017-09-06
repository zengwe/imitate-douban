import { user } from '../user/user.struct';
import { serverRes } from '../request/request.struct';
export interface discussReply{
	id:number,
	user:user,
	content:string,
	likes:number,
	replyTo:discussReply,
	create_time:number
}
export interface discussReplyListServerRes extends serverRes{
	data:discussReply[]
}
export interface questParam{
	id:number
}
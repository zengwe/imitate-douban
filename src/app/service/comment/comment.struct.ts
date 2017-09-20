import { serverRes } from '../request/request.struct';
import { user } from '../user/user.struct';
export interface comment {
	id: number,
	cord: number,
	creat_time: number,
	content: number,
	type: number,
	type_id: number,
	likes: number
}
export interface movieCommentServerRes extends serverRes {
	data: comment[]
}
export interface QuestParem {
	type_id: number
}
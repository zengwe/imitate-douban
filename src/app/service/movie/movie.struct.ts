import { serverRes } from '../request/request.struct';
import { actor } from '../actor/actor.struct';
import { movieType } from '../movie-type/movie-type.struct';
export interface Movie {
  	id: number,
	name: string, // 电影名称
	origin_name: string, // 原来的名称
	poster: string， // 海报地址
	from: string, // 来自那个国家
	cord: number, // 评分
	cord_pepole_number: number, // 参与评分的人数
	brief: string,  // 简介
	language:string, //语言
	images: string[], // 电影的图片
	prevue: string, // 宣传片地址
	artors: actor[], // 演员
	director: actor, // 导演
	publish_time: number, // 发布时间
	publish_country: string, // 发布国家
	type: movieType[], // 电影类型
	create_time: number, // 这个电影收录时间
	update_time: number // 更新时间
}
export interface movieListRes extends serverRes {
	data: movie[]
}
export interface movieRes extends serverRes {
	data: movie
}
export interface questParam {
	type?: number,
	movieType?: number,
	count?: number
}
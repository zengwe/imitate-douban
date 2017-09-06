import { Injectable, Injector } from '@angular/core';
import { RequestService } from '../request/request.service';
import { articleOfTheme } from './article.struct';
@Injectable()
export class ArticleService {

    constructor(
        private request:RequestService
    ) {

    }
    homePageDate():Promise<any>{
        return new Promise((resolve,reject)=>{
            console.log("请求首页数据");
            let articleList:articleOfTheme[] = [
                {
                    time: new Date().getTime(),
                    content: {
                        theme: '一刻',
                        color: 'red',
                        articles: [
                            {
                                title: '这个时代另人心醉的爱情故事只有一种',
                                brief: '打发打发打发肯德基发恐龙当家发卡量时代峻峰拉开发见识到了副科级昂克赛拉放大圣诞节疯狂啦WFDWY-XQXJF-RHRYG-BG7RQ-BBDHM ',
                                type: 1,
                                imgs: ['/assets/article/1.jpg'],
                                auth: 'zengwe',
                                from: ''
                            },
                            {
                                title: '这个时代另人心醉的爱情故事只有一种',
                                brief: '打发打发打发肯德基发恐龙当家发卡量时代峻峰拉开发见识到了副科级昂克赛拉放大圣诞节疯狂啦',
                                type: 1,
                                imgs: [],
                                auth: 'zengwe',
                                from: ''
                            },
                            {
                                title: '葫芦娃你站住的相册-博罗转井镇。重返1980',
                                brief: '我也不知道该写啥',
                                type: 2,
                                imgs: [
                                    '/assets/article/img/1.webp',
                                    '/assets/article/img/2.webp',
                                    '/assets/article/img/3.webp',
                                    '/assets/article/img/4.webp',
                                    '/assets/article/img/5.webp',
                                    '/assets/article/img/6.webp',
                                    '/assets/article/img/7.webp',
                                    '/assets/article/img/8.webp',
                                ],
                                auth: 'tianshi',
                                from: ''
                            }                            
                        ]
                    }
                },
                {
                    time: new Date().getTime()-150600000,
                    content: {
                        theme: '一刻',
                        color: 'red',
                        articles: [
                            {
                                title: '这个时代另人心醉的爱情故事只有一种',
                                brief: '打发打发打发肯德基发恐龙当家发卡量时代峻峰拉开发见识到了副科级昂克赛拉放大圣诞节疯狂啦',
                                type: 1,
                                imgs: ['/assets/article/1.jpg'],
                                auth: 'zengwe',
                                from: ''
                            }
                        ]
                    }
                },
            ];            
            resolve(articleList);
        });
    }
}

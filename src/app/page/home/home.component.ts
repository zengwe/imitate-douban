import { Component, OnInit } from '@angular/core';
import { article, articleOfTheme } from '../../service/article.struct';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    articleList:articleOfTheme[] = [
        {
            time: 0,
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
                    },
                    {
                        title: '这个时代另人心醉的爱情故事只有一种',
                        brief: '打发打发打发肯德基发恐龙当家发卡量时代峻峰拉开发见识到了副科级昂克赛拉放大圣诞节疯狂啦',
                        type: 1,
                        imgs: [],
                        auth: 'zengwe',
                        from: ''
                    }
                ]
            }
        },
        {
            time: 454352354234,
            content: {
                theme: '一刻',
                color: 'red',
                articles: [
                    {
                        title: '这个时代另人心醉的爱情故事只有一种',
                        brief: '打发打发打发肯德基发恐龙当家发卡量时代峻峰拉开发见识到了副科级昂克赛拉放大圣诞节疯狂啦',
                        type: 1,
                        imgs: [''],
                        auth: 'zengwe',
                        from: ''
                    }
                ]
            }
        },
    ]
    constructor() { }

    ngOnInit() {
    }

}

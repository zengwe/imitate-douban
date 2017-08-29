import { Component, OnInit } from '@angular/core';
import { article, articleOfTheme } from '../../service/article/article.struct';
import { ArticleService } from '../../service/article/article.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    articleList:articleOfTheme[] =[];
    constructor(
        private articleService:ArticleService
    ) {
        articleService.homePageDate().then((res)=>{
            this.articleList=res;
        });
    }

    ngOnInit() {
    }
    isToday(value:number){
        if (value < 999999999) {
            value * 1000;
        }
        let now = new Date();
        let getDate = new Date(value);
        if (now.getFullYear() != getDate.getFullYear()) {         
            return false;
        }
        if (now.getMonth() != getDate.getMonth()) {  
            return false;
        }
        if (now.getDay() != getDate.getDay()) { 
            return false;
        }
        return true;        
    }
}

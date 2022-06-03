import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { Article } from "../interfaces/Article.interface";
import { ArticleService } from "../service/article/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
   public articles? : Article[]

  constructor(private userService : UserService, private articleService : ArticleService) { 
    let that = this
    articleService.getAllArticle().subscribe({next(ret){
      that.articles = (ret as Article[]).slice(0,12)
    }})
  }


  ngOnInit(): void {
  }

  

}

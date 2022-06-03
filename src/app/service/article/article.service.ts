import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Article } from "../../interfaces/Article.interface";
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  urlBase = "https://reseau.jdedev.fr/api/"


 

  constructor(private userService : UserService, private http: HttpClient, private router: Router) {
   
   }

  getAllArticle(){
    return this.http.get(`${this.urlBase}article`,{headers: {
        "Authorization": `Bearer ${this.userService.getToken()}`
      }})
  }

  
}

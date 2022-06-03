import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from 'src/app/interfaces/User.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase = "https://reseau.jdedev.fr/api/user"

  private token : string
  

  constructor(private http: HttpClient) { 

    this.token = sessionStorage.getItem("token") ?? ""

  }
// recupére le token
  getToken(): string{
    return this.token 
  }
  setToken(token : string){
    this.token = token
    sessionStorage.setItem('token',token);
  }

  register(user : User) {
    return this.http.post(this.urlBase,{
      ...user
    })
  }

  
  loginConnect(password: string, email : string){
    return this.http.post(`${this.urlBase}/connect`,{
      password,
      email
    })
  }


  getAllUser(){
    return this.http.get(`${this.urlBase}`,{
      headers: {
        "Authorization" : `Bearer ${this.getToken()}`
      }
    })
  }

}

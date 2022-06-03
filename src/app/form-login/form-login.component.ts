import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/User.interface';
import { UserService } from '../service/user/user.service';




@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  

  loginForm: FormGroup
  constructor(formBuilder: FormBuilder,private router : Router, private userService : UserService) {
    
    this.loginForm = formBuilder.group({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/)
      ])
    })
  }

  ngOnInit(): void {
  }
  
  
  submitForm() {
    let classContext = this;
    if (this.loginForm.valid ) {

      this.userService.loginConnect(
        
        this.loginForm.value.password,
          this.loginForm.value.email
        
      ).subscribe({
        next(ret){
          let token : string = (ret as User).token as string
          classContext.userService.setToken(token)
          classContext.router.navigate(['article']);
        }
      })
      

            
      

      console.log(this.loginForm.value);
      
    }
    else {
      alert('email ou mpd incorrecte')
    }
  }

}

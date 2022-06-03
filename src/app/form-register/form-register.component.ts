import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';



@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  router : Router

  registerForm : FormGroup



  constructor(formBuilder: FormBuilder, router : Router, private userService : UserService) { 
    this.router=router
    this.registerForm = formBuilder.group({

      email: new FormControl("",[

        Validators.required,
        Validators.minLength(3),
        Validators.email

      ]),

      password: new FormControl("",[

        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)
      ]),

      repeatPassword: new FormControl("",[

        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)
      ]),

      pseudo: new FormControl("",[
        Validators.required,
        Validators.minLength(3)
      ])

    })
  }

  ngOnInit(): void {
  }

 submitForm(){
  let classContext = this;
   if (this.registerForm.valid && this.registerForm.value.password == this.registerForm.value.repeatPassword){
  
     
    this.userService.register(
      {
        pseudo : this.registerForm.value.pseudo,
        password  : this.registerForm.value.password,
        email : this.registerForm.value.email,
        avatar : ""
       
      }
    ).subscribe({
      next(){
        
        classContext.router.navigate(['login'])
        
      }
    })
    
     
     

   }
   else{
     alert('error')
   }
 }

}

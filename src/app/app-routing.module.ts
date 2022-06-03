import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "login", component: FormLoginComponent },
  { path: "register", component: FormRegisterComponent },
  { path: "article", component: ArticleComponent },
  {path: "listUser", component: ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

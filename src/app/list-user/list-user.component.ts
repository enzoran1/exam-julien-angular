import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User.interface';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  public users? : User[]

  constructor(private userService : UserService) { 
    let that = this
    userService.getAllUser().subscribe({
      next(ret){
        that.users= ret as User[]
      }
    })
  }

  

  ngOnInit(): void {
    
  }

}

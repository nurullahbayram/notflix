
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../user.model";
import {UserService} from "../user.service";
import {Subscription} from "rxjs";
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  @Output() loginEvent = new EventEmitter();
  isSuccess:boolean = false;
  sub!: Subscription;
  submitted = false;
  users: User[] = [];
  model = new User();

  constructor(private userService: UserService) {
  }


  onSubmit() {
    this.submitted = true;

    for (const user of this.users) {
      if(user.email===this.model.email){
        console.log(user)
        if(user.password===this.model.password){
          console.log("Welcome")
          this.isSuccess=true;
          this.loginEvent.emit(this.isSuccess);
        }else {
          console.log("no no...")
        }
      }else {
        console.log("couldn't find")
      }
    }
  }


  ngOnInit(): void {
    this.sub = this.userService.getUsers().subscribe({
      next: users => {
        this.users = users;
        console.log(this.users)
      },
      error: err => this.errorMessage = err
    });
  }


  
  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; 
  }

}
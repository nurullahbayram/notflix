import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-beterlogin',
  templateUrl: './beterlogin.component.html',
  styleUrls: ['./beterlogin.component.css']
})
export class BeterloginComponent implements OnInit {
  form: FormGroup;

  userDetails: User ={};

  subscription: any;


  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private router: Router) {
      this.form = this.fb.group({
        userName: ['',[Validators.required]],
        password: ['',[Validators.required]]
      });
     }

  

  ngOnInit(): void {this
  }

  // checkUser(){
  //   const userName = this.form.get('name')?.value;
  //   this.userDetails.
  // }

  submitForm(){
    var formData: any = new FormData();

    this.userDetails.id=0;
    this.userDetails.userName=this.form.get('userName')?.value;
    this.userDetails.password=this.form.get('password')?.value;

    console.log(this.userDetails);

    formData.append('id', '0');
    formData.append('userName', this.form.get('userName')?.value);
    formData.append('password', this.form.get('password')?.value);
    console.log(formData);
    this.http
      .post('http://localhost:8090/api/user/admin', this.userDetails)
      .subscribe({
        next: (response) => this.route(response),
        error: (error) => console.log(error),
      });

  }

  route(boolean: any){
    if(boolean==true){this.router.navigateByUrl('admin');}
    else{this.router.navigateByUrl('login');}
    
  }
  

  

  

}

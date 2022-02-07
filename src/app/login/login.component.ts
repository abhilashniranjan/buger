import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue!:FormGroup;
  constructor(private router:Router,private tost:ToastrService,private http:HttpClient,private form:FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.form.group({
      Email:[""],
      PassWord:[""]
     });
  }
  onSubmit(){
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Email === this.formValue.value.Email && a.PassWord === this.formValue.value.PassWord;
      })
      if(user){
       this.tost.success("Login is SuccessFull");
       this.formValue.reset();
       this.router.navigate([""]);
      }
      else{
         this.tost.warning("InValid Email or PassWord");
      }
    },err=>{
      this.tost.error("Sumething went wrowng");
      this.router.navigate([""]);
    })
  }
}

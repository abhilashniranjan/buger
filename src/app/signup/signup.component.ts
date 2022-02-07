import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sign } from './sign';
import { SignService } from './sign.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service:SignService,private router:Router,private tost:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.service.poster().subscribe(res=>{
      this.tost.success("SigneUp success");
      this.reset(form);
      this.router.navigate(["/login"]);
    },err=>{this.tost.error("Your Detail Not Register");
    this.router.navigate(["/login"]);})
    
  }
  
  reset(form:NgForm){
    form.form.reset();
    this.service.formData = new Sign();
   }
}

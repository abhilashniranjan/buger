import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sign } from './sign';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  formData:Sign = new Sign();
  constructor(private http:HttpClient) { }
  poster(){
    return this.http.post("http://localhost:3000/signup",this.formData);
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  formData:Orders = new Orders();
  list!:Orders[];

  constructor(private http:HttpClient) { }
  poster(){
   return this.http.post("http://localhost:3000/orders",this.formData);
  }
  gerter(){
    return this.http.get("http://localhost:3000/orders").toPromise()
    .then(res=>{
      this.list = res as Orders[];
    });
  }

deleter(id:number){
  return this.http.delete(`${"http://localhost:3000/orders"}/${id}`);
}
}

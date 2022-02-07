import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Orders } from './orders';
import { OrdersService } from './orders.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  constructor(private router:Router,public service:OrdersService,private tost:ToastrService) { }

  ngOnInit(): void {
  }
onSubmit(form:any){
    this.service.poster().subscribe(res=>{
      this.reset(form);
      this.tost.success("order is success");
      this.router.navigate(["/disply"]);
    },err=>{this.tost.warning("Try the Order leter");});
  }
  reset(form:any){
    form.form.reset();
   this.service.formData = new Orders();
  }
}

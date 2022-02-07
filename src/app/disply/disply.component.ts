import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from '../order/orders.service';

@Component({
  selector: 'app-disply',
  templateUrl: './disply.component.html',
  styleUrls: ['./disply.component.css']
})
export class DisplyComponent implements OnInit {

  constructor(public service:OrdersService,private tost:ToastrService) { }

  ngOnInit(): void {
    this.service.gerter();
  }


  ondelete(data: any) {
    this.service.deleter(data.id).subscribe(res => {
      {
        if (confirm("Are You Shore Cancel Order")) {
          this.tost.success("Your Order Canceled Succsses");
          this.service.gerter();
        }
      }
    }, err => {
      this.tost.error("samething wrong");
    })
  }
}

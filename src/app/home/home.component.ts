import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      100: {
        items: 1
      },
      290: {
        items: 4
      },
      440: {
        items: 4
      },
      740: {
        items: 4
      },
      1000:{
        items:5
      }
    },
    nav: true
    
  }
  customOption: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
    
      290: {
        items: 2
      },
      440: {
        items: 2
      },
      740: {
        items: 2
      },
      1000:{
        items: 2
      }
    },
    nav: true
    
  }
  customOptionse: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
    
      290: {
        items: 1.25
      },
      440: {
        items: 1.25
      },
      740: {
        items: 2
      },
      1000:{
        items: 2
      }
    },
    nav: true
    
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  OnClick(){
    this.router.navigate(["/serch"]);
  }
}

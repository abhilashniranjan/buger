import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  searchText:any;
  propertes=[
    {
      "id":17,
    "img":"mix.jpg",
    "title":"Mix Burger",
    "dsc":"Dill pickle, cheddar cheese, tomato, red onion, ground chuck "
  },
  {
    "id":18,
  "img":"mixveg.jpg",
  "title":"Veg Burger",
  "dsc":"Dill pickle, cheddar cheese, tomato, red onion, ground chuck "
},
{
  "id":19,
"img":"mix big.jpg",
"title":"Big Burger",
"dsc":"Dill pickle, cheddar cheese, tomato, red onion, ground chuck "
},
    {
      "id":1,
    "img":"t1.jpg",
    "title":"Chicken Burger & cock",
    "dsc":"Dill pickle, cheddar cheese, tomato, red onion, ground chuck "
  },
  {
    "id":2,
    "img":"t2.jpg",
    "title":"Chicken Burger",
    "dsc":"Dill pickles, bread, minced chicken, dijon mustard, greens"
  },
  {
    "id":3,
    "img":"t3.jpg",
    "title":"NonVeg Burger ",
    "dsc":"Onion soup mix, ground turkey, bread crumbs, hamburger buns"
  },
  {
    "id":4,
    "img":"t6.jpg",
    "title":"Special Burger",
    "dsc":"Gluten free, ground beef, olive oil, sea salt, garlic powder"
  },
  {
    "id":5,
    "img":"t11.jpg",
    "title":"combination Burger",
    "dsc":"Mincemeat, blue, cheddar cheese slice, lettuce, tomatoesthe "
  },
  { 
    "id":6,
    "img":"g1.jpg",
    "title":"Burger Mcdonalds",
    "dsc":"Dill pickle, cheddar cheese, tomato, red onion, ground chuck"
  },
  {
    "id":7,
    "img":"g2.jpg",
    "title":"Chicken Burger Patty",
    "dsc":"Dill pickles, bread, minced chicken, dijon mustard, greens"
  },
  {
    "id":8,
    "img":"g3.jpg",
    "title":"NonVeg Burger",
    "dsc":"Onion soup mix, ground turkey, bread crumbs, hamburger"
  },
  {
    "id":9,
    "img":"min4.jpg",
    "title":"Special Burger",
    "dsc":"Gluten free, ground beef, olive oil, sea salt, garlic powder"
  },
  {
    "id":10,
    "img":"g5.jpg",
    "title":"Mix Burger",
    "dsc":"Mincemeat, blue, cheddar cheese slice, lettuce, tomatoesthe "
  },
  {
    "id":11,
    "img":"mid5.jpg",
    "title":"Pure Veg Burger",
    "dsc":"Mincemeat, blue, cheddar cheese slice, lettuce, tomatoesthe "
  },
  {
    "id":12,
    "img":"mid1.jpg",
    "title":"Chicken Burger Mcdonalds",
    "dsc":"Dill pickle, cheddar cheese, tomato, red onion, ground chuck"
  },
  {
    "id":13,
    "img":"min6.jpg",
    "title":"Chicken Burger Patty",
    "dsc":"Dill pickles, bread, minced chicken, dijon mustard, greens"
  },
  {
    "id":14,
    "img":"mid3.jpg",
    "title":"Chicken Burger",
    "dsc":"Dill pickle, cheddar cheese, tomato, red onion, ground chuck "
  },
  {
    "id":15,
    "img":"mid4.png",
    "title":"Non Burger Patty",
    "dsc":"Dill pickles, bread, minced chicken, dijon mustard, greens"
  },
  {
    "id":16,
    "img":"mid5.jpg",
    "title":"Veg Burger",
    "dsc":"Onion soup mix, ground turkey, bread crumbs, hamburger"
  }
  ];
  
  constructor() {
   }
  ngOnInit(): void {

  }
}

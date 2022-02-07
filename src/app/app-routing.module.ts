
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplyComponent } from './disply/disply.component';
import { FourComponent } from './four/four.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OneComponent } from './one/one.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"disply",component:DisplyComponent},
  {path:"order",component:OrderComponent},
  {path:"home",component:HomeComponent},
  {path:"menu",component:MenuComponent},
  {path:"serch",component:MenuComponent},
  {path:"one",component:OneComponent,children:[
    {path:"two",component:TwoComponent},
    {path:"three",component:ThreeComponent},
    {path:"four",component:FourComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

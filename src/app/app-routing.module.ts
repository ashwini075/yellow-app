import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

const routes: Routes = [
  { path: "" ,redirectTo:"/home",pathMatch:"full"},
  { path: "home" ,component:Page1Component},
  { path: "contact-Us" ,component:Page2Component},
  { path: "Achivements" ,component:Page3Component},
  { path: "Project" ,component:PageComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavPageComponent} from "./nav-bar/nav-page/nav-page.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";

const routes: Routes = [
  {path:'', pathMatch: 'full', component: NavBarComponent},
  {path:'menu', pathMatch: 'full', component: NavPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

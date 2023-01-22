import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DruktemeterComponent } from './druktemeter/druktemeter.component';
import { HomeComponent } from './home/home.component';
import { ReservatieComponent } from './reservatie/reservatie.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'druktemeter',
     component: DruktemeterComponent
  },
  {
    path: 'reservatie',
     component: ReservatieComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

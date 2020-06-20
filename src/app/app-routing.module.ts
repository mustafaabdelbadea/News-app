import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { SportsComponent } from './sports/sports.component';
import { ScienceComponent } from './science/science.component';
import { TechnologyComponent } from './technology/technology.component';
import { HealthComponent } from './health/health.component';
import { BusinessComponent } from './business/business.component';


const routes: Routes = [
  {path:'',redirectTo:'general',pathMatch:'full'},
  {path:'general',component:GeneralComponent},
  {path:'sports',component:SportsComponent},
  {path:'science',component:ScienceComponent},
  {path:'health',component:HealthComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'business',component:BusinessComponent},
  {path:'**',component:GeneralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

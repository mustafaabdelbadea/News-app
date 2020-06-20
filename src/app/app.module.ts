import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { SportsComponent } from './sports/sports.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { HealthComponent } from './health/health.component';
import { BusinessComponent } from './business/business.component';
import { ScienceComponent } from './science/science.component';
import { TechnologyComponent } from './technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    SportsComponent,
    NavComponent,
    FooterComponent,
    HealthComponent,
    BusinessComponent,
    ScienceComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

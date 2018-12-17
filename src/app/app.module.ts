import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HypertensionComponent } from './components/hypertension/hypertension.component';
import { AppRoutes } from './app.routes';
import { BloodpressureService } from './services/bloodpressure.service';
import { KidneydiseaseComponent } from './components/kidneydisease/kidneydisease.component';
import { KidneydiseaseService } from './services/kidneydisease.service';
import { BpsummaryComponent } from './components/dashboard/bpsummary.component';
import { KidneysummaryComponent } from './components/dashboard/kidneysummary.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HypertensionComponent,
    KidneydiseaseComponent,
    BpsummaryComponent,
    KidneysummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [BloodpressureService, KidneydiseaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

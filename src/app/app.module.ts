import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HypertensionComponent } from './components/hypertension/hypertension.component';
import { KidneyComponent } from './components/kidney/kidney.component';
import { AppRoutes } from './app.routes';
import {BloodpressureService} from './services/bloodpressure.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HypertensionComponent,
    KidneyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [BloodpressureService],
  bootstrap: [AppComponent]
})
export class AppModule { }

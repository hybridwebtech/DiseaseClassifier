import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HypertensionComponent } from './components/hypertension/hypertension.component';
import { KidneyComponent } from './components/kidney/kidney.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HypertensionComponent,
    KidneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

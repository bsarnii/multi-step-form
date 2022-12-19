import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { SummaryComponent } from './summary/summary.component';
import { SidebarStepsComponent } from './sidebar-steps/sidebar-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    AddOnsComponent,
    SummaryComponent,
    SidebarStepsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

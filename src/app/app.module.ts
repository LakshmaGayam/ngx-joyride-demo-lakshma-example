import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router'
import { JoyrideModule } from 'ngx-joyride'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ContactsComponent } from './contract.component';
import { AccountsComponent } from './account.component';
import { ActivitiesComponent } from './activities.component';
export const routes =  [
  { path: 'accounts', component: AccountsComponent, label: 'Accounts' , id:1 },
  { path: 'contacts', component: ContactsComponent, label: 'Contacts' , id:3 },
  { path: 'activities', component: ActivitiesComponent, label: 'Activities' , id:2 }
 ];


@NgModule({
  imports:      [ BrowserModule, MaterialModule, JoyrideModule.forRoot(),RouterModule.forRoot([]),BrowserAnimationsModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

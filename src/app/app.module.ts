import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDataComponent } from './team-data/team-data.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

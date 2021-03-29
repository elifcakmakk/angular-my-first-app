import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ServerComponenet} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponenet } from './warning-alert/warning-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponenet,
    ServersComponent,
    WarningAlertComponenet,
    SuccessAlertComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductDbService } from './product-db.service';
import { RouterModule } from '@angular/router/src/router_module';
import { ChatDataService } from './chat-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ProductDbService,ChatDataService],
  bootstrap: [AppComponent]
})


export class AppModule {

}

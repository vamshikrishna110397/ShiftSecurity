import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ScanbarcodeComponent } from './scanbarcode/scanbarcode.component';
import { OrderlistpageComponent } from './orderlistpage/orderlistpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ViewOrderComponent,
    ScanbarcodeComponent,
    OrderlistpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

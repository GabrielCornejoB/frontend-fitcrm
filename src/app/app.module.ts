import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { CreateCustomerComponent } from './components/customers/create-customer/create-customer.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { UpdateCustomerComponent } from './components/customers/update-customer/update-customer.component';
import { DetailsCustomerComponent } from './components/customers/details-customer/details-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    SendMessageComponent,
    CreateCustomerComponent,
    CustomerComponent,
    UpdateCustomerComponent,
    DetailsCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

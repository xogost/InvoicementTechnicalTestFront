import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DxButtonModule, DxTreeListModule, DxFormModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './company/company.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyComponent,
    ClientsComponent,
    ClientComponent,
    ProductsComponent,
    ProductComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxButtonModule,
    DxTreeListModule,
    DxFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

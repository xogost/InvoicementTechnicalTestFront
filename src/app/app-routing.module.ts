import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../app/welcome/welcome.component';
import { ClientsComponent } from '../app/clients/clients.component';
import { ClientComponent } from '../app/client/client.component';
import { CompaniesComponent } from '../app/companies/companies.component';
import { CompanyComponent } from '../app/company/company.component';
import { ProductsComponent } from '../app/products/products.component';
import { ProductComponent } from '../app/product/product.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'companies', component: CompaniesComponent},
  { path: 'company/:id', component: CompanyComponent},
  { path: 'company/:id/clients', component: ClientsComponent},
  { path: 'client/:companyId/:id', component: ClientComponent},
  { path: 'company/:id/products', component: ProductsComponent},
  { path: 'product/:companyId/:id', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

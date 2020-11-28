import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from '../app/clients/clients.component';
import { ClientComponent } from '../app/client/client.component';
import { CompaniesComponent } from '../app/companies/companies.component';
import { CompanyComponent } from '../app/company/company.component';

const routes: Routes = [
  { path: 'companies', component: CompaniesComponent},
  { path: 'company/:id', component: CompanyComponent},
  { path: 'company/:id/clients', component: ClientsComponent},
  { path: 'client/:companyId/:id', component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

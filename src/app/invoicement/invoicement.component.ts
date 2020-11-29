import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../objects/Product';

@Component({
  selector: 'app-invoicement',
  templateUrl: './invoicement.component.html',
  styleUrls: ['./invoicement.component.css']
})
export class InvoicementComponent implements OnInit {
  invoices:any = [];
  companies: any = [];
  clients: any = [];
  products: any = [];
  invoiceProducts:any = [];
  selectedProduct:any = null;
  selectedCompany:any = null;
  selectedClient:any = null;
  total:number = 0;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get(`invoicement`).subscribe((data)=>{
      this.invoices = data;
    });
    this.apiService.get(`companies`).subscribe((data)=>{
      this.companies = data;
    });
  }

  getClients(event:any): void {
    this.apiService.get(`company/${this.selectedCompany}/clients`).subscribe((data)=>{
      this.clients = data;
    });
    this.apiService.get(`company/${this.selectedCompany}/products`).subscribe((data)=>{
      this.products = data;
    });
  }

  addProducts() {
    this.invoiceProducts.push(this.products[this.selectedProduct]);
    this.invoiceProducts.map((item:any) => {
      this.total += item.cost as number;
    });
  }

  save() {
    let data = {
      companyId: this.selectedCompany,
      clientId: this.selectedClient,
      products: this.invoiceProducts,
      total: this.total.toString()
    }
    this.apiService.post(`invoicement/`, data).subscribe((data:any)=>{
      alert(data['message']);
      if(data["result"]===true){
        window.location.reload();
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  companyId:number = this.actRoute.snapshot.params.id;
  constructor(private actRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get(`company/${this.actRoute.snapshot.params.id}/products`).subscribe((data)=>{
      this.products = data;
    });
  }

  delete (id:number): void {
    this.apiService.delete(`product/${id}`).subscribe((data)=>{
      console.log(data);
      window.location.reload();
    });
  }

  goTo (url:any) {
    window.location = url;
  }
}

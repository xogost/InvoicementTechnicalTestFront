import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../objects/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = { id: 0, companyId: 0, name:'', cost: 0, reference:'', quantity: 0, createdAt: new Date(), updatedAt: null };
  labelLocation: string = 'top';
  readOnly: boolean = false;
  showColon: boolean = true;
  minColWidth: number = 150;
  colCount: number = 1;
  width: any = '100%';

  constructor(private actRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    if (this.actRoute.snapshot.params.id != 0) {
      this.apiService.get(`product/${this.actRoute.snapshot.params.id}`).subscribe((data)=>{
        this.product = data as Product;
      });
    }
  }

  save (event:any): void {
    if (this.actRoute.snapshot.params.id == 0) {
      this.apiService.post(`company/${this.actRoute.snapshot.params.companyId}/products`, this.product).subscribe((data)=>{
        console.log(data);
      });
    } else {
      this.apiService.put(`product/${this.actRoute.snapshot.params.id}`, this.product).subscribe((data)=>{
        console.log(data);
      });
    }
  }

}

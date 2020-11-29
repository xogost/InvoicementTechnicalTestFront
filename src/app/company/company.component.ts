import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Company } from '../objects/Company';
import {Router} from "@angular/router"

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: Company = { id: 0, name:'', identification: '', createdAt: new Date(), updatedAt: null };
  labelLocation: string = 'top';
  readOnly: boolean = false;
  showColon: boolean = true;
  minColWidth: number = 150;
  colCount: number = 1;
  width: any = '100%';

  constructor(private actRoute: ActivatedRoute, private apiService: ApiService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.actRoute.snapshot.params.id != 0) {
      this.apiService.get(`company/${this.actRoute.snapshot.params.id}`).subscribe((data)=>{
        this.company = data as Company;
      });
    }
  }

  save (event:any): void {
    if (this.actRoute.snapshot.params.id == 0) {
      this.apiService.post('companies', this.company).subscribe((data:any)=>{
        this.solveResponse(data, `companies`);
      });
    } else {
      this.apiService.put(`company/${this.actRoute.snapshot.params.id}`, this.company).subscribe((data:any)=>{
        this.solveResponse(data, `companies`);
      });
    }
  }
  solveResponse(data:any, url:string){
    alert(data['message']);
    if(data["result"]===true){
      this.router.navigate([url]);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: any;
  constructor(private apiService: ApiService) { }

  ngOnInit (): void {
    this.apiService.get('companies').subscribe((data)=>{
      this.companies = data;
    });
  }

  delete (id:number): void {
    this.apiService.delete(`company/${id}`).subscribe((data)=>{
      console.log(data);
      window.location.reload();
    });
  }

  goTo (url:any) {
    window.location = url;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Client } from '../objects/Client';
import {Router} from "@angular/router"

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client: Client = { id: 0, name:'', age: 0, companyId: 0, createdAt: new Date(), updatedAt: null };
  labelLocation: string = 'top';
  readOnly: boolean = false;
  showColon: boolean = true;
  minColWidth: number = 150;
  colCount: number = 1;
  width: any = '100%';
  companyId:number = this.actRoute.snapshot.params.companyId;

  constructor(private actRoute: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    if (this.actRoute.snapshot.params.id != 0) {
      this.apiService.get(`client/${this.actRoute.snapshot.params.id}`).subscribe((data)=>{
        this.client = data as Client;
      });
    }
  }

  save (event:any): void {
    if (this.actRoute.snapshot.params.id == 0) {
      this.apiService.post(`company/${this.actRoute.snapshot.params.companyId}/clients`, this.client).subscribe((data:any)=>{
        this.solveResponse(data, `/company/${this.actRoute.snapshot.params.companyId}/clients`)
      });
    } else {
      this.apiService.put(`client/${this.actRoute.snapshot.params.id}`, this.client).subscribe((data:any)=>{
        this.solveResponse(data, `/company/${this.actRoute.snapshot.params.companyId}/clients`)
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

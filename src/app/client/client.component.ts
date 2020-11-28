import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Client } from '../objects/Client';

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
  colCount: number = 2;
  width: any = '50%';

  constructor(private actRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    if (this.actRoute.snapshot.params.id != 0) {
      this.apiService.get(`client/${this.actRoute.snapshot.params.id}`).subscribe((data)=>{
        this.client = data as Client;
      });
    }
  }

  save (event:any): void {
    if (this.actRoute.snapshot.params.id == 0) {
      this.apiService.post(`company/${this.actRoute.snapshot.params.companyId}/clients`, this.client).subscribe((data)=>{
        console.log(data);
      });
    } else {
      this.apiService.put(`client/${this.actRoute.snapshot.params.id}`, this.client).subscribe((data)=>{
        console.log(data);
      });
    }
  }

}

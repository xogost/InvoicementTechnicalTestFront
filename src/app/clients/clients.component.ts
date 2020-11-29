import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any;
  companyId:number = this.actRoute.snapshot.params.id;
  constructor(private actRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get(`company/${this.actRoute.snapshot.params.id}/clients`).subscribe((data)=>{
      this.clients = data;
    });
  }

  delete (id:number): void {
    this.apiService.delete(`client/${id}`).subscribe((data)=>{
      console.log(data);
      window.location.reload();
    });
  }

  goTo (url:any) {
    window.location = url;
  }
}

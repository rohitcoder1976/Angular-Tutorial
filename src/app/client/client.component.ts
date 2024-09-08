import { Component, inject, OnInit } from '@angular/core';
import { IApiResponseModel } from '../model/class/interface/apiResponse';
import { Client } from '../model/class/classes/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule, UpperCasePipe, DatePipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit {

  currentDate: Date = new Date();

  clientService = inject(ClientService);
  clientObj: Client = new Client();
  clientList: Client[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((result: IApiResponseModel) => {
      this.clientList = result.data;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      alert("Error, could not fetch clients...");
    });
  }

  saveClient() {
    this.isLoading = true;
    this.clientService.addUpdate(this.clientObj).subscribe((res: IApiResponseModel) => {
      if (res.result) {
        alert("Client created successfull!");
        this.loadClient();
        this.isLoading = false;
      } else {
        alert("Error: " + res.message);
        this.isLoading = false;
      }
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponseModel } from '../model/class/interface/apiResponse';
import { Client } from '../model/class/classes/Client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {

  }

  getAllClients(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(environment.API_URL + "/GetAllClients");
  }

  getAllEmployee(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(environment.API_URL + "/GetAllEmployee");
  }

  getAllProject(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(environment.API_URL + "/GetAllProjectsEmployees");
  }

  addUpdate(obj: Client): Observable<IApiResponseModel> {
    return this.http.post<IApiResponseModel>(environment.API_URL + "/AddUpdateClient", obj);
  }

  deleteClientById(id: number): Observable<Client> {
    return this.http.get<Client>(environment.API_URL + "/DeleteClientByClientId?clientId=" + id);
  }

  addUpdateClientProject(obj: Object): Observable<IApiResponseModel> {
    return this.http.post<IApiResponseModel>(environment.API_URL + "/AddUpdateClientProject", obj);
  }
}

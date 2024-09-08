import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponseModel } from '../model/class/interface/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  constructor(private http: HttpClient) {

  }
  getDesignations(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation");
  }

  getClient(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients");
  }
}

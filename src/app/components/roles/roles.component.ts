import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';
import { IApiResponseModel } from '../../model/class/interface/apiResponse';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  http = inject(HttpClient);
  url: string = "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles";

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get<IApiResponseModel>(this.url).subscribe((res: IApiResponseModel) => {
      this.roleList = res.data;
    });
  }
}

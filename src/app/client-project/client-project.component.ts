import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { IApiResponseModel } from '../model/class/interface/apiResponse';
import { Employee, IClient, IProject } from '../model/class/interface/client';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DatePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.scss'
})
export class ClientProjectComponent implements OnInit {

  isLoading: boolean = true;

  formGroupControls: {} = {
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(""),
  };

  clientService = inject(ClientService);

  employeeList: Employee[] = [];
  clientList: IClient[] = [];
  projectList: IProject[] = [];

  projectForm: FormGroup = new FormGroup(this.formGroupControls);

  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
    this.getAllProject();
  }

  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe((res: IApiResponseModel) => {
      this.employeeList = res.data;
    });
  }

  getAllClient() {
    this.clientService.getAllClients().subscribe((res: IApiResponseModel) => {
      this.clientList = res.data;
    });
  }

  getAllProject() {
    this.isLoading = true;
    this.clientService.getAllProject().subscribe((res: IApiResponseModel) => {
      if (res.result) {
        this.projectList = res.data;
        this.isLoading = false;
      } else {
        alert("Error: " + res.message);
        this.isLoading = false;
      }
    });
  }

  saveProject() {
    const formValue = this.projectForm.value;
    console.log("Form value:");
    console.log(formValue);
    this.clientService.addUpdateClientProject(formValue).subscribe((res: IApiResponseModel) => {
      if (res.result) {
        alert("Project created succesfully!");
      } else {
        alert("Error: " + res.message);
      }
    });
  }

  resetForm() {
    this.projectForm = new FormGroup({ ...this.formGroupControls });
    console.log(this.projectForm);
  }
}

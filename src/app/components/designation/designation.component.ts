import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IDesignation } from '../../model/class/interface/designation';
import { IApiResponseModel } from '../../model/class/interface/apiResponse';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss'
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  masterService = inject(MasterService);
  isLoading: boolean = true;

  ngOnInit(): void {
    this.isLoading = true;
    this.masterService.getDesignations().subscribe((result: IApiResponseModel) => {
      this.designationList = result.data;
      this.isLoading = false;
    }, error => {
      alert("API error");
      this.isLoading = false;
    });
  }
}

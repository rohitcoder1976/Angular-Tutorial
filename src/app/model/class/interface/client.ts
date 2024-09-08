export interface IClient {
    clientId: number
    contactPersonName: string
    companyName: string
    address: string
    city: string
    pincode: string
    state: string
    employeeStrength: number
    gstNo: string
    contactNo: string
    regNo: string
};

export interface Employee {
    empName: string;
    empId: number;
    empCode: string;
    empEmailId: string;
    empDesignation: string;
    role: string;
};

export interface IProject {
    empName: string
    empId: number
    empCode: string
    empEmailId: string
    empDesignation: string
    projectName: string
    startDate: string
    expectedEndDate: string
    clientName: string
    clientProjectId: number
    addedDate: string
    projectEmpId: number
}


export interface Permission {
  value:string;
}

export interface UserDTO {
  userId:number;
  email:string;
  firstname:string;
  lastname:string;
  permissions: Permission[];
}

export interface UserFull {
  userId:number;
  email:string;
  firstname:string;
  lastname:string;
  password:string;
  permissions: Permission[];
}

export interface Machines{
  id:number;
  name:string;
  status:string;
  date:string;
}

export interface ErrorMsg{
  id:number;
  massage:string;
  machineId:number;
  date:string;
}

export interface DialogData{
  actionName:string;
  machId:number;
  machineName:string;
}


export interface searchCriteria{
  key:string;
  value:any;
}

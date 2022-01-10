
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
  status:string;
  date:string;
}

export interface ErrorMsg{
  id:number;
  massage:string;
  date:string;
}

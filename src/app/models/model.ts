
export interface Permission {
  value:string;
}

export interface UserDTO {
  id:number;
  email:string;
  firstname:string;
  lastname:string;
  permissions: Permission[]
}

export interface UserFull {
  email:string;
  firstname:string;
  lastname:string;
  password:string;
  permissions: Permission[]
}

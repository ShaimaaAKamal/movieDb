export interface User {
  uid?: string;
  email: string;
  username: string;
  password?: string;
  token?:string;
}
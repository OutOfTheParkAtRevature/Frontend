import { Role } from "./Role";
import { Team } from "./Team";

export interface User {
  id: string;
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  teamID: string;
  roleName: string;
}

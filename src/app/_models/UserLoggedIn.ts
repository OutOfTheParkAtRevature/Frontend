export interface UserLoggedIn {
    id: number;
    token: string;
    userName: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    teamID: number;
    //roleID: number;
    roleName: string;
}
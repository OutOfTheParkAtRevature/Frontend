export interface UserLoggedIn {
    id: string;
    token: string;
    userName: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    teamID: string;
    //roleID: number;
    roleName: string;
}
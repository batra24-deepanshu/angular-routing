export class AuthService{
    isLoggedIn:boolean=false;

    login(){
        this.isLoggedIn=true;
    }
    logout(){
        this.isLoggedIn=false;
    }
    isAuthenticated(){
        return this.isLoggedIn;
    }
}
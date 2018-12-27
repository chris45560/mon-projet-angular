export class AuthService {

    isAuth = false;

    signIn() {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        this.isAuth = true;
                        resolve(true);
                    }, 2000
                );
            }
        );
    }

    signOut() {
        this.isAuth = false;
    }
}

/*
var test = function(test) {
    blabla
}
*/
/*** ES 6 ***/
/*
const test(test) => {
    blabla
}
*/

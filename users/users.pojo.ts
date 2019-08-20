import { IUserModel, UserRepository } from './users.model'
export class User {

    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }
    // private id: Number = 0;
    // private firstName: String = '';
    // private lastName: String = '';
    // private email: String = '';
    // private password: String = '';
    // private permissionLevel: Number = 1;

    // constructor(id: Number,
    //     firstName: String,
    //     lastName: String,
    //     email: String,
    //     password: String,
    //     permissionLevel: Number) {
    //     this.id = id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.email = email;
    //     this.password = password;
    //     this.permissionLevel = permissionLevel;
    // }

    public static createUser(user: IUserModel): Promise<any> {
        let p = new Promise((resolve, reject) => {
            let repo = new UserRepository();
            repo.create(user, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    }

}
import * as mongoose from 'mongoose';
import { RepositoryBase } from '../model'
import { Document } from "mongoose";

export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;

//https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6

export interface IUserModel extends mongoose.Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    modifiedAt: Date;
}

let schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: false },
    createdAt: { type: Date, required: false },
    modifiedAt: { type: Date, required: false }
});

schema.pre("save", function (this: IUserModel, next: any) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});

export let UserSchema = mongoose.model<IUserModel>('user', schema, 'users', true);

export class UserRepository extends RepositoryBase<IUserModel> {
    constructor() {
        super(UserSchema);
    }
}

Object.seal(UserRepository);

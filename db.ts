import * as mongoose from 'mongoose';
export default class DBConnection {
    mongoConnectionUrl: mongoose.DBConnection = "mongodb://localhost:27017/ts";
    
    create() {
        mongoose.connect(this.mongoConnectionUrl, (err) => {
            if (err) {
                console.log(err.message);
                console.log(err);
            }
            else {
                console.log('Connected to MongoDb');
            }
        });
    }
}
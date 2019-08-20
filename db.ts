import mongoose from 'mongoose';
class DBConnection {
    static mongooseInstance: any;
    static mongooseConnection: mongoose.Connection;
  
    static connect(): mongoose.Connection {
      const MONGODB_CONNECTION: string = 'mongodb://localhost:27017/typescriptgql';
  
      if (this.mongooseInstance) return this.mongooseInstance;
  
      this.mongooseConnection = mongoose.connection;
      this.mongooseConnection.once('open', () => {
        console.log('Connected to mongodb');
      })
      this.mongooseInstance = mongoose.connect(MONGODB_CONNECTION);
      return this.mongooseInstance;
    }
  } 
  
  export default DBConnection;
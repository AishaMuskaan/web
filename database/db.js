import mongoose from 'mongoose';

const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-h1jdjpl-shard-00-00.0xkugn8.mongodb.net:27017,ac-h1jdjpl-shard-00-01.0xkugn8.mongodb.net:27017,ac-h1jdjpl-shard-00-02.0xkugn8.mongodb.net:27017/?ssl=true&replicaSet=atlas-zjbtfd-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;



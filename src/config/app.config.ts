import dotenv from 'dotenv';
dotenv.config();
export const APP_CONFIG= {
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/yourdb',
    PASSWORD: process.env.PASSWORD ,
}
    
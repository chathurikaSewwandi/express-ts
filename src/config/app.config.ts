import dotenv from 'dotenv';
dotenv.config();
export const APP_CONFIG= {
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
    MONGODB_URI: process.env.MONGODB_URI,
    PASSWORD: process.env.PASSWORD ,
}
    
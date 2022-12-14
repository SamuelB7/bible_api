import { registerAs } from "@nestjs/config";


export default registerAs('mongodb', () => ({
    url: process.env.DATABASE_URL
}))
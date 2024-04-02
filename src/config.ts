import dotenv from 'dotenv';

dotenv.config();

class Config {
    private static instance: Config;
    private constructor() { }

    static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }

    get MONGODB_URI(): string | undefined {
        return process.env.MONGO_DB_URI;
    }

    get SERVER_PORT(): number {
        return parseInt(process.env.SERVER_PORT || '3000');
    }

    get COBRE_FACIL_APP_ID(): string | undefined {
        return process.env.COBRE_FACIL_APP_ID;
    }

    get COBRE_FACIL_APP_SECRET(): string | undefined {
        return process.env.COBRE_FACIL_APP_SECRET;
    }

    get CIRCLE_API_TOKEN(): string | undefined {
        return process.env.CIRCLE_API_TOKEN;
    }

    // Other environment variables...
}

export default Config.getInstance();
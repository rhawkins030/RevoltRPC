import * as fs from 'fs';

export type Config = {
    revoltUser: {
        email: string;
        password: string;
    };
    useStatus: boolean;
    preStatus: string;
    useAPI: boolean;
};

// Load and validate the config file
export function loadConfig(filePath: string): Config {
    try {
        const rawData = fs.readFileSync(filePath, 'utf-8');
        const config: Config = JSON.parse(rawData);

        // Validate the config object
        if (!config.revoltUser || typeof config.revoltUser.email !== 'string' || typeof config.revoltUser.password !== 'string') {
            throw new Error("Invalid or missing 'revoltUser' configuration.");
        }
        if (typeof config.useStatus !== 'boolean') {
            throw new Error("Invalid or missing 'useStatus' configuration.");
        }
        if (typeof config.preStatus !== 'string') {
            throw new Error("Invalid or missing 'preStatus' configuration.");
        }
        if (typeof config.useAPI !== 'boolean') {
            throw new Error("Invalid or missing 'useAPI' configuration.");
        }

        return config;
    } catch (error: any) {
        console.error("Error loading configuration file:", error.message);
        process.exit(1);
    }
}
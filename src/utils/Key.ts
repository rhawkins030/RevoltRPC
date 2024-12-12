import * as fs from "fs";
import * as path from "path";

class Key {
    private key: string;
    private baseDir: string;

    constructor(key: string, baseDir: string = path.join(process.cwd(), "data")) {
        this.key = key;
        this.baseDir = baseDir;

        // Ensure the base directory and server-specific folder exist
        this.ensureDirectory(this.baseDir);
    }

    // Helper to ensure a directory exists
    private ensureDirectory(dirPath: string): void {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
    }

    // Get the full path to the key's file
    private keyFilePath(): string {
        return path.join(this.baseDir, `${this.key}.txt`);
    }

    // Get the value of the key
    get(): string | null {
        const filePath = this.keyFilePath();
        if (fs.existsSync(filePath)) {
            return fs.readFileSync(filePath, "utf8");
        }
        return null;
    }

    // Set a value for the key
    set(value: string): void {
        const filePath = this.keyFilePath();
        fs.writeFileSync(filePath, value, "utf8");
    }
}


export default Key;
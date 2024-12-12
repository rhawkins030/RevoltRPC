import path from 'path';
import { Config, loadConfig } from './utils/Config';
import Key from './utils/Key';
import { FromAPI } from './RevoltFlux/utils/fetch';
import { testAPI } from './RevoltFlux';
const configPath = path.join(process.cwd(), "config.json")

const config: Config = loadConfig(configPath);
export let firstTimeKey = new Key("cache.firstRun");
export let sessionKey = new Key("cache.sessionID");
async function main() {
    console.log(await testAPI());
}

main();
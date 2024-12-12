import path from 'path';
import { Config, loadConfig } from './utils/Config';
import Key from './utils/Key';
import { FromAPI } from './RevoltFlux/utils/fetch';
import { testAPI } from './RevoltFlux';
import { LoginRevolt } from './functions';
const configPath = path.join(process.cwd(), "config.json")

const config: Config = loadConfig(configPath);
export let firstTimeKey = new Key("cache.firstRun");
export let sessionKey = new Key("cache.sessionID");
// People are gonna go like "oh why no security for sessions :( like they aren't putting their login in the config ;-;"
async function main() {
    const test = await testAPI();
    if(!test) throw new Error("Unable to start, invalid Revolt API url. (RevoltFlux/globals.ts)");

    await LoginRevolt(config.revoltUser.email, config.revoltUser.password);
}

main();
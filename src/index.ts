import path from 'path';
import { Config, loadConfig } from './utils/Config';
import Key from './utils/Key';
import { Client } from 'revolt.js';
const configPath = path.join(process.cwd(), "config.json")

let client = new Client();

const config: Config = loadConfig(configPath);
export let firstTimeKey = new Key("cache.firstRun");
export let sessionKey = new Key("cache.sessionID");

client.login({ email: config.revoltUser.email, password: config.revoltUser.password, friendly_name: "RevoltRPC" }).then(() => {
    console.log(`Logged into Revolt as ${client.user?.username}.`)
});

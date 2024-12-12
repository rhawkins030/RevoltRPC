import { components } from "./types";
import { FromAPI } from "./utils/fetch";

export async function testAPI() {
    // Run test on RevoltAPI (globals.ts)
    type RAPIInfo = components["schemas"]["RevoltConfig"] // this SHOULD be the type for the response...
    const dat = (await FromAPI("/auth/session/login")) as RAPIInfo;

    if(dat) {
        return true;
    } else {
        return false;
    }
}
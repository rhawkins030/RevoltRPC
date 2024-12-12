// Misc functions not used :p

import { sessionKey } from ".";
import { FromAPI } from "./RevoltFlux/utils/fetch";
import { LoginBody, LoginResponse, UserInfo } from "./utils/Types";

export async function LoginRevolt(email: string, password: string) : Promise<boolean> {
    const template: LoginBody = {
        email: email,
        password: password,
        friendly_name: `RevoltRPC System`
    }

    const dat = await FromAPI("/auth/session/login", template) as LoginResponse;
    if(dat.result = "Success") {
        // Cool login!
        sessionKey.set(dat.token || "");

        const uDat = await FromAPI("/users/@me", undefined, dat.token) as UserInfo;
        console.log(`Logged in as ${uDat.username}`)
        return true;
    } else {
        return false;
    }
}
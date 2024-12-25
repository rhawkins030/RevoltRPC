// Misc functions not used :p

import { sessionKey } from ".";
import { FromAPI } from "./RevoltFlux/utils/fetch";
import { LoginBody, LoginResponse, Status, UserInfo } from "./utils/Types";

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

export async function setStatus(status: string) {
    let statusTemplate: Status = {
        
    }
    const session = sessionKey.get() || "";
    const dat = await FromAPI("/users/@me", undefined, session) as UserInfo;

    statusTemplate = dat.status || {};

    statusTemplate.text = status;

    await FromAPI("/users/@me", {status: statusTemplate}, session, "PATCH");
}
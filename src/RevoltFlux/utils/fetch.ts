import { RevoltAPI } from "../globals";

/**
 * @description Send a customized request to Revolt's API without the need for 200 functions.
 * @param path - The API router path (example: /auth/session/login)
 * @param data - Data to send through API, has to be in JSON.
 * @param sessionCode - Send a session code, required for protected calls.
 */
export async function FromAPI(path: string, data?: any, sessionCode?: string, method?: string) : Promise<any> {
    const url = `${RevoltAPI}${path}`
    let headers: Record<string, string> = {
        "Content-Type": "application/json"
    }

    if(sessionCode) {
        headers["x-session-token"] = sessionCode;
    }


    const options: RequestInit = {
        method: method ? method : data ? "POST" : "GET",
        headers: headers,
        body: data ? JSON.stringify(data) : undefined
    }

    try {
        const resp = await fetch(url, options);

        if(!resp.ok) {
            throw new Error(`API ${resp.status}`)
        }

        const respDat = await resp.json();
        return respDat;
    } catch (error) {
        console.log(`Error on API call. ${error}`)
    }
}
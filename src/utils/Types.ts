/*
    Easy way to handle types :p
*/

import { components } from "../RevoltFlux/types";

export type LoginBody = components["schemas"]["DataLogin"]
export type LoginResponse = components["schemas"]["ResponseLogin"]
export type UserInfo = components["schemas"]["User"]
export type Status = components["schemas"]["UserStatus"]
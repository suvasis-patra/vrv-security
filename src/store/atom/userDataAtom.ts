import { atom } from "recoil";

import { TUser, users } from "@/constants";

export const userDetailsAtom = atom<TUser[]>({
  key: "userDetails",
  default: users,
});

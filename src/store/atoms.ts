import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { TUserProfileAtom } from "./atoms.types";

export const openModalAtom = atom(false);

export const userProfileAtom = atomWithStorage<TUserProfileAtom | null>(
  "userProfile",
  null
);

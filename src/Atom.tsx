import { atom, selector } from "recoil";

export const musicPlayState = atom({
  key: "musicPlayToggle",
  default: false,
});

import { atom, selector } from "recoil";

export const ShowVolState = atom({
  key: "showVolToggle",
  default: false,
});

export const MusicVolState = atom({
  key: "musicVol",
  default: 0.5,
});

export const audioState = atom<HTMLAudioElement | undefined>({
  key: "audioState",
  default: undefined,
});

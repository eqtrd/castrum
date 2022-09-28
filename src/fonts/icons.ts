export type IconsId =
  | "smile";

export type IconsKey =
  | "Smile";

export enum Icons {
  Smile = "smile",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Smile]: "61697",
};

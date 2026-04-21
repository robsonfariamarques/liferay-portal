import { ACTION_ID } from "../utils/constants";

export type ActionId = typeof ACTION_ID[keyof typeof ACTION_ID];
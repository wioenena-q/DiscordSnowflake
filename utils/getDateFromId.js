import { DISCORD_EPOCH } from "./constants";

export function getDateFromId(id, algorithmType) {
  let timestamp;
  switch (algorithmType) {
    case "bigint":
      timestamp = parseInt((BigInt(id) >> 22n) + BigInt(DISCORD_EPOCH));
      break;
    default:
      const binary = (+id).toString(2).padStart(64, "0").slice(0, -22);
      const decimal = parseInt(binary, 2);
      timestamp = decimal + DISCORD_EPOCH;
      break;
  }
  return new Date(timestamp).toString();
}

import { DISCORD_EPOCH } from "./constants";

export function generateCode(algorithmType, id) {
  switch (algorithmType) {
    case "bigint":
      return `const timestamp =
  (${!!id ? id : 0}n >> 22n) + ${DISCORD_EPOCH}n;
const date = new Date(parseInt(timestamp))`;
    default:
      return `const binary = ${!!id ? id : 0}..toString(2)
      .padStart(64, "0")
      .slice(0, -22);
const decimal = parseInt(binary, 2);
const timestamp = decimal + ${DISCORD_EPOCH};
const date = new Date(timestamp);`;
  }
}

import { createContext } from "react";

export const AlgorithTypeContext = createContext({
  algorithmType: "bigint",
  setAlgorithmType: () => {},
});

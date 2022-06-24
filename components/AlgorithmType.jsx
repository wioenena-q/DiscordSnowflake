import React, { useContext } from "react";
import { AlgorithTypeContext } from "../contexts/AlgorithTypeContext";

const AlgorithmType = () => {
  const { algorithmType, setAlgorithmType } = useContext(AlgorithTypeContext);
  return (
    <form className="flex flex-col gap-y-2 items-center justify-center h-1/3 w-9/12 bg-black/40 rounded select-none">
      <h1>Algorithm Type</h1>
      <div className="flex gap-2 items-center text-lg sm:text-3xl">
        <label className="flex items-center gap-x-1 cursor-pointer">
          <input
            type="radio"
            name="algorithmType"
            defaultChecked={algorithmType === "bigint"}
            onClick={() => {
              setAlgorithmType("bigint");
            }}
            className="cursor-pointer"
          />
          BigInt
        </label>
        <label className="flex items-center gap-x-1 cursor-pointer">
          <input
            type="radio"
            name="algorithmType"
            onClick={() => {
              setAlgorithmType("binary");
            }}
            className="cursor-pointer"
          />
          Binary
        </label>
      </div>
    </form>
  );
};

export default AlgorithmType;

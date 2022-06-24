import { useState } from "react";
import DiscordID from "../components/DiscordID";
import AlgorithmType from "../components/AlgorithmType";

import { AlgorithTypeContext } from "../contexts/AlgorithTypeContext";
import { DiscordIDContext } from "../contexts/DiscordIDContext";
import { generateCode } from "../utils/generateCode";
import Code from "../components/Code";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [id, setId] = useState("175928847299117063");
  const [algorithmType, setAlgorithmType] = useState("bigint");

  return (
    <div className="w-full h-screen bg-zinc-900 text-green-500 text-4xl">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            backgroundColor: "#121212",
            color: "#fff",
            fontSize: "1rem",
          },
        }}
      />
      <div className="flex flex-col gap-y-3 items-center justify-evenly h-full py-5">
        <DiscordIDContext.Provider
          value={{
            id,
            setId,
          }}
        >
          <DiscordID />
          <AlgorithTypeContext.Provider
            value={{
              algorithmType,
              setAlgorithmType,
            }}
          >
            <AlgorithmType />
            <Code />
          </AlgorithTypeContext.Provider>
        </DiscordIDContext.Provider>
      </div>
    </div>
  );
}

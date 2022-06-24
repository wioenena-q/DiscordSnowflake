import { useContext, useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { VscDebugStart, VscCopy } from "react-icons/vsc";
import { toast } from "react-hot-toast";

import { AlgorithTypeContext } from "../contexts/AlgorithTypeContext";
import { DiscordIDContext } from "../contexts/DiscordIDContext";
import { generateCode } from "../utils/generateCode";
import { getDateFromId } from "../utils/getDateFromId";

const Code = () => {
  const { id } = useContext(DiscordIDContext);
  const { algorithmType } = useContext(AlgorithTypeContext);
  const [code, setCode] = useState(generateCode(algorithmType, id));

  useEffect(() => {
    setCode(generateCode(algorithmType, id));
  }, [algorithmType, id]);

  return (
    <>
      <div className="flex flex-col justify-between h-1/3 bg-black/40 w-9/12 rounded select-none">
        <SyntaxHighlighter
          className="!bg-transparent text-xs md:text-xl lg:text-2xl"
          language="javascript"
          style={dracula}
        >
          {code}
        </SyntaxHighlighter>
        <div className="flex justify-end mb-2 mr-2 gap-2 text-6xl">
          <VscCopy
            className="cursor-pointer text-green-500/50 hover:text-green-500 transition-colors duration-500"
            onClick={() => {
              navigator.clipboard.writeText(code);
              toast("🦄 Copied to clipboard!");
            }}
          />
          <VscDebugStart
            className="cursor-pointer text-green-500/50 hover:text-green-500 transition-colors duration-500"
            onClick={() => {
              if (id === "") {
                toast("🦄 You need to set your Discord ID first!");
              } else toast(`🦄 ${getDateFromId(id, algorithmType)}`);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Code;

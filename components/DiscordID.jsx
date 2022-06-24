import { useContext } from "react";
import { DiscordIDContext } from "../contexts/DiscordIDContext";

const DiscordID = () => {
  const { id, setId } = useContext(DiscordIDContext);
  let timer = null;
  return (
    <form className="flex flex-wrap flex-col gap-y-5 justify-center items-center h-1/3 w-9/12 bg-black/40 rounded">
      <h1 className="select-none">Discord ID</h1>
      <input
        value={id}
        className="bg-green-500/10 focus-visible:outline-none px-3 py-2 rounded text-lg sm:text-4xl placeholder-red-500 invalid:text-red-500"
        onChange={(e) => {
          const { value } = e.target;
          if (+value === +value) setId(value);
          else if (value === "") {
            e.target.placeholder = "";
          } else {
            e.target.placeholder = "Please enter a number";
            if (timer === null) {
              timer = setTimeout(() => {
                e.target.placeholder = "";
                timer = null;
              }, 1000);
            }
          }
        }}
        minLength="18"
        maxLength="18"
      />
    </form>
  );
};

export default DiscordID;

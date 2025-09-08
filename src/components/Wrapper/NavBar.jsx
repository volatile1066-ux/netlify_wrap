import { useState } from "react";
import Link from "./Link";

const NavBar = () => {
  const [url, setUrl] = useState("");
  const [input, setInput] = useState("");

  return (
    <div>
      <Link key="1" setUrl={setUrl} link={"https://freefy.app/discover"} />
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => setUrl(input)}>🚀</button>
      </div>
      <iframe
        title="test"
        style={{ width: "100vw", height: "90vh" }}
        allowFullScreen={true}
        src={url}
      ></iframe>
    </div>
  );
};

export default NavBar;

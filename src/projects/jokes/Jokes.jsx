import React, { useEffect, useState } from "react";
import { jokes } from "../../jokes";

function Jokes() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(jokes);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "teal", padding: "10px" }}>
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "white",
                padding: "5px",
                margin: "15px 0px",
              }}
            >
              <h1>{item.setup}</h1>
              <p>{item.punchline}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Jokes;

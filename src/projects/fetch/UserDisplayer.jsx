import React, { useEffect, useState } from "react";

function UserDisplayer() {
  const [data, setData] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://randomuser.me/api/0.8/?results=10");
        const d = await res.json();
        setData(d.results);
      } catch (err) {
        console.error("Failed to fetch", err);
      }
    }
    getData();
  }, [isClicked]);

  return (
    <section className="p-10">
      <div className="ml-[45%]">
        <button
          className="cursor-pointer p-5 bg-red-500 text-white"
          onClick={() => setIsClicked((prev) => !prev)}
        >
          Fetch Random
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {data &&
          data.map((user) => (
            <div
              key={user.user.dob}
              className="flex flex-col justify-center items-start  border border-gray-400 rounded-2xl"
            >
              {isHover ? (
                <span className="p-5">
                  <h1 className="text-red-500 font-bold text-xl">
                    More informations here
                  </h1>
                  <ul>
                    <li>
                      <span className="font-bold">Name:</span>{" "}
                      {user.user.name.first} {user.user.name.last}
                    </li>
                    <li>
                      <span className="font-bold">Phone no:</span>{" "}
                      {user.user.phone}
                    </li>
                    <li>
                      <span className="font-bold">Gender:</span>{" "}
                      {user.user.gender}
                    </li>
                    <li>
                      <span className="font-bold">City:</span>{" "}
                      {user.user.location.city}
                    </li>
                  </ul>
                </span>
              ) : (
                <>
                  <img
                    src={user.user.picture.large}
                    alt=""
                    className="w-full rounded-t-2xl"
                  />
                  <div className="p-5">
                    <h1 className="">
                      {user.user.name.first} {user.user.name.last}
                    </h1>
                    <p>{user.user.email}</p>
                  </div>
                </>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}

export default UserDisplayer;

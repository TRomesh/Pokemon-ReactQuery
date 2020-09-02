import React, { useState } from "react";
import { useMutation } from "react-query";

function Pokemon() {
  const [name, setName] = useState("");

  const [mutateCreate, { error, reset }] = useMutation(
    (text) => axios.post("/api/data", { text }),
    {
      onSuccess: () => {
        setName("");
      },
    }
  );

  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          mutateCreate(name);
        }}
      >
        {error && <h5 onClick={() => reset()}>{error}</h5>}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          placeholder="Username"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create Pokemon
        </button>
      </form>
    </div>
  );
}

export default Pokemon;

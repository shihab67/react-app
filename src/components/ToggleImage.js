import React, { useState } from "react";

export default function ToggleImage() {
    const [title, setTitle] = useState("Hello react App!");
    const [isShowing, setIsShowing] = useState(false);

    function handleClick() {
        setIsShowing(!isShowing);
      }
  return (
    <section className="flex justify-center text-center py-5 my-5">
      <div className="w-1/2">
        <div className="my-4 w3-purple text-lg">
          <h3>{title}</h3>
        </div>
        <div>
          <button
            className="btn btn-outline-primary my-4"
            onClick={handleClick}
          >
            Toggle Image
          </button>
        </div>
        {isShowing ? (
          <img
            src="https://images.unsplash.com/photo-1610282356727-c3a6442630de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        ) : null}
      </div>
    </section>
  );
}

import React from "react";

export default function Banner({ image }) {
  return (
    <div class="text-center">
      <img
        src={`/images/${image}.png`}
        alt="Ad Banner"
        className="mx-auto min-w-full max-h-[100px]"
      />
    </div>
  );
}

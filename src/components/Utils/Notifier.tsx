import BellIcon from "@heroicons/react/24/outline/BellIcon";
import React from "react";
const Notifier = ({ count }) => {
  return (
    <button
      type="button"
      className={
        count
          ? "bg-red-500"
          : "rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      }
    >
      <span className="sr-only">{count}</span>
      <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default Notifier;

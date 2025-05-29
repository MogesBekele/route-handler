"use client";

import { useFormStatus } from "react-dom";

export const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};
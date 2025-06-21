"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  type: "create" | "update";
}

export function SubmitButton({ type }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`cursor-pointer px-4 py-2 bg-gray-900 text-white rounded-3xl hover:bg-gray-700 transition ${
        pending && "opacity-70"
      }`}
    >
      {pending ? (
        <>{type === "update" ? "Updating..." : "Creating..."}</>
      ) : (
        <>{type === "update" ? "Update" : "Create"} Blog</>
      )}
    </button>
  );
}

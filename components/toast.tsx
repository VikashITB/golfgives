"use client";

type ToastProps = {
  message: string;
  type?: "success" | "error";
};

export default function Toast({
  message,
  type = "success"
}: ToastProps) {
  return (
    <div
      className={`fixed bottom-5 right-5 rounded-2xl px-5 py-3 text-sm font-medium text-white shadow-soft ${
        type === "success"
          ? "bg-brand"
          : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
}

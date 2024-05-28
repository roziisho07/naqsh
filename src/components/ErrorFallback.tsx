"use client";
import React from "react";
import { FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="bg-red-100 p-4 rounded">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorFallback;

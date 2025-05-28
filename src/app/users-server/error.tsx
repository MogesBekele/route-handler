
"use client";
export default function ErroHandle(){
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-red-500 text-2xl">
        <h1>Something went wrong!</h1>
        <p>Please try again later.</p>
      </div>
    </div>
  );
}
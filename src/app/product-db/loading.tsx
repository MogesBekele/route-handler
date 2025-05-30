export default function Loading(){
  return(
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
      <h1 className="text-gray-700 text-xl font-semibold">Loading Product Database...</h1>
    </div>

  )
}
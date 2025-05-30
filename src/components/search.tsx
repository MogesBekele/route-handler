import Form from 'next/form';
export const Search = () => {
  return (
    <form action="/product-db" className="w-full flex gap-2">
      <input
        type="text"
        name="query"
        className="flex-1 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required
        placeholder="Enter search term"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
};
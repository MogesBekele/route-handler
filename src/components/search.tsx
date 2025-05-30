import Form from 'next/form';
export const Search = () => {
  return(

    <Form action="/product-db">
      <div className="bg-gray-50 min-h-screen flex items-center justify-center text-black">
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-extrabold mb-6 text-blue-800 text-center">
            Search
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Search Query
              </label>
              <input
                type="text"
                name="query"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                placeholder="Enter search term"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
             Submit
            </button>
          </div>
        </div>
      </div>
    </Form>
  )
}
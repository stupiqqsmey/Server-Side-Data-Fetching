export default function Card( ) {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
        </header>

        <div className="mt-8 block lg:hidden">
          <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-sm font-medium"> Filters &amp; Sorting </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 rtl:rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-4 lg:block">
            <div>
              <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label>
              <select id="SortBy" className="mt-1 rounded-sm border-gray-300 text-sm">
                <option>Sort By</option>
                <option value="Title, DESC">Title, DESC</option>
                <option value="Title, ASC">Title, ASC</option>
                <option value="Price, DESC">Price, DESC</option>
                <option value="Price, ASC">Price, ASC</option>
              </select>
            </div>

            <div>
              <p className="block text-xs font-medium text-gray-700">Filters</p>
              <div className="mt-1 space-y-2">
                <details className="overflow-hidden rounded-sm border border-gray-300">
                  <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                    <span className="text-sm font-medium"> Availability </span>
                  </summary>

                  <div className="border-t border-gray-200 bg-white p-4">
                    <ul className="space-y-1">
                      <li>
                        <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                          <input type="checkbox" id="FilterInStock" className="size-5 rounded-sm border-gray-300" />
                          <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>
                {/* Repeat similar fixes for Price and Color details... */}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <li>
                <a href="#" className="group block overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1160" 
                    alt="Basic Tee" 
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96" 
                  />
                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline">Basic Tee</h3>
                    <p className="mt-2 text-gray-900">£24.00 GBP</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
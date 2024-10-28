const Cards = () => {
  return (
    <aside className="m-12">
      <div className="max-w-md  px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            { Date().slice(0,15)}
          </span>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            tabindex="0"
            role="button"
          >
            Latest
          </a>
        </div>

        <div className="mt-2">
          <a
            href="#"
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            tabindex="0"
            role="link"
          >
            Total Capsules
          </a>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
           19
            
          </p>
        </div>

     
      </div>
    </aside>
  );
};

export default Cards;

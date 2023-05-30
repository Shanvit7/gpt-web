const TopNavbar=({ pageTitle = 'College GPT' })=>{
    return(
        <nav className="bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <div className="flex-shrink-0">
              <a href="#" className="text-black font-bold text-lg">{pageTitle}</a>
            </div>
          
            <div className="hidden sm:block">
              <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Tools</a>
                <a href="#" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
                <a href="#" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">FAQs</a>
              </div>
            </div>
      
            <div className="flex sm:hidden">
              <button type="button" className="text-black hover:text-gray-600 focus:outline-none focus:text-black">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
    );
};

export default TopNavbar;
const BasicButton = ({ text }) => {
  return (
    <button className="bg-white text-black border-2 border-gray-900 hover:bg-gray-100 hover:text-gray-900 font-bold py-2 px-4 rounded-md transition-all duration-300 shadow-md focus:outline-none active:transform active:scale-95">
     {text}
    </button>
  );
};

export default BasicButton;

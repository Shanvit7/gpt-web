/********* HELPERS **********/
import Link from "next/link";
/********* COMPONENTS **********/
import DropdownCaret from "../Icons/DropdownCaret";

const TopNavDropdown = ({ options,isDropdownOpen }) => {
  return (
    <div className="relative">
      <div className="ml-2 mt-1 focus:outline-none">
        <DropdownCaret isUp={isDropdownOpen} />
      </div>
      {isDropdownOpen && (
        <ul className="absolute mt-2 py-2 w-40 bg-white border rounded-md shadow-lg">
          {options.map((option, index) => (
            <li key={index}>
              <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href={option.url}>
                  {option.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopNavDropdown;


import { FC, useState, useRef, useEffect } from "react";

interface OptionsProp {
  label: string;
  value: string;
}
interface SelectProp {
  options: OptionsProp[];
  isSearchable?: boolean;
}

const Select: FC<SelectProp> = ({ options, isSearchable = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState<OptionsProp>();
  const openDropdown = () => {
    setIsOpen(true);
    if(inputRef && inputRef.current){
      inputRef.current.focus()
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleOptionSelect = (value: OptionsProp) => {
    setSelectedOption(value);
    closeDropdown();
    setSearch(""); // Clear search on selection
  };
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  const showSelectedOptionLabel = ()=> {
    const result = options.find((option)=> option.value === selectedOption?.value)
    return result?.label;
  }
  return (
    <div ref={selectRef} className="relative inline-block w-full">
      <div
        className="h-12 block w-full px-[30px] leading-[3rem] border border-[#9ca3af] cursor-pointer"
        onClick={openDropdown}
      >
        {isOpen && isSearchable && <input
          type="text"
          readOnly={!isSearchable}
          autoComplete="none"
          className="h-full block w-full px-[30px] focus-within:outline-none focus:outline-none focus-visible:outline-none "
          placeholder={showSelectedOptionLabel() || "Search..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={openDropdown}
          ref={inputRef}
        />}
        {selectedOption && showSelectedOptionLabel()}
      </div>
      {isOpen && (
        <div className="inline-block w-full transform origin-bottom z-2030 absolute top-290 left-42 border border-solid border-gray-300 rounded bg-white shadow-md box-border my-1">
          <div className="overflow-scroll h-full max-h-[274px]">
            <ul className="list-none py-6 my-0 box-border">
              {filteredOptions.map((option, index) => {
                return (
                  <li
                    className="text-14 px-[60px] relative whitespace-nowrap overflow-hidden overflow-ellipsis text-gray-700 h-[34px] leading-34 cursor-pointer box-border hover:bg-[#f3f4f6]"
                    onClick={() => handleOptionSelect(option)}
                    key={index}
                  >
                    {option.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;

import React, {
  ChangeEventHandler,
  FormEventHandler,
  ReactElement,
  ReactFragment,
} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

type inputInnerItem = HTMLElement | ReactElement | ReactFragment | string;

interface InputInterface {
  /** Specifies the input type */
  inputType: string;
  /**The name of the input field for submission */
  inputName?: string;
  /**Text to display above the input field */
  label: string;
  /** Other props that can be added.*/
  props?: any;
  /**Specify the input placeholder */
  placeholder?: string;
  /**Item to display at the inner left of the input field
   * The item can be HTMLElement, a string or ReactElement/Component
   */
  leftComponent?: inputInnerItem;
  /**Item to display at the inner right of the input field
   * The item can be HTMLElement, a string or ReactElement/Component
   */
  rightComponent?: inputInnerItem;

  /**Input change funciton handler */
  onChange: ChangeEventHandler;

  /**Event fired when the enter key is pressed or the input is submitted */
  onSubmit?: FormEventHandler;
}

/** Add Product Field
 */
const InputField = ({
  inputType,
  label,
  placeholder,
  inputName,
  leftComponent,
  rightComponent,
  onSubmit,
  onChange,
}: InputInterface) => {
  let inputClass =
    "block py-3 px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border outline-none border-gray-300 focus:border-gray-400 focus:bg-white transition-all duration-300";

  if (leftComponent && rightComponent) {
    inputClass = inputClass + " pr-8 pl-8";
  } else if (rightComponent) {
    inputClass = inputClass + " pr-8";
  } else if (leftComponent) {
    inputClass = inputClass + " pl-8";
  } else {
    inputClass;
  }

  return (
    <div className="my-4 w-full rounded-none">
      {label && (
        <span className="block tracking-tight text-primary-text">{label}</span>
      )}
      <div className="relative w-full md:w-[400px] lg:w-[500px] transition-all duration-300">
        <input
          type={inputType}
          id="default-search"
          name={inputName}
          placeholder={placeholder}
          className={inputClass}
          onChange={onChange}
          onSubmit={onSubmit}
        />
        {rightComponent && (
          <div className="absolute right-1 bottom-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg">
            {rightComponent}
          </div>
        )}
        {leftComponent && (
          <div className="absolute left-1 bottom-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg">
            {leftComponent}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;

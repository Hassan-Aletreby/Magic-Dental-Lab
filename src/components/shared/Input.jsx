import { useState } from "react";

function Input({
  label,
  value = "",
  onChange,
  type,
  placeholder,
  required = false,
  error = false,
  errorMessage = "",
}) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-white text-start block mb-2">
          {label}
          {/* {required && <span className="text-red-700">*</span>} */}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={handleInputChange}
        className={`w-full p-3 bg-[#101010d8] text-white rounded-lg ${
          error ? "border-2 border-red-700" : ""
        }`}
        placeholder={placeholder}
      />
      {error && (
        <p className="text-red-700 text-sm text-start mt-1">* {errorMessage}</p>
      )}
    </div>
  );
}

export default Input;

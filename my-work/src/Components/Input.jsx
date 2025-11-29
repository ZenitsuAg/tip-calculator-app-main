import { useState } from "react";

export default function Input({ src, alt, onChange, step, className, placeholder, value }) {
  // const [value, setValue] = useState("");

  return (
    <div className={`${className} rounded overflow-hidden border border-very-light-grayish-cyan`}>
      <img className="pl-4 object-none" src={src} alt={alt} />
      <input
        type="number"
        step={step}
        min={0}
        className="outline-none p-3 bg-very-light-grayish-cyan text-right w-full text-very-dark-cyan text-xl"
        onChange={onChange}
        pattern="/[0-9]+/"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );

  // function HandleInputChange(e) {
  //   setValue(e.target.value);
  // }
}

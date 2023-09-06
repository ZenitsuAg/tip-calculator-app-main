import { useState } from "react";

export default function Input({ src, alt, onChange, step, className }) {
  // const [value, setValue] = useState("");

  return (
    <div className={className}>
      <img className="pl-2 object-none" src={src} alt={alt} />
      <input
        type="number"
        step={step}
        min={0}
        className="outline-none p-3 bg-very-light-grayish-cyan text-right w-full text-very-dark-cyan text-xl"
        onChange={onChange}
        pattern="/[0-9]+/"
        
        // value={value}
      />
    </div>
  );

  // function HandleInputChange(e) {
  //   setValue(e.target.value);
  // }
}

import {useState, useRef, useEffect, Fragment} from 'react'

export default function Button({ btnValue, className, onClick, btnClick }) {
  return (
    <button className={className} onClick={() => onClick(btnValue, btnClick)}>
      {typeof btnValue === 'string' ? btnValue : `${btnValue}%`}
    </button>
  );
}

export function CustomButton({ onClick }) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  function handleClick(btnValue) {
    setInputVisible(!isInputVisible);
    // You can access btnValue here and do whatever you need with it
    console.log('btnValue:', btnValue);
    // Call the provided onClick callback with the btnValue
    onClick(btnValue);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setInputVisible(false);
    }
  }

  useEffect(() => {
    if (isInputVisible) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  return (
    <Fragment>
      {isInputVisible ? (
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="bg-very-light-grayish-cyan rounded-sm mt-1 outline-none focus:outline-strong-cyan focus:outline-1 p-1 w-full text-right object-fit"
        />
      ) : (
        <Button
          btnValue={inputValue.trim() === '' ? 'Custom' : parseFloat(inputValue)}
          className="btn w-full hover:border-strong-cyan bg-very-light-grayish-cyan text-grayish-cyan"
          onClick={handleClick}
        />
      )}
    </Fragment>
  );
}
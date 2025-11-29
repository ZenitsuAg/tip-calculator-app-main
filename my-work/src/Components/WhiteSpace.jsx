import {useState} from 'react'
import Button from './Button'
import Input from './Input'
import dollarsign from '../assets/images/icon-dollar.svg'
import iconPerson from '../assets/images/icon-person.svg'
import TipResults from './TipResults'

export default function WhiteSpace() {
  const [bill, setBill] = useState(0)
  const [person, setPerson] = useState(0)
  const [percentage, setPercentage] = useState(0)

  // Function to update btnValue
  function handlePercentage(btnValue) {
    if (typeof btnValue !== 'string') {
      setPercentage((btnValue = btnValue / 100))
    }
  }

  function handleReset() {
    setBill(0)
    setPercentage(0)
    setPerson('')
  }

  // The logic for the tip calculator
  const tipAmount = percentage * bill
  const tipAmountPerPerson = (tipAmount / person).toFixed(2)
  const total = (bill / person + parseFloat(tipAmountPerPerson)).toFixed(2)

  return (
    <div className="bg-white p-10 rounded-t-2xl md:p-8 md:rounded-3xl text-dark-grayish-cyan text-base text-left h-2/3 md:flex md:flex-row md:gap-0 md:min-w-[70%]">
      <div className="w-full md:pr-9">
        {/* The Bill input */}
        <h1 className="my-3">Bill</h1>
        <Input
          className="input md:mb-8"
          src={dollarsign}
          alt={'Dollar sign'}
          onChange={(e) => setBill(e.target.value)}
          step={'0.01'}
          placeholder={0}
          value={bill ? bill : ''}
        />

        {/* The tip percentage buttons */}
        <h1>Select Tip %</h1>
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 w-full text-2xl md:mb-8">
          <Button
            btnValue={5}
            className={`btn ${percentage * 100 == 5 && 'active'}`}
            onClick={handlePercentage}
          />
          <Button
            btnValue={10}
            className={`btn ${percentage * 100 == 10 && 'active'}`}
            onClick={handlePercentage}
          />
          <Button
            btnValue={15}
            className={`btn ${percentage * 100 == 15 && 'active'}`}
            onClick={handlePercentage}
          />
          <Button
            btnValue={20}
            className={`btn ${percentage * 100 == 20 && 'active'}`}
            onClick={handlePercentage}
          />
          <Button
            btnValue={25}
            className={`btn ${percentage * 100 == 25 && 'active'}`}
            onClick={handlePercentage}
          />
          <input
            placeholder="Custom"
            className="input lg:w-[100px] text-2xl placeholder:text-xl placeholder:text-center placeholder:text-grayish-cyan p-2 text-right"
            onChange={(e) => setPercentage(e.target.value / 100)}
          />
        </div>

        {/* The Person input with conditional logic */}
        <div className="mt-3 flex items-center justify-between">
          <h1 className="my-4">Number of People</h1>
          {person == 0 && total == 'NaN' && person != '' && (
            <p className="text-red-600">Can't be zero</p>
          )}
        </div>
        <Input
          className={person == 0 ? 'input focus-within:outline-red-600' : 'input'}
          src={iconPerson}
          alt={'Person icon'}
          onChange={(e) => setPerson(e.target.value)}
          step={'0'}
          placeholder={'0'}
          value={person}
        />
      </div>
      <div className="rounded-lg bg-very-dark-cyan p-4 px-6 md:px-10 mt-2 text-very-light-grayish-cyan w-full flex flex-col justify-between">
        <div className="mt-2">
          <TipResults
            moneyAbout={'Tip Amount'}
            moneyValue={tipAmountPerPerson === 'NaN' ? '0.00' : tipAmountPerPerson}
          />
          <TipResults moneyAbout={'Total'} moneyValue={total === 'NaN' ? '0.00' : total} />
        </div>

        {/* The Reset button */}
        <Button
          btnValue={'RESET'}
          className="btn w-full mt-2 bg-strong-cyan text-very-dark-cyan mb-4"
          onClick={handleReset}
        />
      </div>
    </div>
  )
}

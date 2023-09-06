import {useState} from 'react'
import Button from './Button'
import Input from './Input'
import {CustomButton} from './Button'
import dollarsign from '../assets/images/icon-dollar.svg'
import iconPerson from '../assets/images/icon-person.svg'
import TipResults from './TipResults'

export default function WhiteSpace() {
  const [bill, setBill] = useState(0)
  const [person, setPerson] = useState(1)
  const [percentage, setPercentage] = useState(0)

  function handleBill(e) {
    setBill(e.target.value)
  }

  function HandlePerson(e) {
    setPerson(e.target.value)
  }

  // Function to update btnValue
  function handlePercentage(btnValue) {
    if (typeof btnValue !== 'string') {
      setPercentage((btnValue = btnValue / 100))
    }
  }

  function handleReset() {
    setBill(0)
    setPercentage(0)
    setPerson(1)
  }

  // The logic for the tip calculator
  const tipAmount = percentage * bill
  const tipAmountPerPerson = (tipAmount / person).toFixed(2)
  const total = (bill / person + parseFloat(tipAmountPerPerson)).toFixed(2)

  return (
    <div className="bg-white p-10 rounded-t-2xl md:p-8 md:rounded-3xl text-dark-grayish-cyan text-base text-left h-2/3 md:flex md:flex-row md:gap-0 md:min-w-[60%]">
      <div className="w-full md:pr-9">
        {/* The Bill input */}
        <h1 className="mt-3">Bill</h1>
        <Input
          className="input"
          src={dollarsign}
          alt={'Dollar sign'}
          onChange={handleBill}
          step={'0.01'}
        />

        {/* The tip percentage buttons */}
        <h1>Select Tip %</h1>
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 w-full">
          <Button btnValue={5} className="btn" onClick={handlePercentage} />
          <Button btnValue={10} className="btn" onClick={handlePercentage} />
          <Button btnValue={15} className="btn" onClick={handlePercentage} />
          <Button btnValue={20} className="btn" onClick={handlePercentage} />
          <Button btnValue={25} className="btn" onClick={handlePercentage} />
          <CustomButton onClick={handlePercentage} />
        </div>

        {/* The Person input with conditional logic */}
        <div className="mt-3 flex items-center justify-between">
          <h1>Number of People</h1>
          {person == 0 && <p className="text-red-600">Can't be zero</p>}
        </div>
        <Input
          className={person == 0 ? 'input focus-within:outline-red-600' : 'input'}
          src={iconPerson}
          alt={'Person icon'}
          onChange={HandlePerson}
          step={'0'}
        />
      </div>
      <div className="rounded-lg bg-very-dark-cyan p-4 mt-2 text-very-light-grayish-cyan w-full flex flex-col justify-between">
        <div>
          <TipResults moneyAbout={'Tip Amount'} moneyValue={tipAmountPerPerson} />
          <TipResults moneyAbout={'Total'} moneyValue={total} />
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

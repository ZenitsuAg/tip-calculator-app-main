export default function TipResults({ moneyAbout, moneyValue }) {
    return (
        <div className="flex justify-between py-3 mt-3">
          <div>
            <p className="text-sm">{moneyAbout}</p>
            <p className="text-xs text-dark-grayish-cyan">/ person</p>
          </div>
          <div className="font-bold text-5xl text-strong-cyan">${moneyValue}</div>
        </div>
    );
}
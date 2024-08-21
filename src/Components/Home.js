import React, { useEffect, useState } from "react";
import "../Styling/Home.scss";
import { CalculateTax } from "../utils/Calculation";

//Tables

const Home = () => {
  const [income, setIncome] = useState("");
  const [taxDetails, setTaxDetails] = useState(null);

  const handleInputChange = (e) => {
    setIncome(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    const result = CalculateTax(income);
    setTaxDetails(result);
    setIncome("");
  };
  useEffect(() => {
    console.log("taxDetails state updated:", taxDetails);
  }, [taxDetails]);
  return (
    <div className="Main-Section">
      <div className="Calculator-Section">
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Enter Amount"
            name="amount"
            value={income}
            onChange={handleInputChange}
          ></input>
          <button>Calculate</button>
        </form>
      </div>
      <div className="Result-Section">
        <h2>New regime fY-2024-25</h2>
        <table>
          <thead>
            <tr>
              <th>Tax Slab </th>
              <th>Tax Rate</th>
              <th>Income Breakdown</th>
              <th>Tax Breakdown</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0 to 3lakhs</td>
              <td>Nil</td>
              <td>
                {taxDetails !== null && taxDetails.breakdown.length >= 1
                  ? taxDetails.breakdown[0]?.incomeBreakDown
                  : "Nill"}
              </td>
              <td>
                {taxDetails !== null && taxDetails.breakdown.length >= 1
                  ? taxDetails.breakdown[0]?.tax
                  : "Nill"}
              </td>
            </tr>
            <tr>
              <td>3lakhs to 7lakhs</td>
              <td>5%</td>
              <td>
                {taxDetails !== null && taxDetails.breakdown.length >= 2
                  ? taxDetails.breakdown[1]?.incomeBreakDown
                  : "Nill"}
              </td>
              <td>
                {taxDetails !== null && taxDetails.breakdown.length >= 2
                  ? taxDetails.breakdown[1]?.tax
                  : "Nill"}
              </td>
            </tr>
            <tr>
              <td>7lakhs to 10lakhs</td>
              <td>10%</td>
              <td>
                {taxDetails !== null && taxDetails.breakdown.length >= 3
                  ? taxDetails.breakdown[2]?.incomeBreakDown
                  : "Nill"}
              </td>
              <td>
                {taxDetails !== null && taxDetails.breakdown.length >= 3
                  ? taxDetails.breakdown[2]?.tax
                  : "Nill"}
              </td>
            </tr>
            <tr>
              <td>10lakhs to 12lakhs</td>
              <td>15%</td>
              <td>
                {taxDetails !== null && taxDetails.breakdown.length >= 4
                  ? taxDetails.breakdown[3]?.incomeBreakDown
                  : "Nill"}
              </td>
              <td>
                {taxDetails !== null && taxDetails.breakdown.length >= 4
                  ? taxDetails.breakdown[3]?.tax
                  : "Nill"}
              </td>
            </tr>
            <tr>
              <td>12lakhs to 115lakhs</td>
              <td>20%</td>
              <td>
                {taxDetails !== null && taxDetails.breakdown.length >= 5
                  ? taxDetails.breakdown[4]?.incomeBreakDown
                  : "Nill"}
              </td>
              <td>
                {taxDetails !== null && taxDetails.breakdown.length >= 5
                  ? taxDetails.breakdown[4]?.tax
                  : "Nill"}
              </td>
            </tr>
            <tr>
              <td>15lakhs above</td>
              <td>30%</td>
              <td>
                {taxDetails !== null && taxDetails.breakdown.length >= 6
                  ? taxDetails.breakdown[5]?.incomeBreakDown
                  : "Nill"}
              </td>
              <td>
                {taxDetails !== null && taxDetails.breakdown.length >= 6
                  ? taxDetails.breakdown[5]?.tax
                  : "Nill"}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Grand Total</td>
              <td>{taxDetails?.incomeTotal}</td>
              <td>{taxDetails?.taxTotal}</td>
            </tr>
            <tr>
              <td></td>
              <td>Tax Deduction</td>
              {/* <td>{taxDetails?.incomeTotal}</td> */}
              <td>{taxDetails?.incomeTotal - taxDetails?.taxTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

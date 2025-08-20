export interface IVehicle {
  id: string;
  name: string;
  model: string;
  year: number;
  price: number;
  milage: number;
  colour: string;
}

export interface FinanceQuote {
  onTheRoadPrice: number;
  totalDeposit: number;
  totalAmountOfCredit: number;
  numberOfMonthlyPayments: number;
  monthlyPayment: number;
}

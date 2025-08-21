export interface IVehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  milage: number;
  colour: string;
  imageUrl: string;
}

export interface FinanceQuote {
  onTheRoadPrice: number;
  totalDeposit: number;
  totalAmountOfCredit: number;
  numberOfMonthlyPayments: number;
  monthlyPayment: number;
}

export interface IQueryPayload {
  limit: number;
  make: string;
  sort: Sort;
  orderBy: string;
  page: number;
  offset: number;
}

export interface ISelectOption {
  id: string;
  value: string;
}

export enum Sort {
  desc,
  asc,
}

export const vehicleSortOptions: ISelectOption[] = [
  { id: '0', value: 'Sort' },
  { id: 'price:asc', value: 'Price - Low to High' },
  { id: 'price:desc', value: 'Price - High to Low' },
  { id: 'milage:asc', value: 'Milage - Low to High' },
  { id: 'milage:desc', value: 'Milage - High to Low' },
];
export const termOptionList: ISelectOption[] = [
  { id: '0', value: 'Select' },
  { id: '5', value: '5 months' },
  { id: '10', value: '10 months' },
  { id: '15', value: '15 months' },
  { id: '20', value: '20 months' },
  { id: '25', value: '25 months' },
  { id: '30', value: '30 months' },
  { id: '35', value: '35 months' },
  { id: '40', value: '40 months' },
  { id: '45', value: '45 months' },
  { id: '50', value: '50 months' },
  { id: '55', value: '55 months' },
  { id: '60', value: '60 months' },
];

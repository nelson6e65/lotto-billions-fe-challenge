export interface ILotteryDraw {
  id: string;
  name: string;
  logo: string;
  jackpot: IPrice;
}

export interface ILotteryDrawWithDetails extends ILotteryDraw {
  specification: ILotteryDrawSpecification;
  pricing: IPrice;
}

export interface ILotteryDrawSpecification {
  maxNumbers: number;
  totalNumbers: number;
}

export interface IPrice {
  amount: number;
  currency: string;
}

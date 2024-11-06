import { faker, simpleFaker } from '@faker-js/faker';

/* eslint-disable @typescript-eslint/no-namespace */

export interface ILotteryDraw {
  id: string;
  name: string;
  logo: string;
  jackpot: IPrice;
}

export namespace ILotteryDraw {
  export const generateFakeData = (): ILotteryDraw => {
    const id = simpleFaker.string.uuid();

    return {
      id,
      // logo: `https://picsum.photos/seed/${id}/${faker.number.int({ min: 64, max: 256, multipleOf: 16 })}/${faker.number.int({ min: 64, max: 256, multipleOf: 16 })}`,
      logo: `https://picsum.photos/seed/${id}/256/256`,
      name: 'Probatio ' + faker.lorem.word({ length: { min: 6, max: 8 } }),
      jackpot: {
        amount: faker.number.int({ min: 10000, max: 9999999 }),
        currency: 'PEN',
      },
    };
  };
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

export interface ILotteryTicket {
  id: string;
  drawId: string;
  numbers: number[];
}

import { apiClient, IErrorResponse, ISuccessResponse, tryRequest } from '@/data/http';
import { ILotteryDraw, ILotteryDrawWithDetails, ILotteryTicket } from '@/models/api/lottery-draw';
import { AxiosInstance } from 'axios';

export class LotteryDrawsService {
  protected readonly api: AxiosInstance;

  constructor() {
    this.api = apiClient;
  }

  public async getAll(): Promise<
    [IErrorResponse<unknown | null>, undefined] | [undefined, ISuccessResponse<ILotteryDraw[]>]
  > {
    return await tryRequest<ILotteryDraw[]>(this.api.get('/draws'));
  }

  public async getOne(
    id: string,
  ): Promise<[IErrorResponse<unknown | null>, undefined] | [undefined, ISuccessResponse<ILotteryDrawWithDetails>]> {
    return await tryRequest<ILotteryDrawWithDetails>(this.api.get(`/draws/${id}`));
  }

  public async purchaseTicket(
    lotteryId: string,
    ticketData: { numbers: number[] },
  ): Promise<[IErrorResponse<unknown>, undefined] | [undefined, ISuccessResponse<ILotteryTicket>]> {
    return await tryRequest<ILotteryTicket>(this.api.post(`/draws/${lotteryId}/tickets`, ticketData));
  }
}

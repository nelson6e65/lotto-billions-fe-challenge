import AppCard from '@/components/core/app-card';
import { ILotteryDraw } from '@/models/api/lottery-draw';
import { LotteryDrawsService } from '@/services/lottery-draws.service';

export default async function LotteryDrawItems() {
  const apiService = new LotteryDrawsService();

  const [
    error,
    result,
  ] = await apiService.getAll();

  if (error) {
    return [];
  }

  // console.log(result);
  // Adding artificial elements to simulate many elements

  const data = result?.data ?? [];

  if (data.length < 7) {
    const elementsToAddCount = 7 - data.length;

    // Artificial delay
    await new Promise((resolve) => setTimeout(resolve, elementsToAddCount * 150));

    data.push(
      ...Array.from({ length: elementsToAddCount }).map(() => {
        return ILotteryDraw.generateFakeData();
      }),
    );
  }

  return data.map((lotteryDraw) => {
    return (
      <AppCard
        key={lotteryDraw.id}
        title={lotteryDraw.name}
        subtitle=""
        imageUrl={lotteryDraw.logo}
        href={`/lotteries/${lotteryDraw.id}`}
      >
        <div className="flex h-full min-h-24 grow flex-col items-end text-lg">
          <div className="grow"></div>

          <div className="text-right font-semibold">
            <span className="animate-bounce">Jackpot: </span>

            <span className="animate-pulse font-mono text-sunshade-700">
              {lotteryDraw.jackpot.amount.toLocaleString(undefined, {
                currency: lotteryDraw.jackpot.currency,
                style: 'currency',
              })}
            </span>
          </div>
        </div>
      </AppCard>
    );
  });
}

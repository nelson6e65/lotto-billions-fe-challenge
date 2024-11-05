import { LotteryDrawsService } from '@/services/lottery-draws.service';
import { notFound } from 'next/navigation';

export default async function LotteriesListPage() {
  const apiService = new LotteryDrawsService();

  const [
    error,
    result,
  ] = await apiService.getAll();

  if (error) {
    notFound();
  }

  console.log(result);

  return (
    <div className="p-4">
      <header className="text-center">
        <h1 className="pro">Lotteries list</h1>
      </header>

      <div>List...</div>
    </div>
  );
}

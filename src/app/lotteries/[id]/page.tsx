import AppLink from '@/components/core/app-link';
import { LotteryDrawsService } from '@/services/lottery-draws.service';
import { notFound } from 'next/navigation';

export default async function LotteriesShowPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const apiService = new LotteryDrawsService();

  const [
    error,
    result,
  ] = await apiService.getOne(id);

  if (error) {
    notFound();
  }

  console.log(result);

  return (
    <div className="p-4">
      <h1 className="font-bold">Lottery details</h1>

      <div className="">
        <div>
          Lottery id: <span className="font-bold">{id}</span>
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti rem maxime dicta dolor iste obcaecati
          facere, natus eum ea voluptates voluptas nulla, tempore molestias at saepe doloribus expedita. Cupiditate.
        </div>

        <AppLink color="primary" href={`/lotteries/${id}/purchase`}>
          <span>Purchase</span>
        </AppLink>
      </div>
    </div>
  );
}

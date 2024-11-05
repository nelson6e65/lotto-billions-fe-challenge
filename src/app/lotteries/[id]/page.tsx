import AppLink from '@/components/core/app-link';
import DetailSection from '@/components/core/detail-section';
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

  const data = result.data;

  return (
    <div className="container min-h-full p-2 md:p-4">
      <header className="mb-4 text-center">
        <h1 className="text-3xl font-bold text-sunshade-700">
          {/**/}

          {data.name}
        </h1>
      </header>

      <div className="row-auto grid h-full grid-flow-row grid-cols-1 gap-4 overflow-auto sm:grid-cols-2">
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="inline-block h-56 object-contain drop-shadow sm:h-auto sm:w-full"
            src={data.logo}
            alt={data.name + ' logo'}
          />
        </div>

        <div className="flex h-full flex-col gap-4 p-2">
          <DetailSection title="Pricing">
            <span className="font-mono font-semibold">
              {data.pricing.amount.toLocaleString(undefined, {
                currency: data.pricing.currency,
                style: 'currency',
              })}
            </span>
          </DetailSection>

          <DetailSection title="Jackpot">
            <span className="font-mono font-semibold">
              {data.jackpot.amount.toLocaleString(undefined, {
                currency: data.jackpot.currency,
                style: 'currency',
              })}
            </span>
          </DetailSection>

          <DetailSection title="Total numbers">
            <span className="font-mono font-semibold">
              {data.specification.totalNumbers.toLocaleString(undefined, {
                style: 'decimal',
              })}
            </span>
          </DetailSection>

          <div className="flex-grow"></div>

          <div className="p-2 text-right">
            <AppLink color="primary" href={`/lotteries/${id}/purchase`} className="font-bold">
              Purchase numbers -&gt;
            </AppLink>
          </div>
        </div>
      </div>
    </div>
  );
}

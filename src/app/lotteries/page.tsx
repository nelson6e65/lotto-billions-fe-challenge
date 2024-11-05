import AppCard from '@/components/core/app-card';
import LotteryDrawItems from '@/components/data/lottery-draw-items';
import { Suspense } from 'react';

export default async function LotteriesListPage() {
  const skeletonItems = Array.from({ length: 5 }).map((_value, i) => {
    return <AppCard skeleton key={i}></AppCard>;
  });

  // console.log(loadingItems);

  return (
    <div className="container p-2 md:p-4">
      <header className="mb-4 text-center">
        <h1 className="text-3xl font-bold text-sunshade-700">Available lotteries</h1>
      </header>

      <div className="grid grid-flow-row auto-rows-auto grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <Suspense fallback={skeletonItems}>
          <LotteryDrawItems />
        </Suspense>
      </div>
    </div>
  );
}

import PurchaseLotteryForm from '@/components/forms/purchase-lottery-form';
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

  // async function purchaseAction(ticketData: { numbers: number[] }) {
  //   'use server';
  //
  //   await apiService.purchaseTicket(data.id, ticketData);
  //   // Mutate data
  // }

  return (
    // max-w-screen-md is important for the numbers picker look
    <div className="[ app-page ] flex h-full max-w-screen-md flex-col gap-4 p-4">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-sunshade-700">
          {/**/}
          {data.name}
        </h1>
      </header>

      <PurchaseLotteryForm
        lotteryData={data}

        // onSubmitAction={purchaseAction}
      ></PurchaseLotteryForm>
    </div>
  );
}

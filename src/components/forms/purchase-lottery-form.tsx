'use client';

import AppButton from '@/components/core/app-button';
import AppLink from '@/components/core/app-link';
import LotteryNumbersPicker from '@/components/inputs/lottery-numbers-picker';
import { ILotteryDrawWithDetails } from '@/models/api/lottery-draw';
import { LotteryDrawsService } from '@/services/lottery-draws.service';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export interface IPurchaseLotteryFormProps {
  lotteryData: ILotteryDrawWithDetails;
  onSubmitAction?: (ticketData: { numbers: number[] }) => Promise<void>;
}

export default function PurchaseLotteryForm({ lotteryData }: IPurchaseLotteryFormProps) {
  const [
    selectedNumbers,
    setSelectedNumbers,
  ] = useState<number[]>([]);

  const [
    busy,
    setBusy,
  ] = useState(false);

  const onChangeHandler = (e: string[]) => {
    setSelectedNumbers([...e].map((key) => +key));
  };

  let apiService: LotteryDrawsService | undefined;

  const router = useRouter();

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);

    // FIXME: Use a server action instead
    // onSubmitAction()
    if (!apiService) {
      apiService = new LotteryDrawsService();
    }

    const [
      error,
      response,
    ] = await apiService.purchaseTicket(lotteryData.id, { numbers: selectedNumbers });

    console.log({ error, response });

    if (error) {
      // TODO: Add feedback to the user

      setBusy(false);

      return;
    }

    // FIXME: Improve alert
    alert(`Purchased successfully. Ticket: ${response?.data.id}. Numbers: ${response?.data.numbers.join(', ')}`);

    setBusy(false);

    router.push(`/lotteries/${lotteryData.id}`);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <header className="text-lg font-bold">
        {/**/}
        Select your numbers:
      </header>

      <div className="max-h-[60dvh] overflow-auto">
        <LotteryNumbersPicker
          editable
          maxSelections={lotteryData.specification.maxNumbers}
          availableValues={Array.from({ length: lotteryData.specification.totalNumbers }).map((_v, i) => i + 1)}
          onChange={onChangeHandler}
        />
      </div>

      <div className="grow">
        <div className="flex flex-wrap items-center justify-end gap-4 p-2 text-right">
          <AppLink color="primary" href={`/lotteries/${lotteryData.id}`} className="!no-underline">
            Cancel
          </AppLink>

          <AppButton
            color="primary"
            rounded
            type="submit"
            disabled={
              // TODO: Improve validation
              busy || selectedNumbers.length === 0 || selectedNumbers.length > lotteryData.specification.totalNumbers
            }
          >
            {busy ? <span className="animate-pulse">Saving...</span> : 'Purchase'}
          </AppButton>
        </div>
      </div>
    </form>
  );
}

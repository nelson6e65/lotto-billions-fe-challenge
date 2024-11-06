import AppLink from '@/components/core/app-link';

export default function LotteryDrawNotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500">404</h1>

      <p className="text-2xl">Lottery draw does not exist!</p>

      <span>
        <AppLink href="/lotteries">Go back to the list</AppLink>
      </span>
    </div>
  );
}

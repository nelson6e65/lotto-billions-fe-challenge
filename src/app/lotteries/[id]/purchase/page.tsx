import AppButton from '@/app/ui/app-button';

export default async function LotteriesPurchasePage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  return (
    <div className="p-4">
      <h1 className="font-bold">Purchase lottery</h1>

      <div className="">
        <div>
          Lottery id: <span className="font-bold">{id}</span>
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti rem maxime dicta dolor iste obcaecati
          facere, natus eum ea voluptates voluptas nulla, tempore molestias at saepe doloribus expedita. Cupiditate.
        </div>

        <AppButton color="primary" rounded>
          <span>Purchase</span>
        </AppButton>
      </div>
    </div>
  );
}

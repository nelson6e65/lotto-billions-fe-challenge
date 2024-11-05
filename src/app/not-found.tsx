import AppLink from '@/components/core/app-link';

export default function RootNotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500">404</h1>

      <p className="text-2xl">Page not found!</p>

      <span>
        <AppLink href="/">Go back to Home</AppLink>
      </span>
    </div>
  );
}

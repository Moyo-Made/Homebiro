import WaitlistDisplay from '../components/WaitlistDisplay';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#164CA4] mb-8">
          Waitlist Dashboard
        </h1>
        <WaitlistDisplay />
      </div>
    </div>
  );
}
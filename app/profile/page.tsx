import Header from "@/app/components/ui/landing/Header";
import PetCard from "@/app/components/ui/landing/PetCard";
import MapCard from "@/app/components/ui/landing/MapCard";
import Summary from "@/app/components/ui/landing/Summary";
import FloatingNavbar from "@/app/components/ui/landing/FloatingNavbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] pb-36">
      <div className="w-auto px-8 mx-auto pt-6 space-y-5">
        <Header />
        <PetCard />
        <MapCard />
        <Summary />
      </div>
      <FloatingNavbar />
    </main>
  );
}

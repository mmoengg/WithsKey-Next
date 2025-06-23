import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-between bg-gray-900">
      <Header />
      <div className="w-full h-screen text-white text-center flex flex-col items-center justify-center">
        <img src="/assets/images/bg_bowmore.jpg" alt="bg" className="w-full h-full object-cover" />
      </div>
      <Footer />
    </div>
  );
}

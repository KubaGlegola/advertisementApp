import { nunitoSans } from "@/app/layout";
import { HeroSearch } from "@/components/Announcements/HomePage/Hero/HeroSearch";
import { Wrapper } from "@/components/Shared/Wrapper";

export function Hero() {
  return (
    <section
      style={{ backgroundImage: "url('/heroBg.svg')" }}
      className="py-28 md:py-40 w-full bg-cover bg-center"
    >
      <Wrapper>
        <div className="bg-success-500 rounded-md px-5 py-2 uppercase text-white w-max mx-auto ">
          Over 100,000 live ads
        </div>
        <h1
          className={`text-4xl lg:text-7xl text-white font-bold mt-5 mb-10 text-balance text-center leading-tight ${nunitoSans.className}`}
        >
          The Largest Classified Ads Listing in the World.
        </h1>
        <HeroSearch />
      </Wrapper>
    </section>
  );
}

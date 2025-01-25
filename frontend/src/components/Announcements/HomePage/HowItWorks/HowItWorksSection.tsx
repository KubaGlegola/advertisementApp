import { HowItWorksItem } from "@/components/Announcements/HomePage/HowItWorks/HowItWorksItem";
import { SectionTitle } from "@/components/Shared/SectionTitle";
import { Wrapper } from "@/components/Shared/Wrapper";
import { HowItWorksStep } from "@/types/howItWorksStep";

const steps: HowItWorksStep[] = [
  {
    title: "Create Account",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec non lorem erat. Sed vitae vene.",
    icon: "adduser.svg",
  },
  {
    title: "Post an Ads",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu aliquet odio. Nulla pretium congue eros, nec rhoncus mi.",
    icon: "/notepad.svg",
  },
  {
    title: "Start Earning",
    description:
      "Vestibulum quis consectetur est. Fusce hendrerit neque at facilisis facilisis. Praesent a pretium elit. Nulla aliquam puru.",
    icon: "/package.svg",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-12 md:py-24 w-full bg-grayscale-20">
      <Wrapper>
        <SectionTitle>How It Works</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            return <HowItWorksItem key={index} step={step} stepNumber={index + 1} />;
          })}
        </div>
      </Wrapper>
    </section>
  );
}

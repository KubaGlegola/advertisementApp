import { HowItWorksStep } from "@/types/howItWorksStep";
import Image from "next/image";

export function HowItWorksItem({ step, stepNumber }: { step: HowItWorksStep; stepNumber: number }) {
  return (
    <div className="bg-white p-6 rounded-md ">
      <div className="flex justify-between items-center">
        <Image width={40} height={40} src={step.icon} alt="" className="w-10 h-10" />
        <span className="text-grayscale-50 text-7xl">
          {stepNumber < 10 ? `0${stepNumber}` : stepNumber}
        </span>
      </div>
      <h3 className="text-2xl font-semibold text-grayscale-900">{step.title}</h3>
      <p className="mt-5 text-grayscale-500">{step.description}</p>
    </div>
  );
}

import { Clock, Gem, Leaf, MessageSquareMore, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "../../ui/Button";
import { Content } from "../../ui/Content";
import { IconCard } from "./componentts";
import React from "react";
import { ScrollReveal } from "../../ui/ScrollReveal";

const icons = [
  { icon: Gem, description: "Supreme Shine" },
  { icon: Leaf, description: "Natural Cleaning Products" },
  { icon: Sparkles, description: "Perfect Polish" },
  { icon: Clock, description: "Always On Time" },
  { icon: ShieldCheck, description: "Quality Guaranteed" },
  { icon: MessageSquareMore, description: "Quick Appointment" }
];

const btns = [
  <Button url="/learn-more/" text="Learn More" size="large" withArrow={ true } />
];

const IconsSection: React.FC = () => {
  return (
    <ScrollReveal duration={ 1 } delay={ 0.25 }>
    <section className="pt-20 lg:pt-40">
      <div className="container flex flex-col-reverse lg:flex-row lg:justify-between items-center h-[600px]">
        <div className="sm:min-w-[420px] max-w-[420px] lg:max-w-[680px] max-h-[400px] h-full w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
            {icons.map((icon, index) => (
                <IconCard
                  key={ index }
                  IconComponent={ icon.icon }
                  description={ icon.description }
                />
            ))}
        </div>

        <Content 
          header="SATISFACTION ASSURED"
          paragraph="Your satisfaction is our top priority; we combine flawless detailing with punctual service, ensuring every aspect of your experience is seamless and exceptional." buttons={ btns } 
          align="center"
        />
      </div>
    </section>
    </ScrollReveal>
  );
};

export { IconsSection };

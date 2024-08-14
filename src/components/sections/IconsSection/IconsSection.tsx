import { Clock, Gem, Leaf, MessageSquareMore, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "../../ui/Button";
import { Content } from "../../ui/Content";
import { IconCard } from "./componentts";

const icons = [
  { icon: Gem, description: "Supreme Shine" },
  { icon: Leaf, description: "Natural Cleaning Products" },
  { icon: Sparkles, description: "Perfect Polish" },
  { icon: Clock, description: "Always On Time" },
  { icon: ShieldCheck, description: "Quality Guaranteed" },
  { icon: MessageSquareMore, description: "Quick Appointment" }
];

const btns = [
  <Button url="/" text="Get Started" size="large" withArrow={true} className="bg-primary-light" />
];

function IconsSection() {
  return (
    <section className="pt-20 lg:pt-40">
      <div className="container flex flex-col-reverse lg:flex-row lg:justify-between items-center h-[600px]">
        <div className="sm:min-w-[420px] max-w-[420px] lg:max-w-[680px] max-h-[400px] h-full w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
            {icons.map((icon, index) => (
                <IconCard
                  key={index}
                  IconComponent={icon.icon}
                  description={icon.description}
                />
            ))}
        </div>

        <Content 
          header="PROFFESIONAL WORK"
          paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae odio quos, debitis voluptatibus nihil corrupti perspiciatis distinctio soluta velit sunt." buttons={btns} 
          align="center"
        />
      </div>
    </section>
  );
};

export { IconsSection };

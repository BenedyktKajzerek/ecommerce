import { Button } from "../../ui/Button";
import { Content } from "../../ui/Content";

const btns = [
  <Button url="/get-more-info" text="Learn More" size="large" />
];

const Idkyet = () => {
  return (
    <section className="pt-20 lg:pt-40">
      <div className="container flex flex-col-reverse lg:flex-row lg:justify-between items-center h-[600px]">
        <Content 
          header="PROFFESIONAL WORK"
          paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae odio quos, debitis voluptatibus nihil corrupti perspiciatis distinctio soluta velit sunt." buttons={btns} 
        />

        <div className="sm:min-w-[420px] max-w-[420px] lg:max-w-[680px] max-h-[400px] h-full w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
          a
        </div>
      </div>
    </section>
  );
};

export { Idkyet }; 

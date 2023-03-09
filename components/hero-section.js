import Image from "next/image";
import Container from "./container";
import Button from "./button";

export default function HeroSection({ title, subtitle, tag, image }) {
  return (
    <div className="bg-hero -mt-[90px] pt-[90px]">
      <Container>
        <div className="mx-auto lg:px-0">
          <div className="relative isolate overflow-hidden px-6 md:px-16 lg:px-0 py-12 md:pt-16 md:pb-16 lg:flex lg:py-0">
            <div className="mx-auto lg:w-1/2 text-center lg:mx-0 lg:flex-auto lg:pt-30 lg:pb-42 lg:text-left">
              <div className="inline-block px-6.5 py-2.5 mb-5 text-xs text-primary font-medium text-primary bg-primary/10 rounded-lg">
                {tag}
              </div>
              <h2 className="font-bold tracking-tight text-dark text-4xl md:text-5xl md:leading-extra-loose">
                {title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray lg:w-3/4 lg:pr-6">
                {subtitle}
              </p>
              <div className="mt-10.5 flex items-center justify-center gap-x-4.5 lg:justify-start">
                <Button text="About More" size="lg" className="font-normal" />
                <Button
                  text="Invite Friend"
                  size="lg"
                  type="transparent"
                  className="font-normal"
                />
              </div>
            </div>
            <div className="relative w-1/2 mt-8 lg:mt-0 lg:pt-12 hidden lg:block">
              <Image src={image} width="644" height="551" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

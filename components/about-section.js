import Image from "next/image";
import Container from "./container";

export default function About({ title, subtitle, tag, list, images }) {
  return (
    <Container>
      <div className="mx-auto px-6 md:px-0 lg:pt-24 lg:mb-8.5">
        <div className="relative isolate overflow-hidden md:px-0 pt-16 lg:px-0 lg:flex lg:pt-0">
          <div className="mx-auto sm:basis-1/2 text-center lg:mx-0 lg:flex-auto lg:mt-24 lg:mb-0 lg:text-left">
            <div className="inline-block mb-2.5 text-lg text-primary font-medium text-primary">
              {tag}
            </div>
            <h2 className="font-bold text-dark text-3xl lg:text-4xl lg:leading-snug max-w-md mx-auto lg:mx-0">
              {title}
            </h2>
            <p className="mt-4 mb-9 leading-7 text-gray max-w-[400px] mx-auto lg:mx-0">
              {subtitle}
            </p>
            <ul className="bullet-list font-medium text-lg text-left">
              {list.map((item) => (
                <li key={item} className="pb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative sm:basis-1/2 lg:pt-8.5 gap-2 md:gap-8 flex items-center">
            <div>
              <Image src={images[0]} width="644" height="551" />
            </div>
            <div className="flex gap-2 md:gap-8 flex-col">
              <Image src={images[1]} width="644" height="551" />
              <Image src={images[2]} width="644" height="551" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

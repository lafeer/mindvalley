import Image from "next/image";
import Container from "./container";
import Button from "./button";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

export default function About({ title, subtitle, tag }) {
  return (
    <Container>
      <div className="mx-auto sm:px-6 md:px-0 lg:pt-24 lg:mb-20">
        <div className="relative isolate pt-16 sm:px-16 md:px-0 md:pt-24 lg:flex lg:pt-0 gap-14">
          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <div className="basis-full md:basis-1/2 p-1 text-sm leading-6">
              <div className="card group rounded-xl p-11 bg-white">
                <div className="font-semibold text-slate-900 flex gap-2.5 align-items mb-8">
                  <Image src="star.svg" width="22" height="22" />
                  <h4 className="text-dark font-medium text-xl">4.8 Rating</h4>
                </div>
                <div className="text-slate-900 flex gap-2.5 align-items">
                  <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                    <div
                      className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white shadow-small shadow-avatar"
                      style={{
                        backgroundImage: "url('github.svg')",
                        backgroundPosition: "left -12px top -8px",
                      }}
                    />
                    <div
                      className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white shadow-small shadow-avatar"
                      style={{
                        backgroundImage: "url('github.svg')",
                        backgroundPosition: "left -12px top -8px",
                      }}
                    />
                    <div
                      className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white shadow-small shadow-avatar"
                      style={{
                        backgroundImage: "url('github.svg')",
                        backgroundPosition: "left -12px top -8px",
                      }}
                    />
                  </div>
                  <h4 className="font-medium">
                    <span className="text-primary font-semibold">+836k</span>{" "}
                    Members
                  </h4>
                </div>
                <p className="text-light-gray my-10">
                  More than 2 billion we people over countries use socibooks we
                  to stay in touch with friends.
                </p>
                <a href="#" className="hover:text-primary font-medium">
                  Join Our Community
                  <ArrowSmallRightIcon
                    className="h-3 w-3 inline-block ml-1.5 -mt-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="basis-full md:basis-1/2 p-1 text-sm leading-6">
              <div className="card group rounded-xl p-11 bg-white">
                <div className="font-semibold text-slate-900 flex gap-2.5 align-items mb-8">
                  <Image src="trophy.svg" width="22" height="22" />
                  <h4 className="text-dark font-medium text-xl">Awwwards</h4>
                </div>
                <div className="text-slate-900 flex gap-2.5 align-items">
                  <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                    <div
                      className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white shadow-small shadow-avatar"
                      style={{
                        backgroundImage: "url('github.svg')",
                        backgroundPosition: "left -12px top -8px",
                      }}
                    />
                  </div>
                  <h4 className="font-medium">
                    Best of{" "}
                    <span className="text-primary font-semibold">2021</span> on
                    Github
                  </h4>
                </div>
                <p className="text-light-gray my-10">
                  More than 2 billion we people over countries use socibooks we
                  to stay in touch with friends.
                </p>
                <a href="#" className="hover:text-primary font-medium">
                  Go To Awards
                  <ArrowSmallRightIcon
                    className="h-3 w-3 inline-block ml-1.5 -mt-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto text-center mt-20 lg:mx-0 lg:flex-auto lg:mt-0 mb-16 lg:mb-0 lg:text-left">
            <div className="inline-block mb-2.5 text-lg text-primary font-medium text-primary">
              {tag}
            </div>
            <h2 className="font-bold text-dark text-3xl lg:text-4xl lg:leading-snug">
              {title}
            </h2>
            <p className="mt-4 mb-9 leading-7 text-gray">{subtitle}</p>
            <Button
              text="Discover me"
              size="md"
              icon="arrow-right"
              className={`font-medium text-sm py-4`}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

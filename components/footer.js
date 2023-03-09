import Image from "next/image";
import Container from "./container";
import Button from "./button";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 bg-dark-gray">
      <Container>
        <div className="hidden lg:block relative isolate overflow-hidden px-6 pt-16 sm:px-16 lg:px-0 md:pt-24 lg:flex lg:py-20 gap-24 justify-between	">
          <div className="flex basis-full flex-1">
            <div className="flex-1">
              <h4 className="text-white text-xl font-medium mb-6">Home</h4>
              <ul className="text-lighter-gray">
                <li className="py-2.5">Home</li>
                <li className="py-2.5">Community</li>
                <li className="py-2.5">Events</li>
                <li className="py-2.5">Contact</li>
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-white text-xl font-medium mb-6">Resources</h4>
              <ul className="text-lighter-gray">
                <li className="py-2.5">Blog</li>
                <li className="py-2.5">News</li>
                <li className="py-2.5">Guides</li>
                <li className="py-2.5">Help Center</li>
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-white text-xl font-medium mb-6">Community</h4>
              <ul className="text-lighter-gray">
                <li className="py-2.5">NewsFeed</li>
                <li className="py-2.5">Profile</li>
                <li className="py-2.5">Friends</li>
                <li className="py-2.5">Forums</li>
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-white text-xl font-medium mb-6">
                Main links
              </h4>
              <ul className="text-lighter-gray">
                <li className="py-2.5">Members</li>
                <li className="py-2.5">Activity</li>
                <li className="py-2.5">Groups</li>
                <li className="py-2.5">Private Group</li>
              </ul>
            </div>
          </div>

          <div className="text-center lg:mx-0 lg:mt-0 lg:mb-0 lg:text-left">
            <h4 className="text-white text-xl font-medium mb-6">
              Subscribe Cirkle <br /> Newsletter
            </h4>
            <p className="text-lighter-gray mb-8">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div>
              <input
                type="text"
                name="search"
                id="search"
                className="lg:w-[240px] pl-5 py-3.5 text-white bg-transparent placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 border-white rounded-xl ring-1 ring-white sm:text-sm"
                placeholder="Email Address"
                autoComplete="off"
              />
              <Button
                text="Subscribe"
                size="sm"
                type="secondary"
                className={`ml-0 lg:-ml-20 xl:-ml-[1.6rem] px-6 font-medium`}
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-darker-gray">
        <Container>
          <div className="text-center md:flex justify-between items-center py-8">
            <p className="text-sm text-white">Besnik Creative Agency.</p>
            <div className="flex justify-center my-6 md:m-0">
              <Image src="logo-white.svg" width={143} height={34} alt="logo" />
            </div>
            <div className="flex gap-2 justify-center">
              <Image src="twitter.svg" width={36} height={36} alt="logo" />
              <Image src="instagram.svg" width={36} height={36} alt="logo" />
              <Image src="facebook.svg" width={36} height={36} alt="logo" />
              <Image src="linkedin.svg" width={36} height={36} alt="logo" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

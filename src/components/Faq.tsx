import { useState } from "react";
interface ItemProps {
  title: string;
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded shadow-xl  bg-gradient-to-r from-[#624F82] to-[#9F73AB]"
      id="Faq"
    >
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-50 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="#161A30"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-100">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#9F73AB] mb-6 sm:mx-auto">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>

          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#9F73AB] sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="#9F73AB"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-52 lg:-ml-36 lg:-mt-20 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">FAQ</span>
              </span>{" "}
              Navigator - Your Roadmap to Devency&apos;s Expertise
            </h2>
            <p className="text-base text-gray-400 md:text-lg">
              Unlock answers to common questions about Devency&apos;s services
              and processes. Your go-to resource for a swift understanding of
              our expertise.
            </p>
          </div>
        </div>
        <div className="space-y-4 z-50">
          <Item title="What services does Devency offer?">
            Devency specializes in a wide range of IT development services,
            including web development, mobile app development, software
            solutions, and more. Explore our Services page for a detailed list.
          </Item>
          <Item title="What is the typical development process at Devency?">
            Our development process involves initial consultation, project
            planning, design, development, testing, and deployment. We
            prioritize clear communication and collaboration at every stage.
          </Item>
          <Item title="Does Devency provide ongoing support after a project is completed?">
            Yes, we offer post-launch support and maintenance packages to ensure
            the continued success and smooth operation of your digital
            solutions.
          </Item>
          <Item title="Is Devency open to collaborations or partnerships?">
            Absolutely! We value collaborations and partnerships. If you have an
            idea or proposal, feel free to reach out through our Contact page.
          </Item>
          <Item title="How does Devency handle project pricing?">
            Our pricing is tailored to the specific requirements of each
            project. We provide detailed quotes after an initial consultation to
            understand the scope and needs of the project.
          </Item>
        </div>
        <span className="relative inline-block z-0">
          <svg
            viewBox="0 0 52 24"
            fill="#9F73AB"
            className="absolute bottom-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-96 lg:ml-[430px] lg:-mb-16 sm:block"
          >
            <defs>
              <pattern
                id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
              width="52"
              height="24"
            />
          </svg>
        </span>{" "}
      </div>
    </div>
  );
};

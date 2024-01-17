import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Logo from "./Logo";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./icons/Icons";
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scroller,
} from "react-scroll";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const sections = [{ label: "Home", link: "/" }];
  const newPgae = [
    { label: "Contact us", link: "/contactpage" },
    { label: "FAQ", link: "/faqpage" },
  ];

  const [navbar, setNavbar] = useState(false);

  const icons = {
    chevron: (
      <ChevronDown
        fill="currentColor"
        size={16}
        height={undefined}
        width={undefined}
      />
    ),
    scale: (
      <Scale
        className="text-warning"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    lock: (
      <Lock
        className="text-success"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    activity: (
      <Activity
        className="text-secondary"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    flash: (
      <Flash
        className="text-primary"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    server: (
      <Server
        className="text-success"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    user: (
      <TagUser
        className="text-danger"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
  };

  const changebg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", changebg);
    return () => {
      window.removeEventListener("scroll", changebg);
    };
  }, []);
  ///////////////////bg-[#624F82] h-[90px]
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`${navbar ? "navbar active" : "navbar"} `}
      isBlurred={false}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden  " justify="center">
        <NavbarBrand>
          <Link href="/">
            <Logo className="w-32" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 drop-shadow-md"
        justify="center"
      >
        <NavbarBrand>
          <Link href="/">
            <Logo className="w-36 -mt-1 drop-shadow-lg" />
          </Link>
        </NavbarBrand>
        <div className="flex gap-4 sm:pl-10 text-xl">
          <NavbarItem>
            <Link className=" text-xl tracking-wide " href="/">
              Home
            </Link>
          </NavbarItem>

          {/* <Dropdown className="bg-[#161A30]">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="text-xl  tracking-wide bg-transparent data-[hover=true]:bg-transparent top-0"
                  endContent={icons.chevron}
                >
                  Our services
                </Button>
                <Link className="text-xl cursor-pointer tracking-wide bg-transparent data-[hover=true]:bg-transparent top-0">
                  Our services{" "}
                  <Cheverondown className="w-6 pl-1 fill-white flex items-center justify-center" />
                </Link>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Our services"
              className="w-[260px]  rounded-xl"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="Web Developement"
                startContent={icons.server}
                className="transition  md:hover:bg-[#9F73AB] duration-400 ease-in-out"
              >
                Web Developement
              </DropdownItem>
              <DropdownItem
                key="Mobile developement"
                startContent={icons.user}
                className="transition  md:hover:bg-[#9F73AB] duration-400 ease-in-out"
              >
                Mobile developement
              </DropdownItem>
              <DropdownItem
                key="UX/UI Design"
                startContent={icons.scale}
                className="transition  md:hover:bg-[#9F73AB] duration-400 ease-in-out"
              >
                UX/UI Design
              </DropdownItem>

              <DropdownItem
                key="supreme_support"
                startContent={icons.flash}
                className="transition  md:hover:bg-[#9F73AB] duration-400 ease-in-out"
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
          <NavbarItem>
            <ScrollLink
              to="services"
              className="cursor-pointer pl-3 text-xl tracking-wide"
              spy={true}
              smooth={true}
              duration={1500}
              offset={-80}
            >
              Our Services
            </ScrollLink>
          </NavbarItem>
          <NavbarItem>
            <Link className=" text-xl tracking-wide pl-3" href="/faqpage">
              FAQ
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            className="bg-[#9F73AB] text-xl tracking-wide "
            href="/contactpage"
            variant="flat"
          >
            Contact-Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="mt-5">
        {sections.map((item) => (
          <NavbarMenuItem
            key={item.label}
            className="h-12 pt-16 flex justify-center items-center "
          >
            <Link
              className="w-full justify-center text-[#9F73AB] flex text-3xl tracking-wide"
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        {newPgae.map((item) => (
          <NavbarMenuItem
            key={item.label}
            className="h-12 pt-16 flex justify-center items-center "
          >
            <Link
              className="w-full justify-center flex text-3xl tracking-wide text-[#9F73AB]"
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

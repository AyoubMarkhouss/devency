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
} from "@nextui-org/react";
import Logo from "./Logo";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Profile", "Dashboard", "Activity", "Analytics", "System"];

  const [navbar, setNavbar] = useState(false);

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

      <NavbarContent className="sm:hidden pr-3 " justify="center">
        <NavbarBrand>
          <a href="/">
            <Logo className="w-24" />
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <a href="/">
            <Logo className="w-24" />
          </a>
        </NavbarBrand>
        <div className="flex gap-4 ml-8 text-xl">
          <NavbarItem>
            <Link className=" text-xl tracking-wide " href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="#"
              aria-current="page"
              className=" text-xl tracking-wide "
            >
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className=" text-xl tracking-wide " href="#">
              Integrations
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className=" bg-[#9F73AB] text-xl tracking-wide"
            href="#"
            variant="flat"
          >
            Contact-Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

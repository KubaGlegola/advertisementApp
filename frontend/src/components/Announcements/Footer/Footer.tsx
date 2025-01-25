import { Logo } from "@/components/Shared/Logo";
import { Wrapper } from "@/components/Shared/Wrapper";
import Link from "next/link";

const DUMMY_LINKS = [
  {
    title: "Supports",
    links: [
      { title: "Contact", href: "#" },
      { title: "FAQ", href: "#" },
      { title: "Pricing Plans", href: "#" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { title: "About", href: "#" },
      { title: "Get Membership", href: "#" },
      { title: "Post an Ad", href: "/announcement/create" },
      { title: "Blog", href: "#" },
    ],
  },
  {
    title: "Category",
    links: [
      { title: "Mobile", href: "#" },
      { title: "Electronics", href: "#" },
      { title: "Vehicles", href: "#" },
      { title: "Property", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary-900 py-10 md:py-20 w-full">
      <Wrapper customClass="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Logo />
        </div>
        {DUMMY_LINKS.map((group) => {
          return (
            <div key={group.title}>
              <h3 className="text-white font-semibold text-lg">{group.title}</h3>
              <ul className="mt-5">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-grayscale-400 mb-2 block hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </Wrapper>
    </footer>
  );
}

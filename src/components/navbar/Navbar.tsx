import { House, Users, SearchCode, Menu } from "lucide-react";
import UserAvatar from '@/components/avatar/UserAvatar';

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const OPTIONS = [
    {
      label: "Inicio",
      href: "/",
      icon: House,
    },
    {
      label: "Comunidad",
      href: "/community",
      icon: Users,
    },
    {
      label: "Explorar",
      href: "/explore",
      icon: SearchCode,
    },
  ];

  return (
    <div className="drawer lg:drawer-open flex flex-col lg:flex-row">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <header className="w-full flex justify-between items-center p-4 lg:hidden">
        <a>
          code<strong>bug</strong>
        </a>
        <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
          <Menu />
        </label>
      </header>
      <div className="drawer-side w-80 min-w-60">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-full p-4 justify-between">
          {/* Sidebar content here */}
          <div className="flex flex-col w-full">
            <a className="p-4">
            code<strong>bug</strong>
          </a>
          {OPTIONS.map((option, index) => (
            <li className="w-full" key={index}>
              <a className="w-full" href={option.href}>
                <option.icon className="size-5" />
                {option.label}
              </a>
            </li>
          ))}
          </div>
          <li>
            <UserAvatar />
          </li>
        </ul>
      </div>
      <div className="drawer-content p-9 w-full">{children}</div>
    </div>
  );
};

export default Navbar;

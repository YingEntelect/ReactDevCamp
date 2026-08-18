import type { FC } from "react";
import { Link, useLocation } from "react-router";

import { useSignOut } from "@project/hooks";

import homeIcon from "@project/assets/home-icon.svg";
import subscriptionsIcon from "@project/assets/subscriptions-icon.svg";
import cartIcon from "@project/assets/cart-icon.svg";
import accountIcon from "@project/assets/profile-icon.svg";

const itemClassName =
  "text-xs font-medium items-center justify-between flex flex-col flex-1 h-full py-4";

export const BottomNavBar: FC = () => {
  const location = useLocation();
  const signOut = useSignOut();

  const navItems: {
    label: string;
    to?: string;
    onClick?: () => void;
    icon: string;
  }[] = [
    { label: "Home", to: "/products", icon: homeIcon },
    { label: "Subscriptions", icon: subscriptionsIcon },
    { label: "Cart", icon: cartIcon },
    // TODO: replace with real navigation once an Account screen exists.
    { label: "Account", icon: accountIcon, onClick: signOut },
  ];

  return (
    <nav
      aria-label="Primary"
      className="w-full h-20 shrink-0 border-t-2 border-t-[#D9D9D9] flex justify-around items-center bg-white"
    >
      {navItems.map((item) => {
        if (item.to) {
          return (
            <Link
              key={item.label}
              to={item.to}
              aria-current={location.pathname === item.to ? "page" : undefined}
              className={`${itemClassName} text-blue-600`}
            >
              <img src={item.icon} alt="" />
              {item.label}
            </Link>
          );
        }

        if (item.onClick) {
          return (
            <button
              key={item.label}
              type="button"
              onClick={item.onClick}
              className={`${itemClassName} text-blue-600`}
            >
              <img src={item.icon} alt="" />
              {item.label}
            </button>
          );
        }

        return (
          <button
            key={item.label}
            type="button"
            disabled
            className={`${itemClassName} text-[#8E8E93] disabled:cursor-not-allowed`}
          >
            <img src={item.icon} alt="" />
            {item.label}
          </button>
        );
      })}
    </nav>
  );
};

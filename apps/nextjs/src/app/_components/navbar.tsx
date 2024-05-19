import Link from "next/link";

import UserDropdown from "./user-dropdown";

export function Navbar() {
  return (
    <div className="w-full border-b px-4">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-2">
        <Link
          href="/"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Overview
        </Link>
        <Link
          href="/examples/dashboard"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Customers
        </Link>
        <Link
          href="/examples/dashboard"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Products
        </Link>
        <Link
          href="/examples/dashboard"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Settings
        </Link>
        <div className="ml-auto">
          <UserDropdown />
        </div>
      </div>
    </div>
  );
}

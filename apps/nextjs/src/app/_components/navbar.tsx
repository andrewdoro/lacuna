import Link from "next/link";

import UserDropdown from "./user-dropdown";

export function Navbar() {
  return (
    <div className="w-full border-b px-4">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-2">
        <Link
          href="/project"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Projects
        </Link>
        <Link
          href="/requests"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Skills
        </Link>

        <div className="ml-auto">
          <UserDropdown />
        </div>
      </div>
    </div>
  );
}

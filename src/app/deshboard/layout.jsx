import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <Link href="/deshboard" className="px-4 font-bold">
              DeshBoard
            </Link>
          </nav>
          {/* Page content here */}
          <div className="p-4">{children}</div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 w-64">
            {/* Sidebar content here */}
            <ul className="menu">
              {/* List item */}
              <li>
                <Link href="/deshboard/profile" className="px-4 font-bold">
                  Profile
                </Link>
              </li>

              {/* List item */}
              <li>
                <Link href="/deshboard/revenue" className="px-4 font-bold">
                  Revenue
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./globals.css";
import Navber from "./navber/Navber";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body cz-shortcut-listen="true">
        <Navber />
        {children}
      </body>
    </html>
  );
}

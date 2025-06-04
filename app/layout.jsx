import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "StudyPay",
  description: "Modern educational platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <nav className="bg-gray-100 px-6 py-4 shadow flex gap-6">
          <Link href="/" className="font-semibold hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="font-semibold hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="font-semibold hover:text-blue-600">
            Contact
          </Link>
        </nav>
        <main className="px-6 py-10">{children}</main>
      </body>
    </html>
  );
}

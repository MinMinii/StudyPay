import "../styles/globals.css";
import Link from "next/link";

// دریافت locale از params
export default function RootLayout({ children, params }) {
  const locale = params?.locale || 'fa'; // fallback
  const isRTL = locale === 'fa';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className="bg-white text-gray-900">
        <nav className="bg-gray-100 px-6 py-4 shadow flex gap-6">
          <Link href={`/${locale}/`} className="font-semibold hover:text-blue-600">
            خانه
          </Link>
          <Link href={`/${locale}/about`} className="font-semibold hover:text-blue-600">
            درباره ما
          </Link>
          <Link href={`/${locale}/contact`} className="font-semibold hover:text-blue-600">
            تماس
          </Link>
        </nav>
        <main className="px-6 py-10">{children}</main>
      </body>
    </html>
  );
}

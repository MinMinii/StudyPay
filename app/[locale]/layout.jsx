import '../../styles/globals.css';
import Link from "next/link";

export const metadata = {
  title: "StudyPay",
  description: "Modern educational platform",
};

// این کد رو اضافه کن! 👇👇👇
export async function generateStaticParams() {
  return [{ locale: 'fa' }, { locale: 'en' }];
}

export default function RootLayout({ children, params }) {
  const locale = params?.locale || 'fa';
  const isRTL = locale === 'fa';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className="bg-white text-gray-900">
        <nav className="bg-gray-100 px-6 py-4 shadow flex gap-6">
          <Link href={`/${locale}/`} className="font-semibold hover:text-blue-600">
            {locale === 'fa' ? 'خانه' : 'Home'}
          </Link>
          <Link href={`/${locale}/about`} className="font-semibold hover:text-blue-600">
            {locale === 'fa' ? 'درباره ما' : 'About'}
          </Link>
          <Link href={`/${locale}/contact`} className="font-semibold hover:text-blue-600">
            {locale === 'fa' ? 'تماس با ما' : 'Contact'}
          </Link>
        </nav>
        <main className="px-6 py-10">{children}</main>
      </body>
    </html>
  );
}

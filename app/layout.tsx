import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Vlve4TcWDhbJrYv2PnDKUqtt4dJhFi1O80AN7wqq9Oc" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

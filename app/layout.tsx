import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Saas - Just another My WordPess site',
  description:
    'themexriver.com - Saas is a clean and modern WordPress theme for your business, portfolio, blog or any other purpose website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"
        ></link>
      </head>
      <body>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/9fee05265c.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}

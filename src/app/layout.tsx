import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning cz-shortcut-listen="false">
        {children}
      </body>
    </html>
  );
}

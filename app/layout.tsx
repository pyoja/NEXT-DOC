"use client";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Dashboard</h1>
        </header>
        <main>
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}

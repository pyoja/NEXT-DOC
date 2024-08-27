import { NavLinks } from "./(test)/ui/nav-links";

export default function RootLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <header>
          <h1>Dashboard</h1>
        </header>
        <main>
          {children}
          <div style={{ display: "flex", gap: "20px" }}>
            {team}
            {analytics}
          </div>
        </main>
      </body>
    </html>
  );
}

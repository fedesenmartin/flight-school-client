import "./globals.css";


export const metadata = {
  title: "FLY-SCHOOLIFY",
  description: "FLIGHT SCHOOL MANAGMENT SYSTEM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

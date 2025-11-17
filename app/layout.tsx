import "./globals.css";

export const metadata = {
  title: "Portfolio - Manjunath",
  description: "",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className='antialiased leading-8 overflow-x-hidden bg-[#11001F] text-white'>
        {children}
      </body>
    </html>
  );
}

export default RootLayout
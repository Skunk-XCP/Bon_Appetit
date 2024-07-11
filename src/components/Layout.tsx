import Header from "./Header";

const RootLayout = ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   return (
      <>
         <Header />
         {children}
         <footer
            style={{
               backgroundColor: "red",
               padding: "1rem",
               height: "300px",
            }}
         >
            <p>FOOTER</p>
         </footer>
      </>
   );
};

export default RootLayout;

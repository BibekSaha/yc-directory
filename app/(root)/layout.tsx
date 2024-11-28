import NavBar from '../../components/Navbar';

export default function HomeLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <main className="font-sans-work">
      <NavBar />
      {children}
    </main>
  );
}
import { Container, NavBar } from "../components";

export const Header = () => {
  return (
    <header className="fixed z-50 w-full shadow backdrop-blur-xl bg-white/70 dark:bg-slate-950/70">
      <Container>
        <NavBar />
      </Container>
    </header>
  );
};

import Navbar from "./components/Navbar";
import Picture from "./components/home/Picture";

export default function Home() {
  return (
    <main className="scrollbar-hide">
      <Navbar />
      <Picture />
    </main>
  );
}

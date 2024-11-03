import Carousel from "./components/carousel";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      {/* navbar */}
      <Navbar />
      {/* Main */}
      <main className="">
        <Carousel />
      </main>
      {/* Footer */}
      <footer>
        <div></div>
      </footer>
    </main>
  );
}

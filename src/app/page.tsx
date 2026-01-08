import HeroSearch from "../components/HeroSearch";
import FeaturedCities from "../components/FeaturedCities";
import TopGuides from "../components/TopGuides";
import HowItWorks from "../components/HowItWorks";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-8">
      <section id="hero" className="pt-12">
        <h1 className="sr-only">Local Guide Platform</h1>
        <HeroSearch />
      </section>

      <section id="how" className="container mx-auto px-4">
        <HowItWorks />
      </section>

      <section id="featured" className="container mx-auto px-4">
        <FeaturedCities />
      </section>

      <section id="categories" className="container mx-auto px-4">
        <Categories />
      </section>

      <section id="top-guides" className="container mx-auto px-4">
        <TopGuides />
      </section>

      <section id="testimonials" className="container mx-auto px-4">
        <Testimonials />
      </section>
      <section id="become-guide" className="container mx-auto px-4 py-12">
        <div
          className="rounded-2xl bg-linear-to-r
 from-indigo-600 to-purple-600 text-white p-10 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Share Your City. Earn as a Local Guide.
          </h2>
          <p className="max-w-2xl mx-auto mb-6 opacity-90">
            Turn your local knowledge into unforgettable experiences for
            travelers from around the world.
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Become a Guide
          </Link>
        </div>
      </section>
    </main>
  );
}

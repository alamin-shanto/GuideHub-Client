"use client";

const reviews = [
  {
    id: 1,
    name: "Maya",
    text: "Best walking tour I've had — authentic and fun!",
    city: "Dhaka",
  },
  {
    id: 2,
    name: "Carlos",
    text: "Amazing food crawl, highly recommend.",
    city: "Madrid",
  },
  {
    id: 3,
    name: "Emma",
    text: "Great guide, super knowledgeable about local history.",
    city: "Paris",
  },
];

export default function Testimonials() {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-4">Traveler stories</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r) => (
          <div key={r.id} className="bg-white p-4 rounded shadow">
            <p className="text-gray-700">“{r.text}”</p>
            <div className="mt-3 text-sm text-gray-500">
              — {r.name}, {r.city}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

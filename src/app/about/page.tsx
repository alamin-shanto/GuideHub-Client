export default function Page() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-sky-100/40 via-transparent to-purple-100/40" />

      <div className="container mx-auto px-4 py-20">
        {/* Hero */}
        <div className="max-w-3xl">
          <span className="inline-block mb-4 rounded-full bg-black/5 px-4 py-1 text-sm font-medium text-gray-700">
            About GuideHub
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Discover places the way locals actually experience them
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            GuideHub is built for curious travelers who want more than
            copy-paste itineraries. We connect you with real insights, hidden
            spots, and authentic experiences — straight from people who know the
            city best.
          </p>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent" />

        {/* Content grid */}
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              🌍 Why GuideHub?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Travel platforms often show the same crowded places. GuideHub
              focuses on what usually gets missed — neighborhoods, street food,
              culture, and stories that don’t fit into a brochure.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              🧭 What makes us different
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We prioritize clarity, trust, and simplicity. No clutter. No
              noise. Just meaningful recommendations presented in a clean,
              modern interface that respects your time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              🚀 Our vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We’re building a platform where travel feels personal again —
              where planning is exciting, discovery feels natural, and every
              city tells its own story.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20 max-w-2xl">
          <p className="text-xl font-medium text-gray-800">
            GuideHub isn’t about checking places off a list.
            <br />
            <span className="text-gray-500">
              It’s about understanding a place before you ever arrive.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

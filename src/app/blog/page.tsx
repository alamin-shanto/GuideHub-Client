export default function Page() {
  return (
    <div className="relative overflow-hidden">
      {/* Soft background wash */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-indigo-100/30 via-transparent to-sky-100/40" />

      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-block mb-4 rounded-full bg-black/5 px-4 py-1 text-sm font-medium text-gray-700">
            GuideHub Blog
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Stories, insights, and ideas about meaningful travel
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            This is where we share thoughts on cities, culture, design, and the
            way people actually explore places — beyond checklists and tourist
            traps.
          </p>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent" />

        {/* Placeholder posts */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "How locals experience a city differently",
              tag: "Travel",
            },
            {
              title: "Why slower travel leads to better memories",
              tag: "Philosophy",
            },
            {
              title: "Designing GuideHub: clarity over complexity",
              tag: "Product",
            },
          ].map((post, i) => (
            <div
              key={i}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                {post.tag}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:underline">
                {post.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Coming soon — thoughtful writing from the GuideHub team.
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-20 max-w-2xl">
          <p className="text-xl font-medium text-gray-800">
            We’re still writing the first stories.
            <br />
            <span className="text-gray-500">
              The blog will grow alongside the product.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

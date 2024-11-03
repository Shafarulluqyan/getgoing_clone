// components/FeatureList.js
export default function FeatureList() {
  const features = [
    {
      icon: "🌴",
      title: "Trip Planner",
      description: "Susun Rute Perjalananmu Sendiri",
    },
    {
      icon: "🧭",
      title: "Guide",
      description: "Tour Guide berbahasa Indonesia",
    },
    { icon: "🌐", title: "Info", description: "Info penting di luar negeri" },
  ];

  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-2xl">{feature.icon}</span>
          <div>
            <h4 className="text-lg font-bold">{feature.title}</h4>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

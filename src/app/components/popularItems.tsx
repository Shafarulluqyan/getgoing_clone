import Image from "next/image";

// components/PopularItems.js
export default function PopularItems() {
  const items = [
    "/path/to/image3.jpg",
    "/path/to/image4.jpg",
    "/path/to/image5.jpg",
    "/path/to/image6.jpg",
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative h-48 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={item}
            alt={`Popular ${index}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
}

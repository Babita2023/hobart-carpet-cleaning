import Link from "next/link";
import { blogs } from "../data/blogs";

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto p-10 mt-16 mb-10 grid md:grid-cols-3 gap-6">

      {blogs.map((blog) => (
        <div
          key={blog.slug}
          className="border rounded-lg shadow flex flex-col overflow-hidden"
        >

          {/* Image */}
          <img
            src={blog.image}
            alt={blog.title}
            className="h-48 w-full object-cover"
          />

          {/* Content */}
          <div className="p-4 flex flex-col flex-grow">

            {/* Title */}
            <h2 className="text-xl font-bold h-14 overflow-hidden">
              {blog.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-2 h-20 overflow-hidden">
              {blog.description}
            </p>

            {/* Button */}
            <Link href={`/blog/${blog.slug}`}>
              <button className="mt-auto text-blue-600 font-semibold">
                Read Article →
              </button>
            </Link>

          </div>

        </div>
      ))}

    </div>
  );
}
import Link from "next/link";
import { blogs } from "../data/blogs";

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto p-10 mt-16 mb-10 grid md:grid-cols-3 gap-6">

      {blogs.map((blog) => (
        <div key={blog.slug} className="border rounded-lg p-4 shadow">

          <img
            src={blog.image}
            alt={blog.title}
            className="rounded mb-3"
          />

          <h2 className="text-xl font-bold">
            {blog.title}
          </h2>

          <p className="text-gray-600">
            {blog.description}
          </p>

          <Link href={`/blog/${blog.slug}`}>
            <button className="mt-3 text-blue-600 font-semibold">
              Read Article →
            </button>
          </Link>

        </div>
      ))}

    </div>
  );
}
import { blogs } from "../../data/blogs";

export default async function BlogPost({ params }) {
  // params is a Promise in App Router
  const { slug } = await params;// No need to await if coming from page.js
  // But if using async functions (like fetching), you await fetch

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="p-10">Blog Not Found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-10 mt-20">
      <h1 className="text-4xl font-bold mb-3">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.date}</p>
      <img src={blog.image} alt={blog.title} className="rounded mb-6" />
      <p className="text-gray-700 whitespace-pre-line leading-7">{blog.content}</p>

      <div className="mt-12 border-t pt-6">
        <h3 className="text-xl font-semibold">Need Professional Cleaning?</h3>
        <p className="mt-2">
          Contact Hobart Premium Cleaning for reliable cleaning services in Hobart.
        </p>
        <button className="mt-4 cta-gradient  text-white px-6 py-2 rounded">
          Request Free Quote
        </button>
      </div>
    </div>
  );
}
function BlogGallery() {
  return (
    <div>
      <section>
        <div className="w-[100vw] md:w-full py-24 sm:py-32 mt-10 font-sans bg-gray-900 text-white p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-60 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://res.cloudinary.com/dbtqrbhh6/image/upload/v1726171335/IMG_2706_w8iblc.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24 font-sans">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Visit our Image Gallery
              </h2>

              <p className="mt-4 text-gray-200">
                Get a glimpse of the inspiring artwork and moments from our
                camps in Gilgit-Baltistan, capturing the joy, growth, and
                emotional expression of young participants.
              </p>

              <a
                href="https://exif-photo-blog-drab-six.vercel.app/"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Take me there!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogGallery;

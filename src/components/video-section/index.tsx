import { tw } from 'twind';

const PlayButton = () => (
  <button
    type="button"
    className={tw(
      `w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform
      -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl`,
    )}
    aria-label="play video"
  >
    <svg className={tw(`w-6 h-6 fill-current text-black-400 group-hover:text-green-600 flex-shrink-0`)} viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
    <span className={tw(`ml-3`)}>Watch the playlist (guide)</span>
  </button>
);

const VideoSection = () => (
  <section className={tw(`bg-gradient-to-b from-black-50 to white shadow-inner`)}>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <div className={tw(`flex flex-col max-w-4xl mx-auto pt-8 md:pt-12 lg:pt-16`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h4 className={tw(`text-base text-black-600 font-semibold tracking-wide uppercase`)}>Tutorial Playlist</h4>
        <h1 className={tw(`font-sans font-bold text-3xl sm:text-4xl lg:text-6xl text-center leading-snug text-black-800 mb-6`)}>
        Learn how to use <span className={tw(`text-green-600`)}>Script App</span>
      </h1>
      </div>
        <div className={tw(`w-full`)}>
          <div className={tw(`relative shadow-2xl mx-6 lg:mx-0`)}>
            <div className="iframe-container">
              <iframe
                width="1000"
                height="1000"
                src="https://www.youtube.com/embed/?listType=playlist&list=PL590L5WQmH8eYTXiTTjzo4YnK7vkCqZTI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className={tw(`w-full h-full`)}
              ></iframe>
            </div>
            <PlayButton />
          </div>
        </div>
        {/* Add space here */}
        <div className="h-30"></div>
      </div>
    </div>
  </section>
);

export default VideoSection;

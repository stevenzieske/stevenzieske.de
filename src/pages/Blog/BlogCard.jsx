import React, { useState } from "react";

function BlogCard({
    title = "defaultTitle",
    description = "defaultDescription",
    coverPhotoUrl = "",
    tags = ["tag1", "tag2"],
    hrefBlogPost = "/",
    hrefLiveDemo = "/",
}) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="inline-block h-[250px] w-[300px] select-none [perspective:1500px]"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`relative h-full w-full cursor-pointer transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
            >
                <div style={{
                    backgroundImage: `url(${coverPhotoUrl})`,
                    backgroundColor: 'rgba(0,0,0,0.55)',
                    backgroundBlendMode: 'multiply'
                }} className={`absolute h-full w-full rounded-xl bg-no-repeat bg-cover bg-center shadow-xl [backface-visibility:hidden]`}>
                    <div className="flex flex-col justify-center h-full p-4">
                        <h1 className="text-2xl text-white">{title}</h1>
                    </div>
                </div>
                <div className="absolute h-full w-full rounded-xl bg-blue-200 shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex flex-col justify-between h-full px-4 pt-3 pb-2">
                        <p className="">{description}</p>
                        <div>
                            <div className="flex">
                                {tags.map((tag, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className="mr-2 rounded-full bg-gray-500/40 px-2 pt-1 pb-1.5 text-xs text-white shadow-md"
                                        >
                                            {tag}
                                        </span>
                                    );
                                })}
                            </div>
                            <div className="flex justify-between">
                                <a
                                    className={`${hrefBlogPost == "" ? 'hidden' : null} my-2 transform rounded-md border-none bg-cyan-500 px-4 py-2 text-white transition duration-300 hover:scale-110 hover:shadow-lg `}
                                    href={hrefBlogPost}
                                >
                                    Read Article
                                </a>
                                <a
                                    className={`${hrefLiveDemo == "" ? 'hidden' : null} ${hrefBlogPost == "" ? 'ml-auto' : null} my-2 transform rounded-md border-none bg-cyan-500 px-4 py-2 text-white transition duration-300 hover:scale-110 hover:shadow-lg `}
                                    href={hrefLiveDemo}
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default BlogCard;

{
    /* <div className="group h-96 w-96 [perspective:1500px]">
  <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" alt="frontImg" className='object-cover w-full h-full shadow-xl rounded-xl shadow-black/40' />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col items-center min-h-full justify-content">
              <h1 className="text-3xl">test</h1>
          </div>
      </div>
  </div>
  </div> */
}

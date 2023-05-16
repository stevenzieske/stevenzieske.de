import React, { useState, useEffect } from 'react'
import { GraphQLClient, gql } from 'graphql-request'

import BlogCard from './BlogCard'

const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL_ENDPOINT)

const QUERY = gql`
    {
        blogPosts {
            slug
            title
            shortDescription
            tags
            coverPhoto{
                url
            }
        }
    }
`

function Blog() {

    // let [blogPosts, setBlogPosts] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const blogPosts = await graphcms.request(QUERY);
    //         setBlogPosts(blogPosts.blogPosts);
    //         console.log(blogPosts.blogPosts);
    //       } catch (error) {
    //         console.error('Fehler beim Abrufen der Daten:', error);
    //       }
    //     };

    //     fetchData();
    //   }, []);

    const blogPosts = [
        {
            "datePublished": "2023-05-05",
            "id": "clhb0sore54eh0bw1h7mpvlir",
            "slug": "this-is-the-first-test-post",
            "title": "This is the first test Post",
            "tags": [
                "React",
                "Tailwind CSS"
            ],
            "content": {
                "html": "<h1>This is Post 1</h1><p>This is the content </p>"
            },
            "coverPhoto": {
                "url": "https://media.graphassets.com/2TtQpQLrRcK7gWkfQHbO"
            }
        },
        {
            "datePublished": "2023-05-05",
            "id": "clhb0w1cg574e0aupvs9cgttk",
            "slug": "this-is-the-second-test-post",
            "title": "This is the second test Post",
            "tags": [],
            "content": {
                "html": "<h1>This is post 2</h1><p>This is the content</p>"
            },
            "coverPhoto": {
                "url": "https://media.graphassets.com/L4WvmXGKTwW25nYRpLZq"
            }
        }
    ]

    return (
        <div className="container flex flex-col w-10/12 mx-auto sm:w-8/12">
            <h3 className="py-4 text-4xl text-gray-600">
                Blog
            </h3>
            <p className="leading-8 text-gray-800 text-md txt-color-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore voluptatum sunt aspernatur quia consequuntur amet voluptatibus, aliquam tenetur facilis necessitatibus, voluptas omnis ipsum ratione, dolore maiores at veniam? Ea, provident.
            </p>
            <div className="flex flex-wrap gap-6">
                {blogPosts.map((blogPost, index) => {
                    return (
                        <BlogCard
                            key={index}
                            title={blogPost.title}
                            description={blogPost.shortDescription}
                            coverPhotoUrl={blogPost.coverPhoto.url}
                            tags={blogPost.tags}
                            hrefBlogPost={`/posts/${blogPost.slug}`}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Blog
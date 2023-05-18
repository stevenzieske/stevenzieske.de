import React, { useState, useEffect } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import { TypeAnimation } from 'react-type-animation';

import BlogCard from './BlogCard'

const graphcms = new GraphQLClient("https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clhb0fum01smx01tahj72h6fv/master")

const QUERY = gql`
    {
        blogPosts {
            slug
            title
            shortDescription
            tags
            githubUrl
            coverPhoto{
                url
            }
        }
    }
`

function Blog() {

    const [blogPosts, setBlogPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogPosts = await graphcms.request(QUERY);
                setBlogPosts(blogPosts.blogPosts);
                console.log(blogPosts.blogPosts);
                setIsLoading(false);
            } catch (error) {
                console.error('Fehler beim Abrufen der Daten:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container flex flex-col w-10/12 mx-auto sm:w-8/12">
            <h3 className="py-4 text-4xl text-gray-600">
                Blog
            </h3>
            <p className="leading-8 text-gray-800 text-md txt-color-normal">
                If you click on the following projects you will find a description of the project, you can read the block article, go to the live demo or the GitHub Repo.
            </p>
            <div className="flex flex-wrap gap-6">
                {isLoading ? <span className='text-gray-600 text-xl py-4 flex'>
                    <p>Loading</p>
                    <TypeAnimation
                        sequence={[
                            '.',
                            1000,
                            '..',
                            1000,
                            '...',
                            1000,
                        ]}
                        cursor={false}
                        repeat={Infinity}
                    />
                </span> :
                    !blogPosts.length
                        ? <p className='text-gray-600 text-xl py-4'>Oops... there are no posts to display</p>
                        : blogPosts.map((blogPost, index) => {
                            return (
                                <BlogCard
                                    key={index}
                                    title={blogPost.title}
                                    description={blogPost.shortDescription}
                                    coverPhotoUrl={blogPost.coverPhoto.url}
                                    tags={blogPost.tags}
                                    hrefBlogPost={`/posts/${blogPost.slug}`}
                                    hrefGitHubURL={blogPost.githubUrl}
                                />
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Blog
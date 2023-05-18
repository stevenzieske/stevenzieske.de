import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

import { GraphQLClient, gql } from 'graphql-request'

const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL_ENDPOINT)

function BlogPostPage() {
    const [blogPost, setBlogPost] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { blogPostSlug } = useParams()

    useEffect(() => {
        const QUERY = gql`
            {
                blogPost(where: {slug: "${blogPostSlug}"}) {
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
        const fetchData = async () => {
            try {
                const blogPost = await graphcms.request(QUERY);
                setBlogPost(blogPost.blogPost);
                console.log(blogPost.blogPost);
                setIsLoading(false);
            } catch (error) {
                console.error('Fehler beim Abrufen der Daten:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [])

    return (
        <div>
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
                <>
                    <p>
                        BlogPostPage for {blogPostSlug}
                    </p>
                    <p>{blogPost.title}</p>
                    <p>{blogPost.shortDescription}</p>
                    {blogPost.tags?.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                </>
            }
        </div>
    )
}

export default BlogPostPage
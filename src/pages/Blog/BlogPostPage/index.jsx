import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { GraphQLClient, gql } from 'graphql-request'

const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL_ENDPOINT)

function BlogPostPage() {
    let [blogPost, setBlogPost] = useState([])
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
            const blogPost = await graphcms.request(QUERY)
            setBlogPost(blogPost.blogPost)
            console.log(blogPost.blogPost)
        }
        fetchData()
            .catch(console.error);
    }, [])

    return (
        <div>
            <p>
                BlogPostPage for {blogPostSlug}
            </p>
            <p>{blogPost.title}</p>
            <p>{blogPost.shortDescription}</p>
            {blogPost.tags?.map((tag, index) => (
                <p key={index}>{tag}</p>
            ))}
        </div>
    )
}

export default BlogPostPage
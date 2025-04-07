import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { format } from 'date-fns';
import { PortableText } from '@portabletext/react';
import BlogLayout from '@/components/BlogLayout';
import AuthorCard from '@/components/AuthorCard';
import BlogCard from '@/components/BlogCard';
import { getPost, getRelatedPosts, getCategories } from '@/lib/sanity.client';
import { urlFor } from '@/lib/image';
import { Post } from '@/types';

// Set revalidate interval (for ISR)
export const revalidate = 60;

// Define dynamic metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }
  
  // Get formatted date if available
  const formattedDate = post.publishedAt 
    ? format(new Date(post.publishedAt), 'MMMM dd, yyyy')
    : undefined;
  
  // Get author name if available
  const authorName = post.authors && post.authors[0] ? post.authors[0].name : undefined;
  
  // Get image URL if available
  const imageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : undefined;
  
  return {
    title: post.title,
    description: post.excerpt || `Read this article by ${authorName || 'IEEE GU'}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read this article by ${authorName || 'IEEE GU'}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: authorName ? [authorName] : undefined,
      images: imageUrl ? [imageUrl] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read this article by ${authorName || 'IEEE GU'}`,
      images: imageUrl ? [imageUrl] : undefined,
    }
  };
}

// Define portableTextComponents as in the original file
const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
          <Image 
            src={urlFor(value).width(800).height(450).url()} 
            alt={value.alt || ''} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        {value.caption && (
          <div className="text-sm text-gray-500 mt-2 text-center">{value.caption}</div>
        )}
      </div>
    ),
    code: ({ value }: any) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm font-mono">{value.code}</code>
      </pre>
    ),
    callout: ({ value }: any) => {
      const typeStyles = {
        info: 'bg-blue-50 border-blue-500 text-blue-700',
        warning: 'bg-yellow-50 border-yellow-500 text-yellow-700',
        success: 'bg-green-50 border-green-500 text-green-700',
        error: 'bg-red-50 border-red-500 text-red-700',
      };
      
      const style = typeStyles[value.type as keyof typeof typeStyles] || typeStyles.info;
      
      return (
        <div className={`border-l-4 p-4 my-6 ${style}`}>
          <PortableText value={value.content} />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a 
          href={value.href}
          rel={rel}
          target={rel ? '_blank' : undefined}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold mt-6 mb-3">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-700">{children}</blockquote>
    ),
  },
};

// Main blog post page component
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, relatedPosts, categories] = await Promise.all([
    getPost(params.slug),
    getRelatedPosts(params.slug, 3),
    getCategories()
  ]);
  
  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-800">Post Not Found</h1>
        <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }
  
  const formattedDate = post.publishedAt 
    ? format(new Date(post.publishedAt), 'MMMM dd, yyyy')
    : '';
    
  return (
    <BlogLayout 
      categories={categories}
      showCategories={false}
    >
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center mb-8">
          <div className="text-gray-600">
            {formattedDate}
            {post.estimatedReadingTime && ` · ${post.estimatedReadingTime} min read`}
          </div>
        </div>
        
        {post.mainImage && (
          <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
            <Image 
              src={urlFor(post.mainImage).width(800).height(450).url()} 
              alt={post.title} 
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}

        <div className="prose prose-blue prose-lg max-w-none">
          <PortableText value={post.content} components={portableTextComponents} />
        </div>

        <div className="mt-12">
          {post.authors && post.authors[0] && (
            <AuthorCard author={post.authors[0]} showFullBio />
          )}
        </div>
      </article>
      
      {relatedPosts.length > 0 && (
        <aside className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost: Post) => (
              <BlogCard key={relatedPost._id} post={relatedPost} variant="small" />
            ))}
          </div>
        </aside>
      )}
    </BlogLayout>
  );
}

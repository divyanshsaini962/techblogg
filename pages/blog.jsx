import React, { useState } from 'react';
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sanityClient,urlFor } from "../sanity";
import Link from "next/link";
import Pagination from '../components/Pagination';






// interface Props {
//   posts: Post[];
// }

function Home({posts}) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12; // Number of posts to display per page
  
  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Calculate index of the first and last post on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    return (
      <div>
        <Head>
          <title>My Blog | Explore the new horizon</title>
          <link rel="icon" href="/smallLogo.jpg" />
          <meta name="author" content="Divyanshu Saini"/>
          <meta name="description" content="Tech Blog Service features 100% original, thoroughly researched analyses on
           the latest phones, computers, wearables, and smart home gadgets. We provide fully independent, unbiased hands-on testing and comparisons of tech gear so you can make informed buying decisions. Read our comprehensive evaluations complete with photography and performance benchmarks before your next tech purchase." />
          <meta name="keywords" content="technology reviews, tech gadgets, smartphone reviews, laptop comparisons, gaming PCs, wearable technology, artificial intelligence, robotics advancements, smart home devices, tech tips, software updates, cybersecurity news, mobile apps reviews, tech industry trends, digital innovation"/>
        </Head>
  
        <main className="font-bodyFont">
          {/* ============ Header Start here ============ */}
          <Header />
          {/* ============ Header End here ============== */}
          
          {/* ============ Post Part Start here ========= */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6 px-4">
            {
              currentPosts.map((post) => (
                <Link key={post._id} href={`/post/${post.slug.current}`}>
                 <div className="border-[1px] border-secondaryColor border-opacity-40 h-[450px] group">
                   <div className="h-3/5 w-full overflow-hidden">
                     {post.mainImage && (
                      <img 
                       width = {380}
                       height={390}
                       src={urlFor(post.mainImage).url()}
                       alt={post.title}
                       className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
                      />
                     )} 
                   </div>
                   <div className="h-2/5 w-full flex flex-col justify-center">
                       <div className="flex justify-between item-center px-4 py-1 border-b-[1px] border-b-gray-500">
                       <p className="font titleFont md:text-xl text-lg uppercase font-bold">{post.title.substring(0, 30)}...</p>
                       <img className="h-12 w-12 rounded-full object-cover" src={urlFor(post.author.image).url()} alt="author img" />
                         
                       </div>
                       <p className="py-2 px-4 text-base">
                         {post.description.substring(0, 50)}....by  - {""}
                         <span className="font-samibold">{post.author.name}</span>
                       </p>
                   </div>
                 </div>
                </Link>  
               ))
            }
          </div>
          {/* ============ Post Part End here =========== */}
          {/* Pagination start here */}
          <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange} // Make sure you pass onPageChange as a prop
        />
        {/* Pagination End here */}

          {/* ============ Footer Start here============= */}
          <Footer />
          {/* ============ Footer End here ============== */}
        </main>
      </div>
    );
  }
  
  export const getServerSideProps = async()=>{
    const query = `*[_type == "post"]{
      _id,
        title,
        author ->{
          name,
          image
        },
        description,
        mainImage,
        slug
    }`
    const posts =await sanityClient.fetch(query)
    return{
      props:{
        posts,
      }
    }
  }
  
  export default Home;
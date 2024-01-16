import React, { useState } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { sanityClient, urlFor } from '../../sanity';
import PortableText from "react-portable-text";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSession } from "next-auth/react";
import Head from "next/head";

function Post({post}) {

  const { data: session } = useSession();

  const [userErr, setUserErr] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(() => {
      setSubmitted(true);
    })
    .catch((err) => {
      setSubmitted(false);
    });
  };

  const handleUserErr = () => {
    if (!session) {
      setUserErr("Please sign in to Comment!");
    } else {
      setUserErr("");
    }
  };

  return (
    <div>
      <Head>
        <title>Tech Blog | Blog</title>
        <link rel="icon" href="/smallLogo.jpg" />
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.title} />
        <meta name="author" content={post.author.name}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="font-bodyFont">
        <Header />

        <img 
          className="w-full h-96 object-cover"
          src={urlFor(post.mainImage).url()}
          alt="cover-image" 
        />
      <div className="max-w-3xl mx-auto mb-10">
                                                  {/* Article start here code */}
        <article className="w-full mx-auto p-8 md:p-6 bg-secondaryColor/10">
          <h1 className="font-titleFont font-medium text-[32px] text-primary border-b-[1px] border-b-cyan-800 mt-10 mb-3">
            {post.title}
          </h1>

          <h2 className="font-bodyFont text-[18px] text-gray-500 mb-2">
            {post.description}
          </h2>

          <div className='flex items-center gap-3'>
            <img 
              className="rounded-full w-12 h-12 object-cover bg-red-400"
              src={urlFor(post.author.image).url()} 
              alt="author-img" 
            />

            <p className='font-bodyFont md:text-base text-sm'>
              Blog post by <span className='font-bold text-seondaryColor'>
                {post.author.name}
              </span> - Published at {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>

          <div className='mt-10'>
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "qa5srfx6"}
              content={post.body}
              serializers={{
                h1: (props) => (
                  <h1 className='text-3xl font-bold my-5 font-titleFont' {...props} />
                ),
                h2: (props) => (
                  <h2 className='text 2xl font-bold my-5 font-titleFont' {...props} />
                ),
                li: ({children}) => (
                  <li className='ml04 list-disc'>{children}</li>
                ),
                link: ({href, children}) => (
                  <a href={href} className='text-cyan-500 hover:underline'>
                    {children}
                  </a>
                )
              }}
            />
          </div>
        </article>

        <hr className='max-w-lg my-5 mx-auto boder[1px] border-secondaryColor' />

        {submitted ? (
          <div className="flex flex-col items-center gap-2 p-10 my-10 bg-bgColor text-white mx-auto">
            <h1 className="text-2xl font-bold">Thank you for submitting your comment</h1>
            <p>Once it has been approved, it will appear below!</p>
          </div>
        ) : (
          <div>

            <input 
              {...register("_id")}
              type="hidden"
              name="_id"
              value={post._id} 
            />
                                     {/* Form started here code */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-7 flex flex-col">

              <label className='flex flex-col'>
                <span className='font-titleFont px-2 md:px-0 pt-1 font-semibold text-base'>Name</span>
                
                <input
                  {...register("name", { required: true })}
                  className='text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor' 
                  type="text"
                  placeholder='Enter your name'
                />

                {errors.name && (
                  <p className="text-sm font-titleFont font-semibold text-red-500 my-1 px-4">
                    <span className="text-base font-bold italic mr-2">!</span>
                    Name is required!
                  </p>
                )}
              </label>

              <label className='flex flex-col'>
                <span className='font-titleFont px-2 md:px-0 pt-1 font-semibold text-base'>Email</span>
                
                <input
                  {...register("email", {required: true})}
                  className='text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor'
                  type="email"
                  placeholder='Enter your Email' 
                />

                {errors.email && (
                  <p className="text-sm font-titleFont font-semibold text-red-500 my-1 px-4">
                    <span className="text-base font-bold italic mr-2">!</span>
                    Email is required!
                  </p>
                )}
              </label>
              
              <label className='flex flex-col'>
                <span className='font-titleFont px-2 md:px-0 pt-1 font-semibold text-base'>Comment</span>
                
                <textarea
                  {...register("comment", {required: true})}
                  className='text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor'
                  placeholder='Enter your Comment'
                  rows={6}
                />

                {errors.comment && (
                  <p className="text-sm font-titleFont font-semibold text-red-500 my-1 px-4">
                    <span className="text-base font-bold italic mr-2">!</span>
                    Comment is required!
                  </p>
                )}
              </label>

              {session && (
                <button
                  className='w-full bg-bgColor text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300'
                  type='submit'>
                  Submit
                </button>
              )}

            </form>

            {!session && (
              <button 
                onClick={handleUserErr}
                className='w-full bg-bgColor text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300'
                type='submit'>
                Submit
              </button>
            )}

            {userErr && (
              <p className="text-sm font-titleFont text-center font-semibold text-red-500 underline underline-offset-2 my-1 px-4 animate-bounce">
                <span className="text-base font-bold italic mr-2">!</span>
                {userErr}
              </p>
            )}

            <div className="w-full flex flex-col p-10 my-10 mx-auto shadow-bgColor shadow-lg space-y-2">
              <h3 className="text-3xl font-titleFont font-semibold">Comments</h3>
              <hr />

              {post.comments.map((comment) => (
                <div key={comment._id}>
                  <p>
                    <span className="text-secondaryColor">{comment.name}</span> {" "}
                    {comment.comment}
                  </p>
                </div>
              ))}

            </div>

          </div>
        )}
      </div>
        <Footer />
      </main>
    </div>
  );
}

export default Post;

export async function getStaticPaths() {
  const query = `*[_type == "post"]{
    _id,
      slug{
      current
      }
  }`;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post)=>({
    params:{
      slug:post.slug.current,  
    } 

      }));
      return{
        paths,
        fallback: "blocking",
      };
};


export const getStaticProps = async ({params}) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    publishedAt,
    title,
    author ->{
    name,
    image,
    },
    "comments":*[_type == "comment" && post._ref ==^._id && approved == true],
    description,
    mainImage,
    slug,
    body
    }`

    const post = await sanityClient.fetch(query,{
        slug:params?.slug,
    })
    if(!post){
        return{
            notFound:true
        }
    }
    return{
        props:{
            post
        },
        revalidate:60,
    };
}
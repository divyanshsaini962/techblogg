
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from "next/head";

const About = () =>{
    return(
        <div>
             <Head>
              <title>Tech Blog | About Us</title>
              <link rel="icon" href="/smallLogo.jpg" />
              <meta name="description" content="Tech Blog Service is run by a team of knowledgeable tech 
              enthusiasts who provide unbiased reviews and advice. Learn more about our experienced 
              editors and tech experts."/>
              <meta name="keywords" content="tech blog, tech reviews, electronics, gadgets, technology, editors, 
              authors, writers, tech enthusiasts, experts, about us, buy a phone, Buy a laptop, best suggestion 
              in smartphone, best affordable price phone buy, buy gaming pc"/>
              <meta name="author" content="Divyanshu Saini" />
              <meta name="language" content="English"/>
            </Head> 

            <Header />
                
                <div className="w-full mx-auto p-5 bg-secondaryColor/10">
                    <h1 className='text-black text-5xl font-bold m-8'>About Us</h1>
                    <h3 className='ml-8 text-lg'>TechBlog is a technology blog created by web developers Ashish Sharma and Divyansh Saini.
                     We are two friends who share a passion for technology, writing, and building digital products.
                     <p className=' text-lg mb-3'>In addition to writing tutorials and guides, we offer web 
                     development services for clients looking to build custom websites and web apps. Our expertise is 
                     in crafting modern frontends using React, Next.js, and Tailwind CSS. For the backend, we specialize
                      in JavaScript and Node.js development.</p>
                      <p className=' text-lg mb-3'>Some of the services we provide include:</p> 
                        <li>- Building performant, SEO-optimized marketing websites</li>
                        <li>- Developing web dashboards and admin portals</li>
                        <li>- Integrating REST APIs and databases like MongoDB</li>
                        <li>- Implementing content management with Sanity.io</li>
                        <li>- Optimizing web apps for speed and scalability</li>
                        </h3>
                    <p className='ml-8 text-lg mb-3'>We take pride in our work and ensure that all our deliverables meet 
                    the highest coding standards. Our focus is on translating your business requirements into a polished,
                     functional web product that provides value to your users.</p>
                    <p className='ml-8 text-lg mb-3'>When we're not coding for clients, you'll find us writing technical
                     tutorials on the latest web technologies here on TechBlog. We enjoy sharing our knowledge with the 
                     dev community!</p>
                    <p className='ml-8 text-lg mb-3'>Let us know if you need help with any part of your digital presence, from web consulting to 
                    development and design. We're passionate about using technology to grow businesses and can't wait 
                    to work with you.</p>
                    

                </div>
        
            <Footer />
        </div>
    )
}

export default About;
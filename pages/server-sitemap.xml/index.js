// import Axios from 'axios';
// import { getServerSideSitemap } from 'next-sitemap'; 
// import { getServerSideProps } from 'next-sitemap';

// export async function getServerSideProps(context) {
//     const response = await Axios.get(
//         `base_url/<data>`,
//     );
//     const data = await response?.data;
//     const fields = data?.map((item)=>({
//         loc:`https://www.techblogservice.online/${item?.url}`,
//         lastmodi:new Date().toISOString()
//     }))
//     return getServerSideSitemap(context,fields);

// }

// export default function Site(){}
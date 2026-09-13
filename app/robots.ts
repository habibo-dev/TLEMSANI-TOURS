import type { MetadataRoute } from 'next';
export default function robots():MetadataRoute.Robots{return{rules:{userAgent:'*',allow:'/'},sitemap:'https://tlemsani-tours.vercel.app/sitemap.xml'}}
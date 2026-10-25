import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {artigos,categoriaPorSlug} from "../dados";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return artigos.map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const a=artigos.find(a=>a.slug===slug);return a?{title:a.titulo,description:a.resumo,alternates:{canonical:`/blog/${slug}`}}:{};}
export default async function Artigo({params}:Props){const {slug}=await params;const a=artigos.find(a=>a.slug===slug);if(!a)notFound();const categoria=categoriaPorSlug(a.categoria);return <main className="blog-page"><header className="blog-header"><Link href="/blog">← Voltar ao blog</Link><span>{categoria?.nome}</span><h1>{a.titulo}</h1><p>{a.resumo}</p><small>{a.autor} · {new Date(a.data+"T12:00:00").toLocaleDateString("pt-BR")}</small></header><article className="blog-conteudo">{a.conteudo.map((sec,i)=><section key={i}>{sec.titulo&&<h2>{sec.titulo}</h2>}{sec.paragrafos.map((p,j)=><p key={j}>{p}</p>)}</section>)}<p><Link href="/blog">← Explorar outros artigos</Link></p></article></main>}
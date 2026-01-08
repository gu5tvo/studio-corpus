import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

interface Post {
    title: string;
    excerpt: string;
    slug: string;
    mainImage: any;
    author: string;
    category: string;
    publishedAt: string;
}

async function getPosts(): Promise<Post[]> {
    const query = `*[_type == "post"] | order(publishedAt desc) {
        title,
        excerpt,
        "slug": slug.current,
        mainImage,
        "author": author->name,
        "category": categories[0]->title,
        publishedAt
    }`;
    return await client.fetch(query);
}

export default async function BlogPage() {
    const posts = await getPosts();

    if (!posts || posts.length === 0) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <section className="pt-40 pb-20 px-6 text-center">
                    <h1 className="text-4xl font-bold text-primary">Nenhum post encontrado</h1>
                    <p className="text-muted mt-4">Em breve traremos novidades para você.</p>
                </section>
                <Footer />
            </main>
        );
    }

    const featuredPost = posts[0];
    const remainingPosts = posts.slice(1);
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Nosso Blog</span>
                    <h1 className="text-6xl md:text-9xl font-bold text-primary leading-[0.8] tracking-tighter mb-12">
                        Pensamentos <br />
                        <span className="text-accent">&</span> Conhecimento.
                    </h1>
                </div>
            </section>

            {/* Featured Post */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link href={`/blog/${featuredPost.slug}`} className="group block relative aspect-[21/9] w-full rounded-[3rem] overflow-hidden shadow-2xl mb-12">
                        {featuredPost.mainImage && (
                            <Image
                                src={urlForImage(featuredPost.mainImage).url()}
                                alt={featuredPost.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-12 left-12 right-12 text-white">
                            <span className="bg-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">{featuredPost.category || "Destaque"}</span>
                            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter max-w-4xl">{featuredPost.title}</h2>
                            <div className="flex items-center gap-6 text-white/80 font-medium">
                                <div className="flex items-center gap-2"><Calendar size={16} /> {new Date(featuredPost.publishedAt).toLocaleDateString('pt-BR')}</div>
                                <div className="flex items-center gap-2"><User size={16} /> {featuredPost.author}</div>
                            </div>
                        </div>
                    </Link>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {remainingPosts.map((post, i) => (
                            <Link key={i} href={`/blog/${post.slug}`} className="group block">
                                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl mb-8">
                                    {post.mainImage && (
                                        <Image
                                            src={urlForImage(post.mainImage).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                            {post.category || "Geral"}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold text-primary mb-4 tracking-tight group-hover:text-accent transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-lg text-muted leading-relaxed mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-muted font-medium">
                                        <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR')}</span>
                                        <span className="w-1 h-1 bg-muted rounded-full" />
                                        <span>{post.author}</span>
                                    </div>
                                    <ArrowRight size={24} className="text-accent -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-32 px-6 bg-secondary/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tighter">Conhecimento na sua caixa de entrada.</h2>
                    <p className="text-xl text-muted mb-12">Assine nossa newsletter para receber artigos exclusivos e dicas semanais de saúde.</p>
                    <form className="flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            className="flex-1 px-8 py-5 rounded-full bg-white border border-primary/10 text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                        <button className="bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/10">
                            Quero me inscrever
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}

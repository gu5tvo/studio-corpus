import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, Instagram, Facebook, Linkedin } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
        title,
        "date": publishedAt,
        "authorName": author->name,
        "authorImage": author->image,
        "category": categories[0]->title,
        mainImage,
        body
    }`;
    return await client.fetch(query, { slug });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);

    if (!post) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <section className="pt-40 pb-20 px-6 text-center">
                    <h1 className="text-4xl font-bold text-primary">Artigo não encontrado</h1>
                    <Link href="/blog" className="text-accent hover:underline mt-4 inline-block">Voltar para o blog</Link>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* article Header */}
            <article className="pt-32">
                <header className="px-6 mb-16">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 font-medium">
                            <ArrowLeft size={18} /> Voltar para o Blog
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-secondary/50 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                {post.category || "Geral"}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-primary leading-[1.1] tracking-tighter mb-8">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-primary/5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                                    {post.authorImage && (
                                        <Image
                                            src={urlForImage(post.authorImage).url()}
                                            alt={post.authorName}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <div>
                                    <p className="font-bold text-primary">{post.authorName}</p>
                                    <p className="text-xs text-muted">Especialista Studio Corpus</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-muted">
                                <span className="flex items-center gap-2"><Calendar size={16} /> {new Date(post.date).toLocaleDateString('pt-BR')}</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="px-6 mb-20">
                    <div className="max-w-6xl mx-auto relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl">
                        {post.mainImage && (
                            <Image
                                src={urlForImage(post.mainImage).url()}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 mb-32">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-xl prose-primary max-w-none text-muted leading-relaxed">
                            <PortableText
                                value={post.body}
                                components={{
                                    types: {
                                        image: ({ value }) => (
                                            <div className="relative w-full aspect-video my-12 rounded-[2rem] overflow-hidden shadow-xl">
                                                <Image
                                                    src={urlForImage(value).url()}
                                                    alt="Post image"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ),
                                    },
                                    block: {
                                        h2: ({ children }) => <h2 className="text-3xl font-bold text-primary mt-16 mb-8 tracking-tight">{children}</h2>,
                                        h3: ({ children }) => <h3 className="text-2xl font-bold text-primary mt-12 mb-6 tracking-tight">{children}</h3>,
                                        blockquote: ({ children }) => (
                                            <blockquote className="border-l-4 border-accent pl-8 py-4 my-12 bg-secondary/10 rounded-r-3xl italic text-2xl text-primary font-medium">
                                                {children}
                                            </blockquote>
                                        ),
                                    },
                                }}
                            />
                        </div>

                        {/* Social Share */}
                        <div className="mt-20 pt-12 border-t border-primary/5 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-primary uppercase tracking-widest text-sm">Compartilhe</span>
                                <div className="flex gap-2">
                                    <button className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Instagram size={20} /></button>
                                    <button className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Facebook size={20} /></button>
                                    <button className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Linkedin size={20} /></button>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 font-bold text-accent hover:underline">
                                <Share2 size={20} /> Copiar Link do Artigo
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            <section className="py-32 px-6 bg-secondary/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-primary mb-12 tracking-tight">Artigos Relacionados</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: "5 Dicas para Aliviar a Dor Lombar no Trabalho Remoto", img: "https://images.unsplash.com/photo-1544367563-12123d815d19?q=80&w=1000&auto=format&fit=crop" },
                            { title: "Pilates vs. Musculação: Qual o melhor para a postura?", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop" }
                        ].map((post, i) => (
                            <Link key={i} href="#" className="group">
                                <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-lg mb-6">
                                    <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">{post.title}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

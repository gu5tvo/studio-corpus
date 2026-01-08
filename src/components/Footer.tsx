import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white py-16 border-t border-secondary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/brand/logo-full.png"
                                alt="Studio Corpus"
                                width={200}
                                height={50}
                                className="h-14 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-muted text-lg max-w-sm mb-6">
                            Referência em atendimento humanizado para mulheres que buscam qualidade de vida através da Fisioterapia e do Pilates.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Navegação</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-muted hover:text-accent transition-colors">Início</Link></li>
                            <li><Link href="/sobre" className="text-muted hover:text-accent transition-colors">Sobre</Link></li>
                            <li><Link href="/tratamentos" className="text-muted hover:text-accent transition-colors">Tratamentos</Link></li>
                            <li><Link href="/blog" className="text-muted hover:text-accent transition-colors">Blog</Link></li>
                            <li><Link href="/contato" className="text-muted hover:text-accent transition-colors">Contato</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-muted">
                                <MapPin size={18} className="text-accent" />
                                R. Paraíba - Juçara, Imperatriz - MA
                            </li>
                            <li className="flex items-center gap-3 text-muted">
                                <Phone size={18} className="text-accent" />
                                (99) 99140-6087
                            </li>
                            <li className="flex items-center gap-3 text-muted">
                                <Mail size={18} className="text-accent" />
                                studiocorpus@email.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-secondary flex flex-col md:row items-center justify-between gap-4 text-sm text-muted">
                    <p>© {new Date().getFullYear()} Studio Corpus. Todos os direitos reservados.</p>
                    <p>Desenvolvido com carinho para o Studio Corpus.</p>
                </div>
            </div>
        </footer>
    );
}

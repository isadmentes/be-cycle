import { Header } from "../../components/Header";

export const HomePage = () => {
    return (
        <main className="min-h-screen bg-neutral-50" >
            <Header />

            <article className="w-full max-w-5xl mx-auto flex flex-col items-center  py-18 px-10">
                <h1 className="text-amber-800 text-4xl font-bold text-center mb-12">
                    Inovação e circularidade para uma indústria regenerativa
                </h1>

                <div className="grid md:grid-cols-2 items-center gap-8">
                    <img src="./figures/economia-circular-emf-ciclovivo-1024x696.webp" />

                    <h2 className="text-black text-xl md:max-w-3xl text-justify">
                        Nos sistemas convencionais, <a class="underline decoration-sky-500"> toneladas de subprodutos </a> como
                        cascas, sementes, polpas, bagaços e efluentes <a class="underline decoration-sky-500"> são descartadas </a>,
                        gerando impacto ambiental e custos de manejo. No modelo 5.0,
                        esses materiais passam a ser matérias-primas secundárias,
                        processadas por rotas tecnológicas limpas e conectadas a
                        produtivas inteligentes. A aplicação de tecnologias verdes
                        permite <a class="underline decoration-sky-500"> recuperar </a> compostos bioativos, fibras, óleos
                        e biopolímeros com aplicação nos setores <a class="underline decoration-sky-500"> alimentício,
                            cosmético, farmacêutico e de bioplásticos </a>.
                    </h2>
                </div>
            </article>
        </main>
    );
}
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

export const ProductsPage = () => {

  return (
    <main className="min-h-screen bg-neutral-50" >
      <Header />


      <article className="w-full max-w-5xl mx-auto flex flex-col items-center  py-18 px-10">
        <h1 className="text-amber-800 text-4xl font-bold text-center mb-12">
          Produtos
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
          <Card img="./figures/minhocaria.jpg" title={"Composto"} />
          <Card img="./figures/fibras-de-laranja.jpg" title={"Fibras de laranja"} />
          <Card img="./figures/roupas-sustentaveis.jpg" title={"Roupas Sustentáveis"} />

        </div>
      </article>
    </main>
  );
}
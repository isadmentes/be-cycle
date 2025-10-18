import { CompanyCard } from "../../components/CompanyCard";
import { Header } from "../../components/Header";

export const CompaniesPage = () => {

  return (
    <main className="min-h-screen bg-neutral-50" >
      <Header />


      <article className="w-full max-w-5xl mx-auto flex flex-col items-center  py-18 px-10">
        <h1 className="text-amber-800 text-4xl font-bold text-center mb-12">
          Empresas
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
          <CompanyCard img="./figures/natcrom.png" title={"Ingredientes botânicos"} />
          <CompanyCard img="./figures/circulare.png" title={"Lixo eletrônico"} />
          <CompanyCard img="./figures/logo-jafuimandioca.svg" title={"Copos Sustentáveis"} />

        </div>
      </article>
    </main>
  );
}
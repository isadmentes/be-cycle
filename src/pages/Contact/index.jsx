import { useState } from "react";
import { Header } from "../../components/Header";

export const ContactPage = () => {

    const [name, setName]=useState ("")
    const [email, setEmail]=useState("")
    const [mensagem, setMensagem]=useState("")

    const handleSubmit = event => {
      event.preventDefault () 

      console.log ({name, email, mensagem})
        setName ("")
        setEmail ("")
        setMensagem ("")
    }
    
  return (
    <main className="min-h-screen bg-neutral-50" >
                <Header />
    
     <article className="w-full max-w-5xl mx-auto flex flex-col items-center  py-18 px-10">
                    <h1 className="text-amber-800 text-4xl font-bold text-center mb-12">
                        Contato
                    </h1>
    <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col space-y mb-2">
          <label htmlFor="name" className="font-medium">
            Digite seu nome
          </label>

          <input
            id="name"
            name="name"
            placeholder="Nome completo"
            className="py-2 px-4 border rounded-2x1 w-full"
            value={name}
            onChange={event => setName(event.target.value)}

          />
        </fieldset>

        <fieldset className="flex flex-col space-y mb-2">
          <label htmlFor="email" className="font-medium">
            Digite seu email
          </label>

          <input
            id="email"
            name="email"
            placeholder="Email"
            className="py-2 px-4 border rounded-2x1 w-full"
            value={email}
            onChange={event => setEmail(event.target.value)}

          />
        </fieldset>

           <fieldset className="flex flex-col space-y mb-2">
          <label htmlFor="mensagem" className="font-medium">
            Digite sua mensagem
          </label>

          <input
            id="mensagem"
            name="mensagem"
            placeholder="mensagem"
            className="py-2 px-4 border rounded-2x1 w-full"
            value={mensagem}
            onChange={event => setMensagem(event.target.value)}

          />
        </fieldset>
        <button
          type="submit"
          className="inline-block px-4 rounded-lg border houver:lg-slate-300 transition">
          Enviar
        </button>

    </form>
    
    </article>


    </main>
  );
}
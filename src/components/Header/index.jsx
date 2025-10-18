import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="bg-green-800 p-8">
            <h2 className = "text-neutral-50 text-3xl text-center font-bold mb-4">Be-cycle</h2>
            <ul className="flex flex-col md:flex-row items-center text-neutral-50 text-lg font-bold justify-between">
                <li> <Link to="/">Inicio </Link></li>
                <li> <Link to="/produto">Produtos </Link></li>
                <li> <Link to="/empresa">Empresas </Link></li>
                <li> <Link to="/tecnologia">Tecnologias </Link></li>

            </ul>
        </header>
    )
}
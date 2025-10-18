
export const Card = ({img, title}) => {
    return (
        <section className= "bg-green-800 h-full p-4 flex flex-col items-center justify-center rounded-2xl">
            <figure className="mb-2 w-full max-h-40 h-full">
                <img src={img} alt={title} className="w-full h-full object-cover" />
            </figure>

            <article className="space-y-1 text-neutral-50">
                <h4 className="text-2xl font-semibold">{title}</h4>              
                
            </article>

        </section>
    )
}
interface CirculoProps {
    texto: string
    quasePerfeito?: boolean // propriedade opcional
}


export default function Circulo(props:CirculoProps){

    return (
        <div className={`
            flex justify-center items-center
            h-64 w-64 bg-cyan-500 text-5xl

            ${props.quasePerfeito ? 'rounded-md' : 'rounded-full'}
            
        `}>
            {props.texto}
        </div>
    )
}
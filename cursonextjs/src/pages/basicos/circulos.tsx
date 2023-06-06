import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos(){
    return (
        <div className="flex justify-around h-screen items-center bg-slate-600">
            <Circulo texto="Circulo1"/>
            <Circulo texto="Circulo2"/>
            <Circulo texto="Circulo3" quasePerfeito/>
        </div>
    )
}
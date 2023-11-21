import Image from "next/image";
import gato from "../img/gato.jpg"

export default function Hotspot() {
  return (
    <div className="bg-slate-900 h-screen flex items-center justify-center">
        <Image src={gato} className=" h-[400px] w-[280px] pr-1 " alt="gato ESTUPIDO sai daí bobão" />
      <div className="bg-white p-4 rounded-[5px] h-[400px] w-[360px] justify-center">
        <form className="w-full flex-col p-3">
          <h1 className=" text-gray-700 text-3xl pt-10 font-semibold ">Hotspot</h1>
          <h2 className=" text-gray-600 pt-[108px] p-2">Insira seu código de ativação</h2>
          <input type="text" placeholder="*************" className=" p-2 border w-full rounded mb-4 " />
          <button className=" bg-red-700 w-full text-white p-3 rounded">Conectar</button>
        </form>
      </div>
    </div>
  );
}

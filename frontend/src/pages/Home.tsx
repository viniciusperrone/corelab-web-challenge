import { MagnifyingGlass, Sliders } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Background } from '../components/Background';

export function Home() {
  return (
    <Background>
      <header className="flex flex-row w-full mt-[132px] pl-[3.25rem] pr-[1.85rem]">
        <div className="flex flex-row justify-evenly items-center w-full h-[45px] rounded-[100px] bg-blue-400">
          <MagnifyingGlass className="text-black" size={20} weight="light" />
          <input
            className="bg-transparent w-[88%] h-[100%] text-[20px] font-sans font-normal text-neutral-800 placeholder:text-neutral-600"
            type="text"
            placeholder="Buscar"
          />
        </div>

        <Link to="/filter">
          <Sliders
            className="-rotate-90 yellow-700 text-zinc-800"
            size={45}
            weight="light"
          />
        </Link>
      </header>
      <button className="w-[364px] h-[50px] mt-[32px] mx-auto bg-blue-600 rounded-[100px] text-[20px] font-sans font-medium text-neutral-900">
        ADICIONAR
      </button>
    </Background>
  );
}

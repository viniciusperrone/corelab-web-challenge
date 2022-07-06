import { Heart, X } from 'phosphor-react';

export function CardAd() {
  return (
    <div className="w-[215px] min-h-[180px] bg-red-700 m-auto">
      <header className="flex flex-row justify-end items-center py-3 pr-3">
        <span className="cursor-pointer">
          <X className="text-[#020202] opacity-60" size={30} weight="light" />
        </span>
        <span className="cursor-pointer">
          <Heart
            className="text-[#020202] opacity-60"
            size={30}
            weight="light"
          />
        </span>
      </header>
      <article className="flex-1 pt-3 pl-3">
        <p className="text-[10px] font-sans font-normal text-white">
          SANDERO STEPWAY
        </p>
        <p className="text-[10px] font-sans font-normal text-white">
          Preço: 2200
        </p>
        <p className="text-[10px] font-sans font-normal text-white">
          Descrição: Único dono, usado 6 anos.
        </p>
        <p className="text-[10px] font-sans font-normal text-white">
          Ano: 2016
        </p>
        <p className="text-[10px] font-sans font-normal text-white">
          Cor: Vermelho
        </p>
      </article>
    </div>
  );
}

import { Heart, X } from 'phosphor-react';
import EditImage from '../assets/EditImage.png';

export function EditAd() {
  return (
    <div className="w-[400px] min-h-[280px] bg-red-700 m-auto">
      <header className="flex flex-row justify-end items-center pr-5">
        <span className="cursor-pointer">
          <img className="w-20 h-20" src={EditImage} alt="" />
        </span>
        <span className="cursor-pointer">
          <X className="text-[#020202] opacity-60" size={56} weight="light" />
        </span>
        <span className="cursor-pointer">
          <Heart
            className="text-[#020202] opacity-60"
            size={56}
            weight="light"
          />
        </span>
      </header>
      <article className="flex-1 pt-9 pl-[26px]">
        <p className="text-[18px] font-sans font-normal text-white">
          SANDERO STEPWAY
        </p>
        <p className="text-[18px] font-sans font-normal text-white">
          Preço: 2200
        </p>
        <p className="text-[18px] font-sans font-normal text-white">
          Descrição: Único dono, usado 6 anos.
        </p>
        <p className="text-[18px] font-sans font-normal text-white">
          Ano: 2016
        </p>
        <p className="text-[18px] font-sans font-normal text-white">
          Cor: Vermelho
        </p>
      </article>
    </div>
  );
}

import { ArrowLeft, MagnifyingGlass, Sliders } from 'phosphor-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container } from '../components/Container';

export function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleGoBack() {
    navigate(-1);
  }

  function handleSearch() {
    navigate('/search');
  }

  return (
    <Container>
      {location.pathname !== '/' && (
        <span
          className="absolute mt-10 ml-10 cursor-pointer"
          onClick={handleGoBack}
        >
          <ArrowLeft className="text-zinc-900" size={32} weight="light" />
        </span>
      )}

      <header className="flex flex-row w-full mt-[132px] pl-[3.25rem] pr-[1.85rem]">
        <div className="flex flex-row justify-evenly items-center w-full h-[45px] rounded-[100px] bg-blue-400">
          <span className="cursor-pointer" onClick={handleSearch}>
            <MagnifyingGlass className="text-black" size={20} weight="light" />
          </span>
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

      <Link
        className="w-[330px] h-[50px] mt-[32px] mx-auto bg-blue-600 rounded-[100px] flex justify-center items-center text-[20px] font-sans font-medium text-neutral-900"
        to="/vehicle/create"
      >
        ADICIONAR
      </Link>
    </Container>
  );
}

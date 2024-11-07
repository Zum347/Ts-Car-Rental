import ReactSelect from 'react-select';
import { makes } from '../../constants';
import { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { OptionType } from '../../types';

// 1.Bileşen
const SearchButton = ({ designs }: { designs: string }) => (
  <button className={`ml-3 z-10 ${designs}`}>
    <img src="/magnifying-glass.svg" width={40} height={40} />
  </button>
);

// 2.Bileşen
const SearchBar = () => {
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');

  const [searchParams, setSearchParams] = useSearchParams();

  const options: OptionType[] = useMemo(
    () =>
      makes.map((make) => ({
        label: make,
        value: make,
      })),
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ make, model });
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          defaultInputValue={searchParams.get('make')!}
          onChange={(e) => e && setMake(e.value)}
          className="w-full text-black"
          options={options}
        />
        <SearchButton designs="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <img
          width={25}
          src="/model-icon.png"
          alt="araç"
          className="absolute ml-4"
        />

        <input
          defaultValue={searchParams.get('model')!}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setModel(e.target.value)
          }
          placeholder="örn:Civic"
          type="text"
          className="searchbar__input rounded text-black"
        />

        <SearchButton designs="sm:hidden" />
      </div>

      <SearchButton designs="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
import { useEffect, useState } from 'react';
import { OptionType } from '../../types';
import Select from 'react-select';
import { useSearchParams } from 'react-router-dom';

interface CustomProps {
  title: string;
  paramName: string;
  options: OptionType[];
}

const CustomFilter = ({ title, paramName, options }: CustomProps) => {
  const [selected, setSelected] = useState<OptionType | null>(null);
  const [params, setParams] = useSearchParams();

  
  useEffect(() => {
    if (selected?.value) {
     
      params.set(paramName, selected?.value.toLowerCase());
    } else {
     
      params.delete(paramName);
    }

    setParams(params);
  }, [selected]);

  const defaultValue = {
    label: params.get(paramName),
    value: params.get(paramName),
  };

  return (
    <div className="text-black w-fit">
      <Select
        defaultValue={defaultValue}
        onChange={(e) => setSelected(e)}
        placeholder={title}
        className="min-w-[100px]"
        options={options}
      />
    </div>
  );
};

export default CustomFilter;
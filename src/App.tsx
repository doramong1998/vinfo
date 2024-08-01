import Vietnam from './components/Vietnam';
import { useMemo, useState } from 'react';
import dataJson from './assets/data.json';

function App() {
  const [province, setProvince] = useState<any>(null);

  const dataProvince = useMemo(() => {
    if (province) {
      return (dataJson as any)?.[province];
    }
  }, [province]);

  console.log(dataProvince);
  return (
    <div className='w-full'>
      <div className='m-auto min-h-screen pb-12  xl:p-0 p-4'>
        <div className='p-4 w-full bg-sea'>
          <div className='xl:w-[80%] max-w-[1200px] m-auto relative'>
            <Vietnam
              setProvince={(value: any) => {
                setProvince(value);
              }}
              province={province}
            />
          </div>
        </div>
        <div className='bg-city_light p-4 text-black text-2xl font-bold'>
          {dataProvince?.name}
        </div>
      </div>
    </div>
  );
}

export default App;

import Vietnam from './components/Vietnam';
import { useMemo, useState } from 'react';
import dataJson from './assets/data.json';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCjfg-xog8VNHZjppPJY1_puhgCOTEr7eA',
  authDomain: 'usopp-5ee60.firebaseapp.com',
  projectId: 'usopp-5ee60',
  storageBucket: 'usopp-5ee60.appspot.com',
  messagingSenderId: '847289515947',
  appId: '1:847289515947:web:35447508b968d4f46bdcee',
  measurementId: 'G-5RF8MPD40F',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  const [province, setProvince] = useState<any>(null);

  const dataProvince = useMemo(() => {
    if (province) {
      return (dataJson as any)?.[province];
    }
  }, [province]);

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

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

import { IonContent, IonPage } from '@ionic/react';
import Forcast from '../components/forcast';
import Logo from '../components/logo';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">not is Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <Logo />
        <div className="flex flex-col mt-4 pb-[14px] bg-white sticky top-3">
          <div className='flex pr-6 pl-6'>
            <div className="w-1/2">
              <p className="text-xs">September 11th 2022</p>
              <p className='text-sm font-semibold'>Good Afternoon, Dexter</p>
            </div>
            <div className="w-1/2 flex justify-end items-center gap-3">
              <button>
              <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
              </button>
              <button>
                <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex gap-5 pl-5 pr-5 pt-2'>
            <div className="w-1/2 rounded-xl h-60 flex flex-col items-center box-shadow pt-2" style={{'backgroundImage': "url('../../assets/today.jpg')",
             backgroundPosition: 'center', backgroundRepeat: 'repeat', backgroundSize: 'contain'}}>
              <p className="text-5xl font-semibold text-white relative mix-blend-hard-light">37 <span className=" text-[20px] font-bold absolute top-1 right-[30px]">0</span> C</p>
              <p className='text-white text-xs font-normal mix-blend-hard-light'>Chance of rain: 56%</p>
              <p className='text-white text-xs font-normal mix-blend-hard-light'>Wind: 1.5km/hr</p>
            </div>
            <div className="w-1/2 rounded-xl h-60 flex flex-col items-center box-shadow pt-2">
              <img alt="" src='../../assets/icon/head.png' className="w-20 h-20"/>
              <p className="text-sm font-semibold">Dexter Okeke</p>
              <p className="text-sm font-semibold">10Ha</p>
              <p className="text-xs font-medium">Maize/Cassava</p>
              <p className="text-xs font-normal">Wonders Cooperative</p>
              <p className="text-xs font-normal">Abagana Njikoka</p>

              <button className="bg-[#044404] mt-7 mb-4 rounded-3xl p-0 text-white w-24 h-7">View</button>
            </div>
          </div>
        </div>

       {/*  forcast */}
       <div className='pl-5 mt-2'>
       <Forcast/>
       </div>

       {/* tools */}
        <div className='pl-5 pr-5 mt-7 pt-3'>
          <p className="font-bold text-sm">Tools</p>
          <div className='flex flex-wrap gap-4 mt-3'>
            <div className='flex flex-col flex-1 pt-3 pb-3 bg-[#044404] items-center rounded-[10px]'>
              <img alt="" src="../../assets/icon/sheep.png" className='w-11 h-11'></img>
              <p className='text-white text-xs font-semibold text-center w-28'>Livestock Farm Activity Planner</p>
            </div>
            <div className='flex flex-col flex-1 pt-3 pb-3 bg-[#044404] items-center rounded-[10px]'>
              <img alt="" src="../../assets/icon/crop.png" className='w-11 h-11'></img>
              <p className='text-white text-xs font-semibold text-center w-28'>Cropping Season Activity Planner</p>
            </div>
            <div className='flex flex-col flex-1 pt-5 pb-2 gap-1 bg-[#044404] items-center rounded-[10px]'>
              <svg className="h-11 w-11 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="9" y1="14" x2="15" y2="8" />  <circle cx="9.5" cy="8.5" r=".5" fill="currentColor" />  <circle cx="14.5" cy="13.5" r=".5" fill="currentColor" />  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" /></svg>
              <p className='text-white text-xs font-semibold text-center w-28'>Receipt Generator</p>
            </div>
            <div className='flex flex-col flex-1 pt-5 pb-2 gap-1 bg-[#044404] items-center rounded-[10px]'>
              <svg className="h-11 w-11 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />  <line x1="9" y1="7" x2="13" y2="7" />  <line x1="9" y1="11" x2="13" y2="11" /></svg>
              <p className='text-white text-xs font-semibold text-center w-28'>Farm Records</p>
            </div>
          </div>
        </div>

        {/* help */}
        <div className='pl-5 pr-5 mt-7 pt-3 mb-16'>
          <p className="font-bold text-sm">Help</p>
          <div className='flex flex-wrap gap-4 mt-3'>
            <div className='flex flex-col flex-1 pt-5 pb-2 gap-1 bg-[#4C4E4A] items-center rounded-[10px]'>
              <svg className="h-11 w-11 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              <p className='text-white text-xs font-semibold text-center w-28'>Important Dates & News</p>
            </div>
            <div className='flex flex-col flex-1 pt-5 pb-2 gap-1 bg-[#4C4E4A] items-center rounded-[10px]'>
              {/*  <img src="../../assets/icon/sheep.png" className='w-11 h-11'></img> */}
              <svg className="h-11 w-11 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              <p className='text-white text-xs font-semibold text-center w-28'>Call an Expert</p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

interface ContainerProps { }

const Forcast: React.FC<ContainerProps> = () => {
  return (
    <div className="scroll-snap">
    <p className="font-bold text-sm">5 day forecast</p>
    <div className="flex flex-nowrap gap-5 w-[520px]">
        <div className="w-[84px] h-[80px] flex flex-col items-center" style={{'backgroundImage': "url('../../assets/cloudy.jpg')",
             backgroundPosition: 'center', backgroundRepeat: 'repeat', backgroundSize: 'cover'}}>
                <p className=" text-[8px] font-medium text-white text-left mix-blend-hard-light">Tomorrow</p>
                <p className="text-xl font-semibold text-white relative mix-blend-hard-light">31 <span className=" text-[10px] font-bold absolute -top-1 right-[13px]">0</span> C</p>
                <p className='text-white text-xs font-normal mix-blend-hard-light'>Cloudy</p>  
        </div>
        <div className="w-[84px] h-[80px] flex flex-col items-center" style={{'backgroundImage': "url('../../assets/sunny.jpg')",
             backgroundPosition: 'center', backgroundRepeat: 'repeat', backgroundSize: 'cover'}}>
            <p className=" text-[8px] font-medium text-white text-left mix-blend-hard-light">Tomorrow</p>
                <p className="text-xl font-semibold text-white relative mix-blend-hard-light">31 <span className=" text-[10px] font-bold absolute -top-1 right-[13px]">0</span> C</p>
                <p className='text-white text-xs font-normal mix-blend-hard-light'>Cloudy</p>  
       
        </div>
        <div className="w-[84px] h-[80px] flex flex-col items-center" style={{'backgroundImage': "url('../../assets/snowy.jpg')",
             backgroundPosition: 'center', backgroundRepeat: 'repeat', backgroundSize: 'cover'}}>
            <p className=" text-[8px] font-medium text-white text-left mix-blend-hard-light">Tomorrow</p>
                <p className="text-xl font-semibold text-white relative mix-blend-hard-light">31 <span className=" text-[10px] font-bold absolute -top-1 right-[13px]">0</span> C</p>
                <p className='text-white text-xs font-normal mix-blend-hard-light'>Cloudy</p>  
       
        </div>
        <div className="w-[84px] h-[80px] flex flex-col items-center" style={{'backgroundImage': "url('../../assets/rainy.jpg')",
             backgroundPosition: 'center', backgroundRepeat: 'repeat', backgroundSize: 'cover'}}>
            <p className=" text-[8px] font-medium text-white text-left mix-blend-hard-light">Tomorrow</p>
                <p className="text-xl font-semibold text-white relative mix-blend-hard-light">31 <span className=" text-[10px] font-bold absolute -top-1 right-[13px]">0</span> C</p>
                <p className='text-white text-xs font-normal mix-blend-hard-light'>Cloudy</p>  
       
        </div>
        <div className="w-[84px] h-[80px] border">
            
        </div>
    </div>
    </div>
  );
};

export default Forcast;
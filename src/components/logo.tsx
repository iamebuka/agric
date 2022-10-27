interface ContainerProps { }

const Logo: React.FC<ContainerProps> = () => {
  return (
    <div className="justify-center flex mt-9 mb-2">
      <img src="../../assets/icon/logo.png"></img>
    </div>
  );
};

export default Logo;
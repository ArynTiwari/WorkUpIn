type ButtonProps = {
    title: string;
    width:string;
  };
  
  function Button({ title,width }: ButtonProps) {
    return (
      <button className={`w-${width} text-center justify-center bg-violet-600 text-base leading-snug uppercase  shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-full`}>
        {title}
      </button>
    );
  }
  
  export default Button;
  
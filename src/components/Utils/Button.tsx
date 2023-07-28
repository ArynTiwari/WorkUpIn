type ButtonProps = {
    title: string;
  };
  
  function Button({ title }: ButtonProps) {
    return (
      <button className='mt-2 mb-2 primary-button  text-sm h-10 max-w-[150px] text-center'>
        {title}
      </button>
    );
  }
  
  export default Button;
  
function Container({ children }) {
  return (
    <div className="container mx-auto px-[4px]  xl:w-[95%] 2xl:w-[85%] w-full">
      {children}
    </div>
  );
}

export default Container;

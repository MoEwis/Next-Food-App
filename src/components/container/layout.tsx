interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <section className={`mx-auto px-4 md:px-8 lg:px-16 xl:px-32 ${className}`}>
      {children}
    </section>
  );
};

export default Container;

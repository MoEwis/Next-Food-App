interface MinHeadingProps {
  title: string;
  subTitle: string;
  className?: React.ReactNode;
}
const MinHeading = ({ title, subTitle, className = "" }: MinHeadingProps) => {
  return (
    <div className={`${className}`}>
      <span className={`uppercase  font-semibold  leading-4 ${className}`}>
        {subTitle}
      </span>
      <h2 className={`text-primary font-bold text-4xl italic ${className}`}>
        {title}
      </h2>
    </div>
  );
};

export default MinHeading;

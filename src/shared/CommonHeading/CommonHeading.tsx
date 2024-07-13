const CommonHeading = ({
  title,
  subTitle = "",
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="text-center space-y-5 pb-20">
      <h2 className="text-5xl text-center">{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default CommonHeading;

const CommonHeading = ({
  title,
  subTitle = "",
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="text-center space-y-5 pb-20 p">
      <h2 className="md:text-5xl text-[45px] text-center capitalize">
        {title}
      </h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default CommonHeading;

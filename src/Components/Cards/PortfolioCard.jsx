/* eslint-disable react/prop-types */
const PortfolioCard = ({ data }) => {
  const { imgSrc, title, des, catagory } = data;
  return (
    <>
      <div>
        <img className="w-full object-cover" src={imgSrc} alt="" />
        <div className="bg-primary_text text-white h-[100px] relative w-full pt-[22px] pl-[18px] ]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-white text-[16px] font-normal">{des}</p>
          <p className="text-white text-[16px] font-normal">{catagory}</p>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;

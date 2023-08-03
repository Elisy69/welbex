function GiftItem({ headline, text }) {
  return (
    <div className="md:text-right">
      <h1 className="text-[13px] md:text-[18px] md:font-medium">
        {text ? (
          ""
        ) : (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]">
            -
          </span>
        )}
        {headline}
      </h1>
      {text ? <span className="text-[16px] ">{text}</span> : ""}
    </div>
  );
}

export default GiftItem;


const TextPrimary = ({ text, font, fontStyle }) => {
    return (
      <h2 className="">
        <u className={`${font} w-fit  ${fontStyle}  no-underline `} id="yagiz">
          {text}
        </u>
      </h2>
    );
  };
  
  export default TextPrimary;
  
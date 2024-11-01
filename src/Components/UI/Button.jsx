const Button = ({ TagName, btnText, className, ...rest }) => {
  return (
    <TagName className={`btn ${className}`} {...rest}>
      {btnText}
    </TagName>
  );
};

export default Button;

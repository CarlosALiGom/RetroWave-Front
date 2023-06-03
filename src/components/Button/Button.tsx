interface ButtonProps {
  text?: string;
  actionOnClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
  altText?: string;
  iconPath?: string;
}

const Button = ({
  actionOnClick,
  className,
  text,
  altText,
  height,
  iconPath,
  width,
}: ButtonProps): React.ReactElement => {
  return (
    <button onClick={actionOnClick} className={className} aria-label={altText}>
      {text ||
        (iconPath && (
          <img src={iconPath} alt={altText} width={width} height={height} />
        ))}
    </button>
  );
};

export default Button;

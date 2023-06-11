interface ButtonProps {
  text?: string;
  actionOnClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
  altText?: string;
  iconPath?: string;
  isDisabled?: boolean;
}

const Button = ({
  actionOnClick,
  className,
  text,
  altText,
  height,
  iconPath,
  width,
  isDisabled,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      onClick={actionOnClick}
      className={className}
      aria-label={altText}
      disabled={isDisabled}
    >
      {text ||
        (iconPath && (
          <img src={iconPath} alt={altText} width={width} height={height} />
        ))}
    </button>
  );
};

export default Button;

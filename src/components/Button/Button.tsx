interface ButtonProps {
  text?: string;
  actionOnClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
  altText?: string;
  iconPath?: string;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
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
  type,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      onClick={actionOnClick}
      className={className}
      aria-label={altText}
      disabled={isDisabled}
      type={type}
    >
      {text ||
        (iconPath && (
          <img src={iconPath} alt={altText} width={width} height={height} />
        ))}
    </button>
  );
};

export default Button;

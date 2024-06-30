import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
}

const Button = ({ primary, modifier, children, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary
    ? `bg-black-600 text-white border-black-500 hover:bg-black-700`
    : `bg-white text-black-600 border-black-300 hover:bg-black-100`;

  return (
    <button type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;

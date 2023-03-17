import { Button } from "@monorepo/shared";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Bss = ({ ...props }: Props) => {
  return <Button {...props}>dd</Button>;
};

export default Bss;

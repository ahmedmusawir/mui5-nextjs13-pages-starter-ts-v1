import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Main({ children }: Props) {
  return <main>{children}</main>;
}

export default Main;

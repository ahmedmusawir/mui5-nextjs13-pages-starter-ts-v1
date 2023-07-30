import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Header({ children }: Props) {
  return (
    <header>
      {children ? children : 'This is a Header container. Must have children'}
    </header>
  );
}

export default Header;

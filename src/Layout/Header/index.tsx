import { useState } from 'react';
import { Outer } from './style';
import BurgerBtn from './Burger/BurgerBtn';
import Nav from './Navigation';

const Header = () => {
  const [isActive, setIsActive] = useState<boolean | unknown>(null);

  return (
    <Outer>
      <BurgerBtn
        active={isActive}
        onClick={() => setIsActive(() => !isActive)}
      />
      <Nav active={isActive} />
    </Outer>
  );
};

export default Header;

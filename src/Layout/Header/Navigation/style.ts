import styled, {css, keyframes} from 'styled-components';

interface IProps {
    readonly open?: boolean | unknown;
    readonly position?: boolean | unknown;
    readonly time?: number;
}

const slide = keyframes`
  from {
    transform: translateX(100%) translateY(-100%);
  }

  to {
    transform: translateX(100%) translateY(-200%);
  }
`;

const slideBack = keyframes`
  from {
    transform: translateX(0) translateY(-100%);

  }

  to {
    transform: translateX(100%) translateY(-100%);
  }
`;

export const Container = styled.nav<IProps>`
  background: #20457c;
  position: fixed;
  top: 100%;
  opacity: ${(p) => (p.open != null ? 1 : 0)};
  left: -100%;
  width: 100%;
  height: 100%;

  animation: ${(p) =>
          p.open
                  ? css`
                    ${slideBack} 0.3s ease-out forwards;
                  `
                  : css`
                    ${slide} 0.3s ease-out forwards;
                  `};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Anchor = styled.a`
  color: #eaeaea;
  text-decoration: none;
  margin: 20px;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 10px;
  align-self: flex-start;
`;

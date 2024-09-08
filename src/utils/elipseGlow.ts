import styled from "styled-components";

export const EllipseGlow = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%; /* Hace que sea un círculo */
  background-image: radial-gradient(
    circle,
    rgba(151, 71, 255, 0.78) 0%,
    rgba(91, 43, 153, 0.22) 100%
  );
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 30px 15px rgba(151, 71, 255, 0.3),
    0 0 60px 30px rgba(91, 43, 153, 0.2);
  opacity: 0.7;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

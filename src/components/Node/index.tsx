import { ComponentProps } from "react";
import { Container, Title, Content } from "./styles";

interface IRoot extends ComponentProps<typeof Container> {}

export const Root = ({ ...rest }: IRoot) => {
  return <Container {...rest} />;
};

export const Node = {
  Root,
  Title,
  Content,
};

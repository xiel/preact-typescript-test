import { FunctionalComponent, h } from 'preact'
import styled from 'styled-components'

export type Props = {}

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const StylesComponentsExample: FunctionalComponent<Props> = ({ ...restProps }) => {
  return <div><Title>Styled Text</Title></div>
}

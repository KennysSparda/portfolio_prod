import Button from './Button'

export default function BtnMenu(props) {
  return <Button id="btnMenu" function={props.function}>{props.children}</Button>
}

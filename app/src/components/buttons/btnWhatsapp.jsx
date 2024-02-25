import Button from "./Button"
import Icon from '../icon/Icon'

export default function btnWhatsapp() {
  var links = ["https://whatsa.me/5541995101213"]
  return (
    <Button type='linkEx' id='btnHome' path={links[0]}>
      <div className="flex items-center">
        <Icon type={3}></Icon>
        <span className="ml-2">Whatsapp</span>
      </div>
    </Button>
  )
}


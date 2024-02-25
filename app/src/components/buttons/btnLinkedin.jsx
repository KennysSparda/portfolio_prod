import Button from "./Button"
import Icon from '../icon/Icon'

export default function btnLinkedin() {
  var links = ["https://www.linkedin.com/in/kenny-de-souza-vargas-8a521422a"]
  return (
    <Button 
      type='linkEx'
      id="btnHome"      
      path={links[0]}>
      <div className="flex items-center">
        <Icon type={4}></Icon>
        <span className="ml-2">Linkedin</span>
      </div>
    </Button>
  )
}
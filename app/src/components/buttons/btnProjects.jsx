import Button from './Button'
import Icon from '../icon/Icon'

export default function BtnProjects(props) {
  if(props.navbar == true) {
    return (
      <Button type='linkIn'
              function={props.function}
              path="/projects" > 
                Projetos
      </Button>
    )
  } else {
    return (
      <Button 
        type='linkIn' 
        id="btnHome"
        path="/projects" >
          <div className="flex items-center">
            <Icon type={13}></Icon>
            <span className="ml-2">Projetos</span>
          </div>
      </Button >
    )
  }
}
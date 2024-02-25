import Button from "./Button";
import Icon from '../icon/Icon';

export default function btnGithub() {
  var links = ["https://github.com/KennysSparda"];
  return (
    <Button 
      type='linkEx'
      id="btnHome"
      path={links[0]}
    >
      <div className="flex items-center">
        <Icon type={0}></Icon>
        <span className="ml-2">Github</span>
      </div>
    </Button>
  );
}
interface ButtonProps {
  classname: string;
  title: string;
  icon: any;
}

function ButtonMainWithIcon(props: ButtonProps) {
  <button className={props.classname}>
		{props.icon}
		{props.title}
	</button>;
}

export default ButtonMainWithIcon;
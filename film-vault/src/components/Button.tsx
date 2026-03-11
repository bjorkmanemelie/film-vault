type ButtonProps = {
  label: string;
  onClick: () => void; //returnerar inget
};

function Button(props: ButtonProps) {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;

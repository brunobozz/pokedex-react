import "./CircleType.scss";

export default function CircleType(props) {
  return (
    <img
      className={"circle-type bg-type-" + props.type}
      src={"../assets/icons/type/" + props.type + ".svg"}
    />
  );
}

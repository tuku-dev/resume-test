const Image = (props) => {
  if (props.imgUrl) {
    return (
      <img
        src={window.location.origin + props.imgUrl}
        alt={props.text}
        className={props.className}
      />
    );
  } else {
    return <></>;
  }
};

export default Image;

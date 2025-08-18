const EmptyMsg = ({empty}) => {
  

  return <>
  {empty.length === 0 ? <h3>I'm hungry</h3> : null}
  </>;
};

export default EmptyMsg;

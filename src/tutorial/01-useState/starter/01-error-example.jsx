const ErrorExample = () => {
  let title = "random title";
  const handleClickEvent = () => {
    title = "Hello People";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClickEvent}>
        Change title
      </button>
    </>
  );
};

export default ErrorExample;

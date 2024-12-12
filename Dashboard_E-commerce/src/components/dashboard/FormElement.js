function FormElement(children) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={children.name} className="form-lable">
          {children.name}
        </label>
        <input
          type={children.type}
          className="form-control"
          id={children.name}
          placeholder={children.placeholder}
          value={children.value}
          onChange={(e) => children.onChange(e)}
        />
      </div>
    </>
  );
}

export default FormElement;

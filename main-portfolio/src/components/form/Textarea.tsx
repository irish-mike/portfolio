interface Props {
  name: string;
  rows?: number;
  cols?: number;
  register: any; // Pass the register function as a prop
  errors: any; // Pass the errors object as a prop
}

const Textarea = ({ name, rows = 6, cols = 20, register, errors }: Props) => {
  // Replace space with underscore and remove special chars
  const id = name.toLowerCase().replace(/[^a-zA-Z0-9_]/g, "_");
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {name}
      </label>
      <textarea
        {...register(id)} // Use the register function passed as a prop
        id={id}
        className="form-control"
        rows={rows}
        cols={cols}
        aria-invalid={errors && errors[id] ? "true" : "false"} // Access errors[id] instead of errors.name
      />
      {errors && errors[id] && (
        <p className="text-danger">{errors[id].message}</p>
      )}
    </div>
  );
};

export default Textarea;

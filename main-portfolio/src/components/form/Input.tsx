interface Props {
  name: string;
  type: string;
  register: any; // Pass the register function as a prop
  errors: any; // Pass the errors object as a prop
}

const Input = ({ name, type, register, errors }: Props) => {
  // Replace space with underscore and remove special chars
  const id = name.toLowerCase().replace(/[^a-zA-Z0-9_]/g, "_");

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {name}
      </label>
      <input
        {...register(id)}
        id={id}
        type={type}
        className="form-control"
        aria-invalid={errors.name ? "true" : "false"}
      />
      {errors && errors[id] && (
        <p className="text-danger">{errors[id].message}</p>
      )}
    </div>
  );
};

export default Input;

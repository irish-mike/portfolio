import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Textarea from "./Textarea";
import Input from "./Input";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z
    .string()
    .min(6, { message: "Email must be at least 6 characters" })
    .email("This is not a valid email."),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(300, { message: "Message must be at less than 300 characters" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onTouched", resolver: zodResolver(schema) });

  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setSubmitting(true);
    try {
      console.log(data);
      //wait 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="Name" type="text" register={register} errors={errors} />
      <Input name="Email" type="email" register={register} errors={errors} />
      <Textarea name="Message" register={register} errors={errors} />

      <button
        disabled={!isValid || isSubmitting}
        type="submit"
        className="btn btn-primary flex"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;

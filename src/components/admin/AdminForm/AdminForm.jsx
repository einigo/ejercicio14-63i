import { useForm } from "react-hook-form";

import { toast } from "sonner";

import Input from "../../Input/input";
import TextArea from "../../TextArea/TextArea";

import { generateId } from "../../../helpers/helpers";

const AdminForm = (props) => {
const {setBlogs} = props;

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset
  } = useForm();

  const handleSubmit = (data) => {
    console.log(data);

    const newBlog = { ... data, id: generateId()};
    setBlogs((prev) => [ ... prev, newBlog]);

    toast.success('blog guardado correctamente');
    reset();
  };

  return (
    <form className="card p-3" onSubmit={onSubmitRHF(handleSubmit)}>
      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
          maxLength: 30,
        }}
        label="Titulo"
        name="title"
        placeholder="Mondongo"
        error={!!errors.title}
      />
      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
          pattern: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|jpeg)/i,
        }}
        className="mt-2"
        type="url"
        label="Enlace a imagen"
        name="image-url"
        placeholder="https://google.com"
        error={!!errors["image-url"]}
      />
      <TextArea
        register={register}
        options={{
          required: true,
          minLength: 5,
          maxLength: 3000,
        }}
        className="mt-2"
        type="url"
        label="Contenido del block"
        name="content"
        placeholder="Contenido"
        error={!!errors.content}
      />
      <div className="text-end">
        <button type="submit" className="btn btn-danger mt-3">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default AdminForm;

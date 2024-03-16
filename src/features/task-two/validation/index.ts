import { object, string } from "yup";

export const taskTwoFormSchema = object({
  name: string().required()
})
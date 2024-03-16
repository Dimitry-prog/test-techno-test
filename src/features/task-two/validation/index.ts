import { object, string } from "yup";

export const taskTwoFormSchema = object({
  name: string().matches(/^[A-Za-zа-яА-ЯёЁ]+$/, 'Only letter').required()
})
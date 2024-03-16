import { InferType } from "yup";
import { taskTwoFormSchema } from "../validation";

export type TaskTwoFormDataType = InferType<typeof taskTwoFormSchema>

export type AgeType = {
  count: number
  name: string
  age: number
}
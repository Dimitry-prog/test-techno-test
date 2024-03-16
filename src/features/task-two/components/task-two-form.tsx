import { Button, FormItem, FormLayoutGroup } from "@vkontakte/vkui";

import { ChangeEvent, useState } from "react";
import { useAge } from "../services/queries.ts";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { taskTwoFormSchema } from "../validation";
import { TaskTwoFormDataType } from "../types";
import useDebounce from "../../../hooks/use-debounce.tsx";

const TaskTwoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [prevName, setPrevName] = useState('');
  const [isRequest, setIsRequest] = useState(false);
  const debouncedValue = useDebounce(inputValue);
  const { data, isFetching, isError, refetch, error } = useAge(inputValue);
  const { handleSubmit, formState: { errors }, control } = useForm<TaskTwoFormDataType>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(taskTwoFormSchema),
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsRequest(false);
    setInputValue(e.target.value);

    if (!isRequest && debouncedValue) {
      setPrevName(e.target.value);
      setTimeout(() => {
        refetch();
      }, 3000);
    }
  }

  const onSubmit: SubmitHandler<TaskTwoFormDataType> = async (data) => {
    if (data.name === prevName || data.name.trim() === '') {
      return;
    }

    if (debouncedValue) {
      setIsRequest(true);
      setPrevName(data.name);
      refetch();
    }
  }

  if (isError) return <h2>{error.message}</h2>

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLayoutGroup>
        <FormLayoutGroup mode="vertical">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <FormItem htmlFor="task2" top="Your name">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <input
                    name="name"
                    onChange={(e) => {
                      field.onChange(e);
                      // setInputValue(e.target.value);
                      handleChange(e);
                    }}
                    id="task2"
                    value={field.value}
                    placeholder='Enter your name'
                    disabled={isFetching}
                  />
                  {errors.name && <p style={{ margin: '0', color: 'red' }}>{errors.name.message}</p>}
                  {data?.age && <p style={{ margin: '0' }}>Your age: {data?.age}</p>}
                </div>
              </FormItem>
            )}
          />
        </FormLayoutGroup>

        <Button type='submit'>Get your age</Button>
      </FormLayoutGroup>
    </form>
  );
};

export default TaskTwoForm;
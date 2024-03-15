import { Button, FormItem, FormLayoutGroup } from "@vkontakte/vkui";
import { useFact } from "../services/queries.ts";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const TaskOneForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { data, isFetching, isError, refetch, error } = useFact();
  const [inputValue, setInputValue] = useState(data?.fact || '');
  const handleClick = () => {
    refetch();
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    if (data) {
      setInputValue(data.fact);
      const spaceInd = data.fact.indexOf(' ') || 0;
      setTimeout(() => {
        inputRef.current?.setSelectionRange(spaceInd, spaceInd);
        inputRef.current?.focus();
      }, 0);
    }
  }, [data]);

  if (isFetching) return <h2>Loading...</h2>
  if (isError) return <h2>{error.message}</h2>

  return (
    <FormLayoutGroup>
      <FormLayoutGroup mode="vertical">
        <FormItem htmlFor="name" top="Fact">
          <input ref={inputRef} onChange={handleChange} id="name" value={inputValue}/>
        </FormItem>
      </FormLayoutGroup>

      <Button onClick={handleClick}>Get fact about cat</Button>
    </FormLayoutGroup>
  );
};

export default TaskOneForm;
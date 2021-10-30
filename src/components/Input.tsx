import { FC } from "react";

export interface InputProps  {
  id: string;
  autoCompleteData?: string[];
  onChange: VoidFunction
}

export const InputComponent: FC<InputProps> = ({
  id,
  autoCompleteData,
  onChange,
  ...restProps
}) => {
  return (
    <>
      <input type="text" list={id}  {...restProps} />
      {autoCompleteData && (
        <datalist id={id} >
          {autoCompleteData.map((value)=> <option value={value} />)}
        </datalist>
      )}
    </>
  );
};

import { CSSProperties, FC, useState } from "react";

export interface InputProps {
  id: string;
  autoCompleteData: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const listStyle: CSSProperties = {
  position: "absolute",
  backgroundColor: "#f1f1f1",

  overflow: "auto",
  zIndex: 1,
  maxHeight: "25rem",
  minWidth: "300px",

}
const itemStyle: CSSProperties = {
  color: "black",
  padding: "12px 16px",
  display: "block",  minWidth: "300px",

}
const dropdownStyle: CSSProperties = {
  position: "relative",
  display: "inline-block"
}
const inputStyle: CSSProperties = {
  fontSize: "16px",
  padding: "12px",
  minWidth: "300px",
}

export const InputComponent: FC<InputProps> = ({
  id,
  autoCompleteData,
  ...restProps
}) => {
  const [isShowList, setIsShowList] = useState<boolean>(false)
  const onfocusAtInput = () => {
    setIsShowList(true)
  }
  const onBlurAtInput = () => {
    setIsShowList(false)
  }
  return (
    <div style={dropdownStyle}>
      <input type="text" list={id} style={inputStyle} onFocus={onfocusAtInput} onBlur={onBlurAtInput} {...restProps} />
      {isShowList && 
        <div style={listStyle}>
          {autoCompleteData.length !== 0 ? autoCompleteData.map((value) => <a style={itemStyle}>{value}</a>):<a style={itemStyle}>Not found results</a> }
        </div>}

    </div>
  );
};

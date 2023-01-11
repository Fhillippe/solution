import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { loadPage } from "../pages/pageSlice";

export const Filter = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLElement>) => {
    const target = event.target as HTMLButtonElement;
    if (!Number.isNaN(target.value)) {
      setValue(target.value);
      dispatch(loadPage(["per_page=5", "page=1", `id=${target.value}`]));
    }
  };
  return (
    <input
      className="filter"
      onChange={handleChange}
      value={value}
      type="text"
    ></input>
  );
};

export default Filter;

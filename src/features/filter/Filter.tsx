import { TextField } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { loadPage } from "../pages/pageSlice";

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams({ id: "" });
  const handleChange = (event: React.ChangeEvent<HTMLElement>) => {
    const target = event.target as HTMLButtonElement;
    if (Number(target.value) > -1) {
      setSearchParams({ id: target.value });
    }
  };
  return (
    <TextField
      className="filter"
      onChange={handleChange}
      value={searchParams.get("id")}
      type="text"
      label="Filter by ID"
    />
  );
};

export default Filter;

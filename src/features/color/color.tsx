import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Modal } from "../modal/Modal";
import { displayModal, setModal } from "../modal/modalSlice";

export interface ColorInterface {
  id: number;
  name: string;
  year: string;
  color: string;
  pantoneValue: string;
}
export const Color = (color: ColorInterface) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setModal(color));
    dispatch(displayModal());
    const list = document.querySelectorAll(".pagination, .page, .filter");
    list.forEach((ele: Element) => {
      ele.classList.add("blur");
    });
  };
  return (
    <div
      className="color"
      onClick={handleClick}
      style={{ backgroundColor: `${color.color}` }}
    >
      <p>{color.id}</p>
      <p>{color.name}</p>
      <p>{color.year}</p>
    </div>
  );
};

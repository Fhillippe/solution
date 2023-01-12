import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { hideModal } from "./modalSlice";

const Modal = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(hideModal());
    const list = document.querySelectorAll(".pagination, .page, .filter");
    list.forEach((ele: Element) => {
      ele.classList.remove("blur");
    });
  };

  const color = useAppSelector((state: RootState) => {
    return state.modal.currentModal;
  });
  return (
    <div className="modal" style={{ backgroundColor: color.color }}>
      <p>{color.id}</p>
      <p>{color.name}</p>
      <p>{color.year}</p>
      <p>{color.color}</p>
      <p>{color.pantone_value}</p>
      <button onClick={handleClick}>x</button>
    </div>
  );
};

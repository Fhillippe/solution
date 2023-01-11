import { useAppDispatch } from "../../app/hooks";
import { hideModal } from "./modalSlice";

export const Modal = (props: any) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(hideModal());
    const list = document.querySelectorAll(".pagination, .page, .filter");
    list.forEach((ele: Element) => {
      ele.classList.remove("blur");
    });
  };

  const { color } = props;
  return (
    <div className="modal" style={{ backgroundColor: color.color }}>
      <p>{color.id}</p>
      <p>{color.name}</p>
      <p>{color.year}</p>
      <p>{color.color}</p>
      <p>{color.pantoneValue}</p>
      <button onClick={handleClick}>x</button>
    </div>
  );
};

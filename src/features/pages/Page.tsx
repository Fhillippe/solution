import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Color } from "../color/color";
const Page = () => {
  const page = useAppSelector((state: RootState) => state.page.currentPage);
  const loading = useAppSelector((state: RootState) => state.page.pageLoading);
  const error = useAppSelector((state: RootState) => state.page.pageError);
  if (loading) {
    return <div className="loading">Loading...</div>;
  } else if (error) {
    return <div className="error">Failed to find anything</div>;
  }
  const toRender = page.map((color: any) => {
    return (
      <Color
        key={color.id}
        id={color.id}
        name={color.name}
        color={color.color}
        year={color.year}
        pantoneValue={color.pantoneValue}
      />
    );
  });
  return <div className="page">{toRender}</div>;
};

export default Page;

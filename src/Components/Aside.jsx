// import { useDispatch, useSelector } from "react-redux";
// import { toggleSidebar } from "../Store/Slices/settings.slice";

const Aside = () => {
  // const show = useSelector((store) => store.settings.showSidebar);
  const show = false;
  // const dispatch = useDispatch();
  const closeSidebar = () => {
    // dispatch(toggleSidebar(false));
  };
  console.error("Side bar is not implemented!");

  return (
    <aside
      id="main-sidebar"
      className={`position-fixed top-0 end-0 bottom-0 bg-info p-3 text-end ${
        show ? "show" : ""
      }`}
    >
      <button className="btn btn-primary" onClick={closeSidebar}>
        <i className="fa-solid fa-times"></i>
      </button>
    </aside>
  );
};

export default Aside;

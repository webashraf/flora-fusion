import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink, Outlet,  } from "react-router-dom";

type ChipProps = {
  name: string;
  selected: boolean;
  setSelected: (name: string) => void;
  path: string;
};

const tabs = [
  { name: "Add Tree", path: "add-tree" },
  { name: "Manage Tree", path: "manage-tree" },
  { name: "Manage Category", path: "manage-category" },
];

const ManageProducts = () => {
  const [selected, setSelected] = useState(tabs[0].name);
  // const [isActive, setIsActive] = useState(true);

  return (
    <div className="px-4 py-14">
      <div className="py-14 flex items-center flex-wrap gap-2 justify-center">
        {tabs.map((tab) => (
          <Chip
            name={tab.name}
            selected={selected === tab.name}
            setSelected={setSelected}
            path={tab.path}
            key={tab.name}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

const Chip: React.FC<ChipProps> = ({ name, selected, setSelected, path }) => {
  return (
    <NavLink
      to={`/manage-products/${path}`}
      className={({ isActive }) => {
        if (isActive) {
          setSelected(name);
          return "text-white";
        }
        return "text-slate-900 hover:text-slate-200 hover:bg-[#61815f] rounded-lg";
      }}
    >
      <button
        onClick={() => setSelected(name)}
        className={`${
          selected
            ? "text-white"
            : "text-slate-900 hover:text-slate-200 hover:bg-[#61815f]"
        } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
      >
        <span className="relative z-10">{name}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 bg-gradient-to-r from-[#34543a] to-[#80a97e] rounded-md"
          ></motion.span>
        )}
      </button>
    </NavLink>
  );
};

export default ManageProducts;

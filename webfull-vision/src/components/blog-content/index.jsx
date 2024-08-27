import { useState } from "react";
import blogList from "../../../data/blog.json";

const BlogContent = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const handleToggle = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      {blogList.map((item) => (
        <div className="py-2" key={item.id}>
          <button
            className="w-full text-left px-4 py-2 font-semibold bg-gray-100 hover:bg-slate-800 hover:text-slate-100 focus:bg-slate-800 focus:text-slate-100 flex justify-between items-center"
            onClick={() => handleToggle(item.id)}
          >
            <span>{item.title}</span>
            <span>{openItemId === item.id ? "-" : "+"}</span>
          </button>
          {openItemId === item.id && (
            <div className="px-4 py-2 text-sm text-gray-800 bg-slate-100">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default BlogContent;

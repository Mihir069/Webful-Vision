import { useState, useEffect } from "react";
import blogList from "../../../../data/blog.json";

const BlogContent = () => {
  const [openItemId, setOpenItemId] = useState(() =>
    blogList.length > 0 ? blogList[0].id : null
  );

  const handleToggle = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    if (blogList.length > 0 && openItemId === null) {
      setOpenItemId(blogList[0].id);
    }
  }, [openItemId]);

  return (
    <div className="space-y-2">
      {blogList.map((item) => (
        <div className="py-1" key={item.id}>
          <button
            className="w-full text-left px-4 py-2 font-semibold bg-gray-100 hover:bg-slate-800 hover:text-slate-100 focus:bg-slate-800 focus:text-slate-100 rounded-md"
            onClick={() => handleToggle(item.id)}
          >
            {item.title}
            <span className="mr-2 float-right">
              {openItemId === item.id ? "-" : "+"}
            </span>
          </button>
          {openItemId === item.id && (
            <div className="px-4 py-2 text-sm text-gray-800 bg-slate-100 rounded-md">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogContent;

import { useState, useEffect } from "react";
import faqList from "../../../../data/faq.json";

const FaqList = () => {
  const [openItemId, setOpenItemId] = useState(() =>
    faqList.length > 0 ? faqList[0].id : null
  );

  const handleToggle = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    if (faqList.length > 0 && openItemId === null) {
      setOpenItemId(faqList[0].id);
    }
  }, [openItemId]);

  return (
    <div className="space-y-2">
      {faqList.map((item) => (
        <div className="py-1" key={item.id}>
          <button
            className="w-full text-left px-4 py-1 font-customFont font-semibold bg-gray-100 hover:bg-slate-800 hover:text-slate-100 focus:bg-slate-800 focus:text-slate-100 rounded-md"
            onClick={() => handleToggle(item.id)}
          >
            {item.title}
            <span className="mr-2 float-right">
              {openItemId === item.id ? "-" : "+"}
            </span>
          </button>
          {openItemId === item.id && (
            <div className="px-4 py-2 text-sm text-gray-800 bg-slate-100">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqList;

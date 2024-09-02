import faqContents from "../../../../data/faqContact.json";
const FaqContent = () => (
  <div className="space-y-4">
    {faqContents.map((items) => (
      <div className="p-4 flex gap-4" key={items.id}>
        <div className="bg-[#CE6021] rounded-full w-36 h-14 flex items-center justify-center">
          <img
            src={items.src}
            alt={items.alt}
            className="w-full h-full rounded-full p-3"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-md font-customFont mb-1">
            <strong>{items.title}</strong>
          </div>
          <div className="text-sm">
            <p>{items.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
export default FaqContent;

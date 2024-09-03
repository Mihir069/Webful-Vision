import BranchPartner from "../branch-partner";

const BranchModule = () => (
  <>
    <div className="relative overflow-hidden w-full px-4 pt-5 pb-12 md:px-48">
      <div className="text-center mb-5">
        <div className="py-2 text-2xl md:text-3xl font-semibold uppercase font-customFont">
          Financial <span className="text-[#CE6021]">Partners</span>
        </div>
        <div className="text-xs md:text-sm text-slate-700">
          We Are Authorized By Many Employers And Insurances
        </div>
      </div>
      <div className="flex justify-center py-3">
        <div className="w-full max-w-6xl">
          <BranchPartner />
        </div>
      </div>
    </div>
  </>
);

export default BranchModule;

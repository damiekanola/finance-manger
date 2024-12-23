export default function Transactions({ classes }) {
  return (
    <div className={`bg-white rounded-lg p-5 ${classes}`}>
      <h2 className=" text-2xl font-semibold">Transactions</h2>
      <ul>
        <li className=" border-b flex justify-between items-center py-2">
          <div className=" flex items-center gap-2">
            <div className=" bg-[#617c6c] w-8 h-8 rounded-full"></div>
            <div>
              <p>Figma</p>
              <p className=" text-sm text-[#8F8E96]">24 Oct</p>
            </div>
          </div>
          <p className="text-[#617c6c]">+$500</p>
        </li>
        <li className=" border-b flex justify-between items-center py-2">
          <div className=" flex items-center gap-2">
            <div className=" bg-[#617c6c] w-8 h-8 rounded-full"></div>
            <div>
              <p>Figma</p>
              <p className=" text-sm text-[#8F8E96]">24 Oct</p>
            </div>
          </div>
          <p className="text-[#617c6c]">+$500</p>
        </li>
        <li className=" border-b flex justify-between items-center py-2">
          <div className=" flex items-center gap-2">
            <div className=" bg-[#617c6c] w-8 h-8 rounded-full"></div>
            <div>
              <p>Figma</p>
              <p className=" text-sm text-[#8F8E96]">24 Oct</p>
            </div>
          </div>
          <p className="text-[#617c6c]">+$500</p>
        </li>
        <li className=" border-b flex justify-between items-center py-2">
          <div className=" flex items-center gap-2">
            <div className=" bg-[#617c6c] w-8 h-8 rounded-full"></div>
            <div>
              <p>Figma</p>
              <p className=" text-sm text-[#8F8E96]">24 Oct</p>
            </div>
          </div>
          <p className="text-[#617c6c]">+$500</p>
        </li>
      </ul>
    </div>
  );
}

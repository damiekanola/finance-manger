export default function Transactions(){
  return (
    <div className=" bg-white rounded-lg p-3 my-3">
      <h2 className=" text-2xl font-semibold">Transactions</h2>
      <ul>
        <li className=" border-b flex justify-between items-center py-2">
          <div>
            <p>Figma</p>
            <p className=" text-sm text-[#8F8E96]">24 Oct</p>
          </div>
          <p>+$500</p>
        </li>
        <li className=" border-b flex justify-between items-center py-2">
          <div>
            <p>Figma</p>
            <p className=" text-sm">24 Oct</p>
          </div>
          <p>+$500</p>
        </li>
        <li className=" border-b flex justify-between items-center py-2">
          <div>
            <p>Figma</p>
            <p className=" text-sm">24 Oct</p>
          </div>
          <p>+$500</p>
        </li>
        <li className=" border-b flex justify-between items-center py-2">
          <div>
            <p>Figma</p>
            <p className=" text-sm">24 Oct</p>
          </div>
          <p>+$500</p>
        </li>
        {/* <li className=" border-b">Figma</li>
        <li className=" border-b">Figma</li>
        <li className=" border-b">Figma</li>
        <li className=" border-b">Figma</li> */}
      </ul>
    </div>
  );
};

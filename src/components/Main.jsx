import Card from "./Card"

const Main = () => {
  return (
    <section>
        <h1 className="">Total Balance</h1>
        <p className=" text-2xl font-medium">$23,000</p>
        <div className=" flex gap-3 items-center justify-center my-3">
        <Card title="Income" />
        <Card title="Expense" />
        </div>
        <Card title="Total Savings" />
       
      
    </section>
  )
}

export default Main

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Balance from "../components/Balance";
import Card from "../components/Card";
import DoughnutChart from "../components/Doughnut";
import BarChart from "../components/BarChart";
import Transactions from "../components/Transcations";
const Home = () => {
  return (
    <main className="flex flex-col h-screen md:flex-row w-full gap-6 justify-between pt-11 px-3 md:px-5">
      <div className="flex-grow order-2">
        <Header />
        <Balance />

        <div className="md:flex items-start justify-between gap-5">
          <div className="md:w-2/3">
            <Card title="Income Flow" className="">
              <BarChart />
            </Card>

            <div className=" flex my-4 gap-4 max-h-[350px]">
              <Card title="Expense" styles="w-2/3">
                <DoughnutChart />
              </Card>
              <div className="w-1/3 flex flex-col gap-5">
                <Card title="Income" styles="flex-grow">
                  <p className=" font-medium text-3xl">$5000</p>
                </Card>
                <Card title="Expense" styles="flex-grow">
                  <p className=" font-medium text-3xl flex items-end">$5000</p>
                </Card>
              </div>
            </div>
          </div>

          <Transactions classes="md:w-1/3 " />
        </div>
      </div>

      <div className="w-fit flex flex-col gap-12 order-1">
        <img src="./src/assets/Logo.svg" className="w-11 max-767:hidden" />
        <Navbar />
      </div>
    </main>
  );
};

export default Home;

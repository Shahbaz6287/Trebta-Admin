import ResponsiveBreakpointsExample from "../../Ui/table";
import "./home.css";
import SummaryComponenty from "./summary-component";

interface User {
  id: number;
  name: string;
  email: string;
}

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
];

const data: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Alice Smith", email: "alice@example.com" },
  { id: 4, name: "Bob Johnson", email: "bob@example.com" },
];

const Home = () => {
  const tabledata = { name: "User Details Table" };
  return (
    <>
      <div className="home-container">
        <div className="display-flex">
          <h1 className="center">Hello I am Home Page</h1>
        </div>
      </div>
      <section>
        <SummaryComponenty />
      </section>
      <section>
        <ResponsiveBreakpointsExample<User>
          columns={columns}
          data={data}
          itemsPerPage={2}
        />
      </section>
    </>
  );
};

export default Home;

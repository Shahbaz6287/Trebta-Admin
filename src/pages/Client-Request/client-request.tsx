import ResponsiveBreakpointsExample from "../../Ui/table";

interface ClientRequestModel {
  id: number;
  name: string;
  email: string;
  contact: string;
}

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Contact", accessor: "contact" },
];

const data: ClientRequestModel[] = [
  { id: 1, name: "John Doe", email: "john@example.com", contact: "7823657836" },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    contact: "3726572365723",
  },
  {
    id: 3,
    name: "Alice Smith",
    email: "alice@example.com",
    contact: "2365723657",
  },
  {
    id: 4,
    name: "Bob Johnson",
    email: "bob@example.com",
    contact: "872365723657",
  },
  {
    id: 5,
    name: "Bob Johnson 5",
    email: "bob@example.com",
    contact: "872365723657",
  },
  {
    id: 6,
    name: "Bob Johnson 6",
    email: "bob@example.com",
    contact: "872365723657",
  },
];
const ClientRequest = () => {
  return (
    <>
      <h1>Hello I am ClientRequest</h1>
      <ResponsiveBreakpointsExample<ClientRequestModel>
        columns={columns}
        data={data}
        itemsPerPage={2}
      />
    </>
  );
};

export default ClientRequest;

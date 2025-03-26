import Header from "./components/Header";
import List from "./components/List";
const App = () => {
  return (
    <div className="max-w-7xl mx-auto my-0 p-5 flex flex-col gap-5">
      <Header />
      {
        /*  <Add />
      <Filter />*/
        <List />
        /*<ListManip />
      <Footer /> */
      }
    </div>
  );
};
export default App;

import "./App.css";
import { useEffect, useState } from "react";
import { Layout } from "containers/layouts";
import { InputComponent } from "components";
import { getCountries } from "services";
function App() {
  const [countries, setCountries] = useState<string[]>([]);

  async function fetchMyData(filter?:string) {
    const countries=await getCountries(filter)
    if (countries)
    setCountries(countries);
    else console.log("Error in fetching data...")
  }
  useEffect(() => {
    fetchMyData();
  }, []);
  const onChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    fetchMyData(e.target.value)
  }
  return (
    <div className="App">
      <Layout>
        <InputComponent
          id={"countries"}
          autoCompleteData={countries}
          onChange={onChange}
        />
      </Layout>
    </div>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import { Layout } from "containers/layouts";
import { InputComponent } from "components";
import { getCountries } from "services";
function App() {
  const [countries, setCountries] = useState<string[]>([]);
  useEffect(() => {
    async function fetchMyData() {
      const countries=await getCountries()
      if (countries)
      setCountries(countries);
      else console.log("Error in fetching data...")
    }
    fetchMyData();
  }, []);
  return (
    <div className="App">
      <Layout>
        <InputComponent
          id={"countries"}
          autoCompleteData={countries}
          onChange={() => {
            console.log("f");
          }}
        />
      </Layout>
    </div>
  );
}

export default App;

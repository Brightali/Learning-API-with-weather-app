import Search from "./components/Search";
import { useState } from "react";
import { weather } from "./apis";

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const handleFetch = async (e) => {
    const weatherdata = await weather(e);
    setData(weatherdata);
    setCity("");
  };

  return (
    <div className="w-dvw h-dvh grid place-items-center bg">
      <Search setCity={setCity} handleFetch={handleFetch} city={city} />
      {data ? (
        <div className="flex flex-wrap gap-8 justify-between text-white bg-blue-900/10 p-12 rounded-xl shadow-xl">
          <div>
            <p>{data.data[0].weather.description}</p>

            <p className="text-8xl font-semibold mt-10">
              {data.data[0].temp.toFixed()}&deg;F
            </p>
          </div>
          <div className="">
            <p className="text-2xl font-semibold">{`${data.city_name} ${data.country_code}`}</p>
            <p>{data.data[0].valid_date}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;

import axios from "axios";

export const weather = async (city) => {
  const url = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?city=${city}&units=imperial&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2eaea189acmshe1149fbe17fcd54p14a546jsn5b57fb8b5d49",
      "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    },
  };

  try {
    const data = await axios
      .get(url, options)
      .then((response) => response.data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

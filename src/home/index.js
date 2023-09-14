import React, { useState, useEffect } from "react";

import { useQuery, gql } from "@apollo/client";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

const COUNTRIES_QUERY = gql`
  query {
    countries {
      name
      capital
      code
      phone
      native
      emoji
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

function Home() {
  const { data, loading, error } = useQuery(COUNTRIES_QUERY);
  const theme = true;

  const [selectedCountry, setSelectedCountry] = useState();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      className={
        "container flex flex-col items-center max-w-6xl mx-auto px-10 pt-20 py-10 h-full"
      }
    >
      <div className="flex w-full gap-5 mobile:gap-10 tablet:gap-10 pt-5 tablet:flex tablet:flex-col mobile:flex mobile:flex-col">
        <Sidebar
          data={data}
          selectedCountry={selectedCountry}
          setCountry={setSelectedCountry}
        />
        <div
          className={
            "w-full h-[570px] overflow-y-auto hide-scrollbar mobile:overflow-y-auto rounded-xl bg-gray-50 dark:bg-gray-700/20 border border-gray-100 dark:border-gray-900"
          }
        >
          <Content countryDetail={selectedCountry} theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default Home;

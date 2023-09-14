import React, { useState, useEffect, useMemo } from "react";

function Sidebar({ data, selectedCountry, setCountry }) {
  const [search, setSearch] = useState("");

  const setSelectedCountry = (country) => {
    setCountry(country.name === selectedCountry?.name ? undefined : country);
  };

  useEffect(() => {
    if (data && data.countries.length > 0) {
      if (data.countries.length >= 10) {
        setCountry(data.countries[9]); // 10th item
      } else {
        setCountry(data.countries[data.countries.length - 1]); // 10th item
      }
    }
  }, [data]);

  const filteredCountries = data.countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const groupByFirstLetter = (countries) => {
    const grouped = {};

    countries.forEach((country) => {
      const firstLetter = country.name[0].toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }

      grouped[firstLetter].push(country);
    });

    return grouped;
  };

  const groupedCountries = useMemo(
    () => groupByFirstLetter(filteredCountries),
    [filteredCountries]
  );

  const sortedLetters = Object.keys(groupedCountries).sort();

  return (
    <div
      className={`flex flex-col gap-3 mobile:gap-10 tablet:gap-10 text-black dark:text-white border border border-gray-100 dark:border-gray-900 rounded-xl p-1`}
    >
      <input
        className="rounded-lg p-3 outline outline-gray-200 dark:outline-gray-700 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300"
        type="text"
        placeholder="Search country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul
        className={
          "min-w-[275px] mobile:min-w-[100px] overflow-y-auto h-[510px] mobile:h-[200px] tablet:h-[200px] hide-scrollbar flex flex-col gap-3 bg-lightLayout dark:bg-darkLayout rounded-xl px-3 py-2"
        }
      >
        {sortedLetters.map((letter) => (
          <div className="flex flex-col gap-2" key={letter}>
            <div className={"text-black dark:text-white font-bold pl-2"}>
              {letter}
            </div>
            {groupedCountries[letter].map((country) => (
              <li
                key={country.code}
                onClick={() => setSelectedCountry(country)}
                className={`select-none rounded-lg p-2 cursor-pointer break-all flex gap-5 items-center text-black dark:text-white ${
                  selectedCountry?.code === country.code
                    ? "bg-gray-300 dark:bg-gray-800"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={`https://flagsapi.com/${country.code}/shiny/64.png`}
                />
                {country.name}
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

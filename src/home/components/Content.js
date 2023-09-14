import React from "react";

const Content = ({ countryDetail, theme }) => {
  if (!countryDetail) {
    return (
      <div className="text-2xl text-center">
        <span className={"text-black dark:text-white"}>
          Please select country
        </span>
      </div>
    );
  }

  const {
    name,
    capital,
    code,
    native,
    emoji,
    phone,
    currency,
    languages,
    continent,
  } = countryDetail;

  let languagesResult;
  if (languages) {
    languagesResult = languages.map((lang) => lang.name).join(" - ");
  }

  return (
    <div className=" text-black dark:text-gray-200">
      <div className="flex mb-5 flex-col items-center">
        <img
          className="w-20 rounded-2xl object-cover"
          src={`https://flagsapi.com/${code}/shiny/64.png`}
        />
      </div>
      <ul className="grid grid-cols-3 gap-5 mobile:px-5 mobile:grid mobile:grid-cols-1 tablet:grid tablet:grid-cols-2 tablet:px-5  ">
        <li className="bg-gray-200 dark:bg-gray-700 flex flex-col items-center gap-3 mx-5 mobile:mx-0 tablet:mx-0 py-3 rounded-2xl">
          <span className="font-bold text-xl">NAME</span>
          <span>{name}</span>
        </li>
        <li className="bg-gray-200 dark:bg-gray-700 flex flex-col items-center gap-3 mx-5 mobile:mx-0 tablet:mx-0 py-3 rounded-2xl">
          <span className="font-bold text-xl">CAPITAL</span>
          <span>{capital}</span>
        </li>
        <li className="bg-gray-200 dark:bg-gray-700 flex flex-col items-center gap-3 mx-5 mobile:mx-0 tablet:mx-0 py-3 rounded-2xl">
          <span className="font-bold text-xl">CODE</span>
          <span>{code}</span>
        </li>
        <li className="bg-gray-200 dark:bg-gray-700 flex flex-col items-center gap-3 mx-5 mobile:mx-0 tablet:mx-0 py-3 rounded-2xl">
          <span className="font-bold text-xl">NATIVE</span>
          <span>{native}</span>
        </li>
        <li className="bg-gray-200 dark:bg-gray-700 flex flex-col items-center gap-3 mx-5 mobile:mx-0 tablet:mx-0 py-3 rounded-2xl">
          <span className="font-bold text-xl">EMOJI</span>
          <span>{emoji}</span>
        </li>
        <li className="bg-gray-200 dark:bg-gray-700 flex flex-col items-center gap-3 mx-5 mobile:mx-0 tablet:mx-0 py-3 rounded-2xl">
          <span className="font-bold text-xl">PHONE</span>
          <span>{phone}</span>
        </li>
        <li className="bg-gray-200 dark:bg-gray-700 flex flex-col items-center gap-3 mx-5 mobile:mx-0 tablet:mx-0 py-3 rounded-2xl">
          <span className="font-bold text-xl">CURRENCY</span>
          <span className="break-all text-center">{currency}</span>
        </li>
        <li className="bg-gray-200 dark:bg-gray-700 flex flex-col items-center gap-3 mx-5 mobile:mx-0 tablet:mx-0 py-3 rounded-2xl">
          <span className="font-bold text-xl">LANGUAGES</span>
          <span>{languagesResult}</span>
        </li>
        <li className="bg-gray-200 dark:bg-gray-700 flex flex-col items-center gap-3 mx-5 mobile:mx-0 tablet:mx-0 py-3 rounded-2xl">
          <span className="font-bold text-xl">CONTINENT</span>
          <span>{continent.name}</span>
        </li>
      </ul>
    </div>
  );
};

export default Content;

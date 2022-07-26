import Image from "next/image";
import Analysis from "../images/Analysis.svg";
import Void from "../images/Void.svg";
import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

import axios from "axios";
import Thumbnail from "../components/Thumbnail";
import { useRouter } from "next/router";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import Skeleton from "../components/Skeleton";
import MyLoader from "../components/MyLoader";
import Footer from "../components/Footer";
import Link from "next/link";

function Search() {
  const [films, setFilm] = useState([]);
  const [response, setResponse] = useState({});
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  async function fetchFilms() {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&type=${type}&page=${page}&apikey=7c513fa5&s=${
        router.query.searcInput || "2021"
      }`
    );
    setFilm(data.Search);
    setResponse(data);
    setLoading(false);

    console.log(data);
  }
  console.log(films);
  useEffect(() => {
    fetchFilms();
  }, [router.query.searcInput, type, page]);

  function info(e) {
    e, { id: e.currentTarget.id };
    console.log(e.target.id);

    router.push({
      pathname: "/info",
      query: {
        input: e.target.id,
        type: type,
        page: page,
      },
    });
  }

  function filter(f, p) {
    f, { id: f.target };

    setType(f.target.outerText);

    // setPage(f.target.outerText)
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center  ">
        <SearchBar />

        <div id="#filter">
          <div className="flex space-x-4 items-center justify-center mt-4 ">
            {type === "movie" ? (
              <p
                onClick={filter}
                className=" font-bold shadow-md scale-105 border px-2 pb-1 cursor-pointer rounded-full hover:shadow-md hover:scale-105 hover:font-semibold"
              >
                movie
              </p>
            ) : (
              <p
                onClick={filter}
                className="  border px-2 pb-1 cursor-pointer rounded-full hover:shadow-md hover:scale-105 hover:font-semibold"
              >
                movie
              </p>
            )}
            {type === "series" ? (
              <p
                onClick={filter}
                className=" font-bold shadow-md scale-105 border px-2 pb-1 cursor-pointer rounded-full hover:shadow-md hover:scale-105 hover:font-semibold"
              >
                series
              </p>
            ) : (
              <p
                onClick={filter}
                className="  border px-2 pb-1 cursor-pointer rounded-full hover:shadow-md hover:scale-105 hover:font-semibold"
              >
                series
              </p>
            )}
            {type === "game" ? (
              <p
                onClick={filter}
                className=" font-bold shadow-md scale-105 border px-2 pb-1 cursor-pointer rounded-full hover:shadow-md hover:scale-105 hover:font-semibold"
              >
                game
              </p>
            ) : (
              <p
                onClick={filter}
                className="  border px-2 pb-1 cursor-pointer rounded-full hover:shadow-md hover:scale-105 hover:font-semibold"
              >
                game
              </p>
            )}
          </div>
        </div>

        {films != undefined ? (
          <div>
            <h1 className="text-xl md:text-4xl pb-8 text-center mt-4">
              Search results for <b> "{router.query.searcInput}"</b>
            </h1>
            {!loading ? (
              <div className="flex rounded-lg">
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center max-w-8xl mx-auto px-8 md:mt-8 rounded-lg">
                  {films.map((item) => (
                    <Thumbnail
                      Poster={item.Poster}
                      id={item.imdbID}
                      info={info}
                      key={item.imdbID}
                      Title={item.Title}
                      Year={item.Year}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex rounded-lg items-center">
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center max-w-8xl mx-auto px-8 md:mt-8 rounded-lg">
                  {new Array(10).fill(0).map(() => (
                    <MyLoader />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {response.Error == "Too many results." ? (
              <div className="flex flex-col items-center">
                <h1 className="text-xl md:text-4xl pb-8 text-center mt-4">
                  Too many results for <b> "{router.query.searcInput}"</b>{" "}
                  <br />{" "}
                  <span className=" text-sm md:text-base">
                    try more than 3 characters..
                  </span>
                </h1>
                <div className="h-300 w-300 flex items-center mt-16 z-10 ">
                  <Image
                    src={Analysis}
                    width={300}
                    height={300}
                    objectFit="contain"
                    className=""
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <h1 className="text-xl md:text-4xl pb-8 text-center mt-4">
                  No results for <b> "{router.query.searcInput}"</b> <br />{" "}
                  <span className=" text-sm md:text-base">try again ..</span>
                </h1>
                <div className="h-300 w-300 flex items-center my-16 z-10 ">
                  <Image
                    src={Void}
                    width={300}
                    height={300}
                    objectFit="contain"
                    className=""
                  />
                </div>
              </div>
            )}
          </div>
        )}
        {films != undefined ? (
          <div className="flex  mt-16 mb-16 items-center justify-around ">
            <Link href="#">
              <ArrowLeftIcon
                className="h-5 cursor-pointer hover:scale-110 "
                onClick={(e) => {
                  page > 1 && setPage(page - 1);
                }}
              />
            </Link>
            <input
              type="number"
              min={1}
              value={page}
              onChange={(p) => setPage(p.target.value)}
              className="outline-none text-center font-bold"
            />
            <Link href="#">
              <ArrowRightIcon
                className="h-5 w-5 cursor-pointer hover:scale-110 "
                onClick={(e) => {
                  setPage(page + 1);
                }}
              />
            </Link>
          </div>
        ) : (
          false
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Search;

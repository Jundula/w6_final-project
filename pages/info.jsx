import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import Info from "../components/Info";
import axios from "axios";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import MyLoaderInfo from "../components/MyLoaderInfo";
import MyLoaderInfoMd from "../components/MyLoaderInfoMd";

function info() {
  const [films, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // const { id } = router.query;

  useEffect(() => {
    async function fetchFilms() {
      setLoading(true);
      const { data } = await axios.get(
        `http://www.omdbapi.com/?i=${router.query.input}&type=${router.query.type}&page=${router.query.page}&apikey=a7d88c10`
      );
      setFilm(data);
      setLoading(false);
    }
    fetchFilms();
  }, []);

  console.log(films);
  console.log(router.query.input);

  return (
    <div>
      <Header />

      <div className="flex flex-col item pt-4">
        <div className="pl-8">
          <ArrowLeftIcon
            className="h-8 mr-4 cursor-pointer hover:scale-110"
            onClick={() => router.back()}
          />
        </div>
        {loading ? (
          <div>
            <MyLoaderInfo className="hidden md:inline-flex" />
            <MyLoaderInfoMd className="" />
          </div>
        ) : (
          <div className=" items-center max-w-8xl mx-auto px-8 mt-8 ">
            <Info films={films} />
          </div>
        )}
      </div>
    </div>
  );
}

export default info;

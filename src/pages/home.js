import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  useEffect(() => {
    document.title = "Home";
    window.scrollTo(0, 0);
    }, []);

  return (
    <div className="p-14 mx-auto bg-slate-400 lg:justify-evenly flex flex-col-reverse lg:flex-row justify-center">

      <div className="bg-slate-700 w-full mx-auto">
        <div className="mx-auto w-fit">
          <img className="" src="/Landing-page-image.svg" alt='event card' />
        </div>
        <Link to="/create">
          <button className="w-full mt-7 max-w-btn rounded-lg bg-gradient-to-r from-grad1 to-grad2 py-3 px-9 lg:hidden block mx-auto text-white">🎉 Create my event</button>
        </Link>
      </div>

      <div className="w-full mb-9 lg:flex lg:justify-center lg:items-center">
        <div className="w-fit mx-auto p3 not-italic lg:text-end text-center">
          <h1 className="mt-2 font-bold text-5xl text-color1">Imagine if</h1>
          <h1 className="mt-2 font-bold text-5xl text-grad1">Snapchat</h1>
          <h1 className="mt-2 font-bold text-5xl text-color1">had events.</h1>
          <p className="lg:max-w-sm max-w-xs my-4">Easily host and share events with your friends across any social media.</p>
          <Link to="/create">
            <button className="rounded-lg bg-gradient-to-r from-grad1 to-grad2 py-3 px-9 hidden lg:inline text-white">🎉 Create my event</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
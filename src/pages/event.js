import { useEffect } from "react";

export default function Event() {
  
  useEffect(() => {
    document.title = "Event";
    window.scrollTo(0, 0);
    }, []);

    return (
      <div className="mx-auto bg-slate-400 mb-6 lg:p-14 lg:justify-evenly flex flex-col-reverse lg:flex-row justify-center">
        <div className="bg-slate-700 w-full mx-auto">
           <div className="px-4"> 
             <h1 className="mb-3 font-bold text-5xl text-color1 whitespace-nowrap">
              Birthday Bash
            </h1>
            <p>Hosted by Elysia</p>
            <div className="w-full lg:ml-10 lg:mr-5">
              <div className="flex my-6 flex-nowrap items-center max-w-crd">
                <div className="">
                  <div className="p-3 mr-6 rounded-xl w-fit h-fit shadow-md bg-white">
                    <img src="/Calendar.png" alt="calendar" />
                  </div>
                </div>
                <div className="">
                  <p className="font-bold text-color1">18 August 6:00PM</p>
                  <p>to <span className="font-bold">19 August 1:00PM</span> UTC +10</p>
                </div>
                <div className="text-end flex-1">
                  <img className="inline" src="/stroke.png" alt="stroke" />
                </div>
              </div>

              <div className="flex my-6 flex-nowrap items-center max-w-crd">
                <div className="">
                  <div className="p-3 mr-6 rounded-xl w-fit h-fit shadow-md bg-white">
                    <img src="/Location.png" alt="Location" />
                  </div>
                </div>
                <div className="">
                  <p className="font-bold text-color1">Street name</p>
                  <p>Suburb, State, Postcode</p>
                </div>
                <div className="text-end flex-1">
                  <img className="inline" src="/stroke.png" alt="stroke" />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="w-full mb-9 lg:flex lg:justify-center lg:items-center">
          <div className="">
            <img src="/birthday_cake.png" alt="birthday cake" />
          </div>
        </div>
      </div>
    );
  }
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/event");
  };

  useEffect(() => {
    document.title = "Create event";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-lg mx-auto px-5 py-10">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h2 className="font-bold text-5xl text-color1 text-center my-7">create event</h2>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-group mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">event Name</label>
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="eventName"
            placeholder="Enter Event Name"
          />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Host Name</label>
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="hostName"
            placeholder="Enter Host Name"
          />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Location</label>
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="location"
            placeholder="Enter Location"
          />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Starting date/time</label>
          <input
            type="datetime-local"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="eventName"
            placeholder="Enter Event Name"
          />
        </div>

        <div className="form-group mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Ending date/time</label>
          <input
            type="datetime-local"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="eventName"
            placeholder="Enter Event Name"
          />
        </div>
        
        <div className="form-group mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Event Photo</label>
          <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formfile" multiple={false} />
        </div>
        <button type="submit" className="rounded-lg bg-gradient-to-r from-grad1 to-grad2 py-3 px-9 w-full text-white">Next</button>
      </form>
    </div>
    </div>
  );
}
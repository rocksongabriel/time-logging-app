// import built-in stuff
import React from "react";
import ReactDOM from "react-dom";

// import css files
import ("./css/tailwind.css");


// components
class TimeLoggingApp extends React.Component {
  render() {
    return (
      <div className="flex justify-around">
        
        <div className="mx-10 md:w-1/2">
          <h1 className="text-3xl font-bold mt-5 text-center">Timers</h1>
          <hr className="text-gray-300 mb-5"/>

          <div className="flex justify-around pt-3">
            <div className="border border-gray-300 rounded-bl-md rounded-br-md" style={{ width: 250 + 'px' }}>
              <div className="p-3">
                <h2 className="text-xl font-bold text-gray-900">Clear Paper Jam</h2>
                <p className="text-gray-500">Office Chores</p>
                <p className="text-gray-600 text-3xl font-bold text-center py-1">00:21:13</p>
                <p className="text-right space-x-2 text-sm">
                  <span className="text-red-600 font-bold">delete</span>
                  <span className="text-green-800 font-bold">update</span>
                </p>
              </div>

              <button className="w-full py-2 text-green-600 border border-green-700 rounded-bl-md rounded-br-md">Start</button>
            </div>
          </div>

          <div className="flex justify-around pt-3">
            <div className="border border-gray-300 rounded-bl-md rounded-br-md" style={{ width: 250 + 'px' }}>
              <div className="p-3">
                <div>
                  <label className="text-lg font-bold">Title</label>
                  <input type="text" className="w-full py-2 border border-gray-300 focus:outline-none px-4 focus:border-gray-500" />
                </div>

                <div class='pt-3'>
                  <label className="text-lg font-bold">Project</label>
                  <input type="text" className="w-full py-2 border border-gray-300 focus:outline-none px-4 focus:border-gray-500" />
                </div>
              </div>

              <div className="flex">
                <button className="w-full py-2 text-blue-600 border border-r-0 border-blue-700 rounded-bl-md">Update</button>
                <button className="w-full py-2 text-red-600 border border-red-700 rounded-br-md">Cancel</button>
              </div>
            </div>
          </div>

          <div className="flex justify-around pt-3">
            <div className="border border-gray-300 rounded-bl-md rounded-br-md" style={{ width: 250 + 'px' }}>
              <div className="p-3">
                <h2 className="text-xl font-bold text-gray-900">Ponder Origins of Universe</h2>
                <p className="text-gray-500">Life Chores</p>
                <p className="text-gray-600 text-3xl font-bold text-center py-1">14:00:29</p>
                <p className="text-right space-x-2 text-sm">
                  <span className="text-red-600 font-bold">delete</span>
                  <span className="text-green-800 font-bold">update</span>
                </p>
              </div>

              <button className="w-full py-2 text-red-600 border border-red-600 rounded-bl-md rounded-br-md">Stop</button>
            </div>
          </div>

          <div class="flex justify-around py-5">
            <button 
              className="py-2 px-6 text-green-600 font-bold border-2 border-green-800 hover:bg-black hover:text-white">
              Add New
            </button>
          </div>

        </div>

      </div>
    );
  }
};


ReactDOM.render(
  <TimeLoggingApp />,
  document.getElementById("root")
)
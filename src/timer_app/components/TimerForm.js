import React from "react";


class TimerForm extends React.Component {
  render() {
    return (
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
    )
  }
};


export default TimerForm;
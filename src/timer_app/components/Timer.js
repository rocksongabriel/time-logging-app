import React from "react";

import "../../js/helpers";


class Timer extends React.Component {
  render() {
    
    const elapsedString = window.helpers.renderElapsedString(this.props.elapsed)

    return (
      <div className="flex justify-around pt-3">
        <div className="border border-gray-300 rounded-bl-md rounded-br-md" style={{ width: 250 + 'px' }}>
          <div className="p-3">
            <h2 className="text-xl font-bold text-gray-900">{this.props.title}</h2>
            <p className="text-gray-500">{this.props.project}</p>
            <p className="text-gray-600 text-3xl font-bold text-center py-1">{elapsedString}</p>
            <p className="text-right space-x-2 text-sm">
              <button 
                className="font-bold bg-red-600 text-white py-1 px-2 rounded-md focus:outline-none"
              >delete</button>
              <button 
                className="font-bold bg-green-600 text-white py-1 px-2 rounded-md focus:outline-none"
              >update</button>
            </p>
          </div>

          <button className="w-full py-2 text-green-600 border border-green-700 rounded-bl-md rounded-br-md">Start</button>
        </div>
      </div>
    )
  }
};


export default Timer;
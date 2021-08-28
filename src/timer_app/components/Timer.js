import React from "react";


class Timer extends React.Component {
  render() {
    return (
      <div className="flex justify-around pt-3">
        <div className="border border-gray-300 rounded-bl-md rounded-br-md" style={{ width: 250 + 'px' }}>
          <div className="p-3">
            <h2 className="text-xl font-bold text-gray-900">{this.props.title}</h2>
            <p className="text-gray-500">{this.props.project}</p>
            <p className="text-gray-600 text-3xl font-bold text-center py-1">00:21:13</p>
            <p className="text-right space-x-2 text-sm">
              <span className="text-red-600 font-bold">delete</span>
              <span className="text-green-800 font-bold">update</span>
            </p>
          </div>

          <button className="w-full py-2 text-green-600 border border-green-700 rounded-bl-md rounded-br-md">Start</button>
        </div>
      </div>
    )
  }
};


export default Timer;
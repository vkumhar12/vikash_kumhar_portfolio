/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Riddle: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">
        Riddle for Frontend Developers
      </h1>
      <p className="mb-1">I’m the place where your data can chill,</p>
      <p className="mb-1">I save all your info, so you don’t need to spill.</p>
      <p className="mb-1">You can count on me, like a loyal old friend,</p>
      <p className="mb-1">What am I, until the browser's end?</p>
      <span className="text-yellow-300">Hint: It’s not a cookie!</span>
    </div>
  );
};

const CodeDisplay: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-900 text-pink-500 font-mono min-h-screen flex justify-center items-center">
      <div className="text-left p-8 border border-purple-500 rounded-lg shadow-lg">
        <code className="text-green-300">
          <span className="block">&lt;html lang="en"&gt;</span>
          <span className="ml-4 block">&lt;head&gt;</span>
          <span className="ml-8 block">
            &lt;meta name="viewport" content="width=device-width,
            initial-scale=1.0" /&gt;
          </span>
          <span className="ml-8 block">
            &lt;title&gt;Riddle Time!&lt;/title&gt;
          </span>
          <span className="ml-4 block">&lt;/head&gt;</span>
          <span className="ml-4 block">&lt;body&gt;</span>
          <Riddle />
          <span className="ml-4 block">&lt;/body&gt;</span>
          <span className="block">&lt;/html&gt;</span>
        </code>
      </div>
    </div>
  );
};

export default CodeDisplay;

"use strict";

module.exports.handler = async event => {
  console.log("Event %j", event);
  const dataObject = event.dataObject;

  return {
    taskInput: {
      taskObject: (dataObject && dataObject["source-ref"]) || null
    }
  };
};

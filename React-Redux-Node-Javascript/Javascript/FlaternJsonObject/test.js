//https://www.youtube.com/watch?v=U8lq1JdabF8&ab_channel=AzharTechnoCoder
"use strict";

const nestedObj = {
    "isbn": "123-456-789",
    "author": {
      "lastnameAuthor": "Doe",
      "firstnameAuthor": "Jane"
    },
    "editor": {
      "lastnameEditor": "Smith",
      "firstnameEditor": "Jane"
    },
    "title": "The Ultimate Database Study Guide",
    "category": {
        "production":"abc",
        "editor": {
            "lastnameEditorInside": "Smith",
            "firstnameEditorInside": "Jane"
          },
    }
  }

  const convertNestedToSimpleJson = function (obj){
      const dummyObj = {};
      for(let key in obj){
          const value = obj[key];
          const type = typeof value;

          if(['string','boolean'].includes(type) || (type === 'number' && !isNaN(value))){
              dummyObj[key]=value
          }else if(type === 'object'){
              Object.assign(dummyObj,convertNestedToSimpleJson(value))
          }
      }
      return dummyObj
  }

  console.log(convertNestedToSimpleJson(nestedObj))

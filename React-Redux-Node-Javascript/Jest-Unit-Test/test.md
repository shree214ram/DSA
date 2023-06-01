test
https://stackoverflow.com/questions/58896151/unable-to-trigger-function-for-testing-using-jest-and-enzyme


# Tutorial 
https://jestjs.io/docs/expect

https://jestjs.io/docs/expect#tohavebeencalled


https://www.softwaretestinghelp.com/jest-testing-tutorial/

# expect 
Equal Checker :- 
1. .toBe
2. .toHaveBeenCalled
3. .toHaveBeenCalledTimes
4. .to.not.equal
5. toBeTruthy 

# Jest And Enzyme
 
https://jestjs.io/docs/en/getting-started
https://jestjs.io/docs/mock-functions#mocking-modules

# React Testing Library
https://jestjs.io/docs/tutorial-react
{renderer,fired}  : @testing/react-testing @testing-library/react

query selector :- 
1. queryByText, 
2. queryByLabel, 
3. queryByLabelText, 
4. getByLabelText

import {render} from "@testing-library/react"
const {queryByText,queryByLabel,queryByLabelText,getByLabelText} = render(<Componenet data={data}/>)

# wait React Testing Library
import { render, wait } from "@testing-library/react";

# Mock Functions 
https://jestjs.io/docs/mock-functions
https://jestjs.io/docs/mock-function-api

import customMapFn from "./file"

describe("test" => {

   1. const customMap = jest.fn(x => x+40)
    test("test custom map"=>{
       1. customMapFn([0,1],customMap)
        2. customMap.mock.calls
        3. customMap.mock.calls toHaveLength(2)
        4. customMap.mock.calls[0][0] toBe(1)
        5. mock.calls.results[0].value toBe(42)
    })
})

# , unmute 

# Mocking Modules (Without calling axios api test mock data ) 
1. mockResolvedValue

# Mock Implementations
1. mockImplementation
2. mockImplementationOnce

# Setup and Teardown {beforeEach , afterEach }
https://jestjs.io/docs/setup-teardown

https://codesandbox.io/p/sandbox/sunnyjestpractice-syqlr4?selection=%5B%7B%22endColumn%22%3A50%2C%22endLineNumber%22%3A7%2C%22startColumn%22%3A50%2C%22startLineNumber%22%3A7%7D%5D&file=%2Fsrc%2Fdata.test.js%3A8%2C44-8%2C48


# Youtube Video Lerning 

https://www.youtube.com/watch?v=tYMLXpOJtng&list=PL-Db3tEF6pB8Am-IhCRgyGSxTalkDpUV_&index=2


Online React + Redux + Node API + Jest Test Case 
https://codesandbox.io/p/sandbox/sunnyjestpractice-syqlr4?file=%2Fsrc%2FCheckboxWithLabel.test.js&selection=%5B%7B%22endColumn%22%3A18%2C%22endLineNumber%22%3A47%2C%22startColumn%22%3A18%2C%22startLineNumber%22%3A47%7D%5D

https://codesandbox.io/s/jest-test-learning-tqf9z9?file=/package.json:194-419

react redux test case 
https://www.youtube.com/watch?v=rRFNRhUbMag&t=21s&pp=ygUTdHlwZXNjcmlwdCB0dXRvcmlhbA%3D%3D
// import { extractProblem } from "./extractProblem";


// console.log("Content Script Loaded");

// chrome.runtime.onMessage.addListener(
//     (message, _sender, sendResponse) => {

//         if (message.type !== "GET_PROBLEM")
//             return;
        
//         try {
//             const problem = extractProblem();
//             console.log(problem);
//             sendResponse(problem);
//         }
//         catch(err) {
//             sendResponse(null);
//         }



//         // const title =
//         //     document
//         //         .querySelector(".problem-statement .title")
//         //         ?.textContent
//         //         ?.trim();

//         // sendResponse({
//         //     title
//         // });

//     }
// );



import { mountOverlay } from "../overlay";

console.log("Content Script Loaded");

mountOverlay();



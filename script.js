// Asset data with unique sub-containers
const assets = [
  {
    title: "Technical Project Management",
    description:
      "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
    content: `
               <div class="vid mt-4 w-full h-[275px]">
        <iframe 
            src="https://www.youtube.com/embed/TiMRwri1xJ8" 
            width="100%" 
            height="100%" 
            style="border: none;">
        </iframe>
    </div>
        `,
  },
  {
    title: "Another Heading",
    description: "Another description goes here.",
    content: `
            <div class="thread mt-2 border-t-[3px] border-[#F0F0F0]">
        <div class="subline flex gap-6 my-1 items-center border-b-2 rounded-sm border-[#F0F0F0]">
            <i class="material-icons p-1 font-semibold">keyboard_arrow_up</i>
            <h2 class="font-bold p-2">Thread A</h2>
        </div>
        <div class="subs flex items-start justify-between mt-8 mx-2">
            <div class="sub1 w-[48%] pl-3 h-32">
                <div class="sub-t1 bg-[#F0F0F0] rounded-xl p-1 shadow-gray-200 shadow-md">
                    <h2 class="p-1">Sub Thread 1</h2>
                    <input
                        placeholder="Enter text here"
                        class="bg-white rounded-lg p-3 mt-1 w-full h-20 outline-none"
                        type="text">
                </div>
                <div class="sub-icons flex justify-end gap-3 mt-3">
                    <i class="material-icons">lightbulb</i>
                    <i class="material-icons">comment</i>
                    <i class="material-icons">live_help</i>
                    <i class="material-icons">spa</i>
                </div>
            </div>
            <div class="sub2 w-[48%] pr-3">
                <div class="sub-t2 bg-[#F0F0F0] rounded-xl p-1 shadow-gray-200 shadow-md">
                    <h2 class="p-1">Sub Interpretation 1</h2>
                    <input
                        placeholder="Enter text here"
                        class="bg-white rounded-lg p-3 mt-1 h-20 w-full outline-none"
                        type="text">
                </div>
                <div class="selects mt-3 flex gap-4">
                    <select class="shadow-md shadow-gray-200 rounded-md p-3 w-full">
                        <option value="">Select Category</option>
                    </select>
                    <select class="shadow-md shadow-gray-200 rounded-md p-3 w-full">
                        <option>Select Process</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="b-asset mt-2 mx-5">
            <button class="px-3 py-2 text-sm text-white rounded-2xl bg-[#0029FF] ">+ Sub Thread</button>
            <div class="sub-t2 bg-[#F0F0F0] rounded-xl p-1 mt-2 shadow-gray-200 shadow-md">
                <h2 class="p-1">Summary for thread 1</h2>
                <input
                    placeholder="Enter text here"
                    class="bg-white rounded-lg p-3 mt-1 h-20 w-full outline-none"
                    type="text">
            </div>
        </div>
    </div>
        `,
  },
  {
    title: "Third Heading",
    description: "Third description goes here.",
    content: `
           <div class="mid-secn mt-4 mx-5">
        <div class="title-sec">
            <h1 class="font-bold text-md mb-2">Title</h1>
            <input type="text" class="w-full shadow-md border-2 border-[#F0F0F0] shadow-gray-200 rounded-md h-10">
        </div>
        <div class="content-sec mt-4">
            <h1 class="font-bold text-md mb-2">Content</h1>
            <div class="ribbon border-[#F0F0F0] border-2 p-2 rounded-lg">
                <ol class="flex gap-3">
                    <li>File</li>
                    <li>Edit</li>
                    <li>View</li>
                    <li>Insert</li>
                    <li>Format</li>
                    <li>Tools</li>
                    <li>Table</li>
                    <li>Help</li>
                </ol>
                <ul class="flex gap-5 mt-2">
                    <li><i class="material-icons">undo</i></li>
                    <li><i class="material-icons">redo</i></li>
                    <li><i class="material-icons">zoom_out_map</i></li>
                    <li><i class="material-icons">image</i></li>
                    <li><select class="shadow-md shadow-gray-200 p-1 text-sm">
                        <option value="">Paragraph</option></select></li>
                    <li><i class="material-icons">more_horiz</i></li>
                </ul>
            </div>
            <input type="text" class=" border-[#F0F0F0] border-y-0 border-2 p-2 rounded-lg w-full outline-none h-[14.5rem]">
        </div>
    </div>
        `,
  },
  {
    title: "Fourth Heading",
    description: "Fourth description goes here.",
    content: `
           <div class="intro mt-2 border-t-[2px] border-[#F0F0F0]">
        <div class="subline border-b-2 rounded-sm border-[#F0F0F0] mx-3">
            <div class="flex gap-3 items-center  bg-[#F0F0F0]">
                <i class="material-icons p-1 font-semibold">keyboard_arrow_up</i>
                <h2 class="font-bold p-2">Introduction</h2>
            </div>
            <div class="input-area flex flex-col items-end">
                <input type="text" class="outline-none h-20 w-full px-3">
                <a href="#" class="text-left block p-2 text-sm font-semibold">See More</a>
            </div>
        </div>
        <div class="subline rounded-sm mx-3">
            <div class="flex gap-3 items-center border-b-2 border-[#F0F0F0]">
                <i class="material-icons p-1 font-semibold">keyboard_arrow_up</i>
                <h2 class="font-bold p-2 ">Thread A</h2>
            </div>
            <div class="input-area flex flex-col items-end">
                <input type="text" class="outline-none h-20 w-full px-3">
                <a href="#" class="text-left block p-2 text-sm font-semibold">See More</a>
                <div class="eg flex flex-col w-full pl-6">
                    <h2 class="font-bold p-2 border-2 border-[#F0F0F0] rounded-lg">Example 1</h2>
                    <input type="text" class="outline-none h-20 w-full px-3">
                </div>
            </div>
        </div>
        
    </div>
        `,
  },
];

// Select the parent grid container
const assetsContainer = document.querySelector(".assets");
// Loop through the data and create each container
assets.forEach((asset) => {
    const assetElement = document.createElement("div");
    assetElement.className =
      "asset shadow-gray-300 shadow-md rounded-lg h-[35rem]";
    assetElement.innerHTML = `
          <div class="title p-2 text-center bg-black text-white font-semibold rounded-t-lg">
              ${asset.title}
          </div>
          <div class="description mt-2 p-2">
              <span class="font-semibold">Description:</span> ${asset.description}
          </div>
          <div class="content">
              ${asset.content}
          </div>`
      ;
    assetsContainer.appendChild(assetElement);
  });
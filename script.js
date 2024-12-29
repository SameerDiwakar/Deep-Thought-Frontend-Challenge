const apiUrl = "./apiData.json";

async function fetchAndRenderAssets() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const tasks = data.tasks || [];
    const titleElement = document.querySelector(".task_title");
    const descriptionElement = document.querySelector(".task_description");

    const taskTitle = tasks[0].task_title;
    const taskDescription = tasks[0].task_description;

    const jb_title = document.querySelector(".jb_title");
    jb_title.textContent = taskTitle;

    titleElement.textContent = taskTitle;
    descriptionElement.textContent = taskDescription;
    const assetsContainer = document.querySelector(".assets");

    tasks.forEach((task) => {
      const assets = task.assets || [];

      assets.forEach((asset) => {
        const listItems = document.querySelectorAll("li.jb");

        assets.forEach((asset, index) => {
          if (index < listItems.length) {
            const listItem = listItems[index].querySelector("a");
            listItem.textContent = asset.asset_title;
          }
        });
        const assetElement = document.createElement("div");
        assetElement.className =
          "asset shadow-gray-300 shadow-md rounded-lg h-[35rem]";

        assetElement.innerHTML = `
          <div class="title p-2 text-center bg-black text-white font-semibold rounded-t-lg flex items-center">
         <span class="flex-grow text-center">${asset.asset_title}</span>
          <i class="material-icons ml-5 text-white bg-black rounded-full text-md">info</i>
         </div>

          <div class="description mt-2 p-2">
              <span class="font-semibold">Description:</span> ${
                asset.asset_description
              }
          </div>
          <div class="content mt-2">
              ${getContent(asset)}
          </div>`;

        // Appending the asset to the container
        assetsContainer.appendChild(assetElement);
      });
    });
  } catch (error) {
    console.error("Error fetching assets:", error);
  }
}

function getContent(asset) {
  if (asset.asset_content_type === "video") {
    return `
      <div class="vid mt-4 w-full h-[275px]">
        <iframe 
            src="${asset.asset_content}" 
            width="100%" 
            height="100%" 
            style="border: none;">
        </iframe>
      </div>`;
  } else if (
    asset.asset_content_type === "article" &&
    asset.asset_type == "input_asset"
  ) {
    return `
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
 `;
  } else if (
    asset.asset_content_type === "article" &&
    asset.asset_type == "display_asset"
  ) {
    return `
           <div class="intro mt-2 border-t-[2px] border-[#F0F0F0]">
        <div class="subline border-b-2 rounded-sm border-[#F0F0F0] mx-3">
            <div class="flex gap-3 items-center  bg-[#F0F0F0]">
                <i class="material-icons intro-arw p-1 font-semibold cursor-pointer">keyboard_arrow_up</i>
                <h2 class="font-bold p-2">Introduction</h2>
            </div>
            <div class="input-area intro-area flex flex-col items-end">
                <input type="text" class="outline-none h-20 w-full px-3">
                <a href="#" class="text-left block p-2 text-sm font-semibold">See More</a>
            </div>
        </div>
        <div class="subline rounded-sm mx-3">
            <div class="flex gap-3 items-center border-b-2 border-[#F0F0F0]">
                <i class="material-icons thread-arw p-1 font-semibold cursor-pointer">keyboard_arrow_up</i>
                <h2 class="font-bold p-2 ">Thread A</h2>
            </div>
            <div class="input-area thread-area flex flex-col items-end">
                <input type="text" class="outline-none h-20 w-full px-3">
                <a href="#" class="text-left block p-2 text-sm font-semibold">See More</a>
                <div class="eg flex flex-col w-full pl-6">
                    <h2 class="font-bold p-2 border-2 border-[#F0F0F0] rounded-lg">Example 1</h2>
                    <input type="text" class="outline-none h-20 w-full px-3">
                </div>
            </div>
        </div>
        
    </div>
        `;
  } else if (asset.asset_content_type === "threadbuilder") {
    return `
            <div class="thread mt-2 border-t-[3px] border-[#F0F0F0]">
        <div class="subline flex gap-6 my-1 items-center border-b-2 rounded-sm border-[#F0F0F0]">
            <i class="material-icons tarw p-1 font-semibold cursor-pointer">keyboard_arrow_up</i>
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
        <div class="b-asset mt-2 mx-5 flex flex-col">
            <button class="px-3 py-2 text-sm w-1/4 text-white rounded-2xl bg-[#0029FF] ">+ Sub Thread</button>
            <div class="sub-t2 bg-[#F0F0F0] rounded-xl p-1 mt-2 shadow-gray-200 shadow-md">
                <h2 class="p-1">Summary for thread 1</h2>
                <input
                    placeholder="Enter text here"
                    class="bg-white rounded-lg p-3 mt-1 h-20 w-full outline-none"
                    type="text">
            </div>
        </div>
    </div>
        `;
  } else {
    return "<p>No content available</p>";
  }
}

fetchAndRenderAssets();

const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggleButton");
const arrowIcon = document.getElementById("arrowIcon");

sidebar.classList.add("collapsed");
arrowIcon.textContent = "arrow_forward";

toggleButton.addEventListener("click", () => {
  if (sidebar.classList.contains("collapsed")) {
    sidebar.classList.remove("collapsed");
    arrowIcon.textContent = "arrow_back";
  } else {
    sidebar.classList.add("collapsed");
    arrowIcon.textContent = "arrow_forward";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("material-icons")) {
    const arrow = event.target;
    const thread = arrow.closest(".thread");
    if (thread) {
      const subs = thread.querySelector(".subs");
      const bAsset = thread.querySelector(".b-asset");
      const elementsToToggle = [subs, bAsset];
      const isVisible = subs?.classList.contains("flex");
      elementsToToggle.forEach((element) => {
        if (element) {
          if (isVisible) {
            element.classList.add("hidden");
            element.classList.remove("flex");
          } else {
            element.classList.remove("hidden");
            element.classList.add("flex");
          }
        }
      });
      arrow.textContent = isVisible ? "keyboard_arrow_down" : "keyboard_arrow_up";
    }
  }
});

document.getElementById('closeIcon').addEventListener('click', function () {
  const section = document.getElementById('notice');
  section.style.display = 'none';
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("material-icons")) {
    const arrow = event.target;
    let areaClass;
    
    if (arrow.classList.contains("intro-arw")) {
      areaClass = "intro-area";
    } else if (arrow.classList.contains("thread-arw")) {
      areaClass = "thread-area";
    }

    if (areaClass) {
      const area = arrow.closest(".subline").querySelector(`.${areaClass}`);
      if (area) {
        const isVisible = area.classList.contains("flex");
        area.classList.toggle("hidden", isVisible);
        area.classList.toggle("flex", !isVisible);
        arrow.textContent = isVisible ? "keyboard_arrow_down" : "keyboard_arrow_up";
      }
    }
  }
});

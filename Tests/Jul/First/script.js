function fn() {
    let url = "https://jsonplaceholder.typicode.com/users";

    let asyncapi = async (url) => {
      let response = await fetch(url);
      let data = await response.json();
      apiData(data);
    };
    asyncapi(url);

    let apiData = (data) => {
      let btn = document.getElementById("btn");

      let content = document.getElementById("content");
      content.innerHTML = `<p id="name">${data[0].name}</p>
                          <p id="email">${data[0].email}</p>
                          <p id="city">${data[0].address.city}</p>
                          <p id="website">${data[0].website}</p>
                          <div id="btnDiv">
                              <button id=btn>Data Fetched</button>  
                          </div>`;
    };
  }
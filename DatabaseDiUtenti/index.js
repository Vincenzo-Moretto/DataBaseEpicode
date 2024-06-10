const url = "https://jsonplaceholder.typicode.com/users";

/* const utentiGet = async () => {
  const utenti = await fetch(url);
  const data = await utenti.json();

  const table = document.querySelector("table");
  table.innerHTML = `<thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>`;
  data.forEach((e) => {
    table.innerHTML += `
            
        <tbody><tr>
            <th scope="row">${e.id}</th>
            <td>${e.name}</td>
            <td>${e.username}</td>
            <td>${e.email}</td>
          </tr> </tbody>`;
  });
}; */

const utentiName = async () => {
  const utenti = await fetch(url);
  const data = await utenti.json();
  /* console.log(data); */
  const table = document.querySelector("table");

  table.innerHTML = `<thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>`;

  data.forEach((e) => {
    table.innerHTML += `
            
        <tbody><tr>
            <th scope="row">${e.id}</th>

            <td>${e.name}</td>
          </tr> </tbody>`;
  });
};
const utentiUsername = async () => {
  const utenti = await fetch(url);
  const data = await utenti.json();
  /* console.log(data); */
  const table = document.querySelector("table");
  table.innerHTML = `<thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
          </tr>
        </thead>`;
  data.forEach((e) => {
    table.innerHTML += `
            
        <tbody><tr>
            <th scope="row">${e.id}</th>
            <td>${e.username}</td>
          </tr> </tbody>`;
  });
};
const utentiEmail = async () => {
  const utenti = await fetch(url);
  const data = await utenti.json();

  console.log(data);
  const table = document.querySelector("table");
  table.innerHTML = `<thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>`;
  data.forEach((e) => {
    table.innerHTML += `
            
        <tbody><tr>
            <th scope="row">${e.id}</th>
            <td>${e.email}</td>
          </tr> </tbody>`;
  });
};

const utentiFiltrati = () => {
  const filtro = document.getElementById("filtro");
  if (filtro.value === "1") {
    utentiName();
  } else if (filtro.value === "2") {
    utentiUsername();
  } else {
    utentiEmail();
  }
};

const filtroRicerca = async () => {
  const utenti = await fetch(url);
  const data = await utenti.json();

  const table = document.querySelector("table");
  const input = document.querySelector("input");
  const filtro = document.getElementById("filtro");
  console.log(input.value);

  const utentiFiltrati = data.filter(
    (e) =>
      e.name.toLowerCase().startsWith(input.value.toLowerCase()) ||
      e.username.toLowerCase().startsWith(input.value.toLowerCase()) ||
      e.email.toLowerCase().startsWith(input.value.toLowerCase())
  );
  if (input.value === "") {
    table.innerHTML = `<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">E-mail</th>
    </tr>
  </thead>`;
    data.forEach((e) => {
      table.innerHTML += `
             <tbody><tr>
      <th scope="row">${e.id}</th>
      <td>${e.name}</td>
      <td>${e.username}</td>
      <td>${e.email}</td>
    </tr> </tbody>`;
    });
  } else if (filtro.value === "1") {
    table.innerHTML = `<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
    </tr>
  </thead>`;
    utentiFiltrati.forEach((e) => {
      table.innerHTML += `
               <tbody><tr>
        <th scope="row">${e.id}</th>
        <td>${e.name}</td>
        
      </tr> </tbody>`;
    });
  } else if (filtro.value === "2") {
    table.innerHTML = `<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
    </tr>
  </thead>`;
    utentiFiltrati.forEach((e) => {
      table.innerHTML += `
               <tbody><tr>
        <th scope="row">${e.id}</th>
       
        <td>${e.username}</td>
        
      </tr> </tbody>`;
    });
  } else if (filtro.value === "3") {
    table.innerHTML = `<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">E-mail</th>
    </tr>
  </thead>`;
    utentiFiltrati.forEach((e) => {
      table.innerHTML += `
               <tbody><tr>
        <th scope="row">${e.id}</th>
        
        <td>${e.email}</td>
      </tr> </tbody>`;
    });
  } else {
    table.innerHTML = `<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">E-mail</th>
    </tr>
  </thead>`;
    utentiFiltrati.forEach((e) => {
      table.innerHTML += `
       <tbody><tr>
  <th scope="row">${e.id}</th>
  <td>${e.name}</td>
  <td>${e.username}</td>
  <td>${e.email}</td>
  </tr> </tbody>`;
    });
  }
};

filtroRicerca();

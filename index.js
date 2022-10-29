document.addEventListener('DOMContentLoaded', async () => {
  
  const res_1 = await fetch("/");
  const data_1 = await res_1.text();
  const div_1 = document.getElementById("div_1");
  div_1.innerText = JSON.stringify(data_1);

  const res_2 = await fetch("/test");
  const data_2 = await res_2.text();
  const div_2 = document.getElementById("div_2");
  div_2.innerText = JSON.stringify(data_2);
    
  const res_3 = await fetch("/.netlify/functions/server");
  const data_3 = await res_3.text();
  const div_3 = document.getElementById("div_3");
  div_3.innerText = JSON.stringify(data_3);

  const res_4 = await fetch("/.netlify/functions/server/test");
  const data_4 = await res_4.text();
  const div_4 = document.getElementById("div_4");
  div_4.innerText = JSON.stringify(data_4);

});
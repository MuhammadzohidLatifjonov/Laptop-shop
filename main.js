function myfunction() {
  let input = document.getElementById("inp").value;
  let text = document.querySelector(".text");
  let box = document.querySelector(".row");
  // black
  let img = document.getElementById("img");
  let name = document.getElementById("comp-name");
  let ozu = document.getElementById("comp-ozu");
  let prot = document.getElementById("comp-prot");
  let memory = document.getElementById("comp-memory");
  let cost = document.getElementById("comp-cost");
  // white
  let img2 = document.getElementById("img2");
  let name2 = document.getElementById("comp-name2");
  let ozu2 = document.getElementById("comp-ozu2");
  let prot2 = document.getElementById("comp-prot2");
  let memory2 = document.getElementById("comp-memory2");
  let cost2 = document.getElementById("comp-cost2");

  // acer qismi
  let acerBlack = {
    img: "images/acer_black.jpg",
    name: "Acer (Black)",
    ozu: "6GB",
    prot: "Core i5 10th Gen",
    memory: "1TB",
    cost: "560$",
  };
  let acerWhite = {
    img: "images/acer_white.jpg",
    name: "Acer (White)",
    ozu: "4GB",
    prot: "Core i3 11th Gen",
    memory: "1TB",
    cost: "400$",
  };
  // hp qismi
  let hpBlack = {
    img: "images/hp_black.jpg",
    name: "hp (Black)",
    ozu: "8GB",
    prot: "Core i5 8th Gen",
    memory: "1TB",
    cost: "560$",
  };
  let hpWhite = {
    img: "images/hp_white.jpg",
    name: "hp (White)",
    ozu: "2GB",
    prot: "Core i5 8th Gen",
    memory: "1TB",
    cost: "400$",
  };
  // asus qismi
  let asusBlack = {
    img: "images/asus_black.jpg",
    name: "Asus (Black)",
    ozu: "6GB",
    prot: "Core i3 8th Gen",
    memory: "1TB",
    cost: "399$",
  };
  let asusWhite = {
    img: "images/asus_white.jpg",
    name: "Asus (White)",
    ozu: "6GB",
    prot: "Core i3 8th Gen",
    memory: "1TB",
    cost: "400$",
  };
  // lenovo qismi
  let lenovoBlack = {
    img: "images/lenovo-black.jpg",
    name: "Lenovo (Black)",
    ozu: "5GB",
    prot: "Core i3 5th Gen",
    memory: "1TB",
    cost: "350$",
  };
  let lenovoWhite = {
    img: "images/lenovo_white.jpg",
    name: "Lenovo (White)",
    ozu: "5GB",
    prot: "Core i3 5th Gen",
    memory: "1TB",
    cost: "350$",
  };

  if (input == "acer" || input == "Acer" || input == "ACER") {
    text.style.display = "none";
    box.style.display = "flex";
    // black
    img.src = acerBlack.img;
    name.innerHTML = acerBlack.name;
    ozu.innerHTML = acerBlack.ozu;
    prot.innerHTML = acerBlack.prot;
    memory.innerHTML = acerBlack.memory;
    cost.innerHTML = acerBlack.cost;
    // white
    img2.src = acerWhite.img;
    name2.innerHTML = acerWhite.name;
    ozu2.innerHTML = acerWhite.ozu;
    prot2.innerHTML = acerWhite.prot;
    memory2.innerHTML = acerWhite.memory;
    cost2.innerHTML = acerWhite.cost;
  } else if (input == "hp" || input == "Hp" || input == "HP") {
    text.style.display = "none";
    box.style.display = "flex";
    // black
    img.src = hpBlack.img;
    name.innerHTML = hpBlack.name;
    ozu.innerHTML = hpBlack.ozu;
    prot.innerHTML = hpBlack.prot;
    memory.innerHTML = hpBlack.memory;
    cost.innerHTML = hpBlack.cost;
    // white
    img2.src = hpWhite.img;
    name2.innerHTML = hpWhite.name;
    ozu2.innerHTML = hpWhite.ozu;
    prot2.innerHTML = hpWhite.prot;
    memory2.innerHTML = hpWhite.memory;
    cost2.innerHTML = hpWhite.cost;
  } else if (input == "asus" || input == "Asus" || input == "ASUS") {
    text.style.display = "none";
    box.style.display = "flex";
    // black
    img.src = asusBlack.img;
    name.innerHTML = asusBlack.name;
    ozu.innerHTML = asusBlack.ozu;
    prot.innerHTML = asusBlack.prot;
    memory.innerHTML = asusBlack.memory;
    cost.innerHTML = asusBlack.cost;
    // white
    img2.src = asusWhite.img;
    name2.innerHTML = asusWhite.name;
    ozu2.innerHTML = asusWhite.ozu;
    prot2.innerHTML = asusWhite.prot;
    memory2.innerHTML = asusWhite.memory;
    cost2.innerHTML = asusWhite.cost;
  } else if (input == "lenovo" || input == "Lenovo" || input == "LENOVO") {
    text.style.display = "none";
    box.style.display = "flex";
    // black
    img.src = lenovoBlack.img;
    name.innerHTML = lenovoBlack.name;
    ozu.innerHTML = lenovoBlack.ozu;
    prot.innerHTML = lenovoBlack.prot;
    memory.innerHTML = lenovoBlack.memory;
    cost.innerHTML = lenovoBlack.cost;
    // white
    img2.src = lenovoWhite.img;
    name2.innerHTML = lenovoWhite.name;
    ozu2.innerHTML = lenovoWhite.ozu;
    prot2.innerHTML = lenovoWhite.prot;
    memory2.innerHTML = lenovoWhite.memory;
    cost2.innerHTML = lenovoWhite.cost;
  } else if (input == "") {
    text.style.display = "block";
    text.style.fontSize = "100px";
    text.innerHTML = "!(+_+)?";
    box.style.display = "none";
  } else {
    box.style.display = "none";
    text.innerHTML = "Bunday kompyuter sotuvda mavjud emas!";
    text.style.display = "block";
    text.style.fontSize = "2em";
  }
}
// Advice Header
const adviceHeader = document.querySelector(".advice-header");
// Advice Body
const adviceBody = document.querySelector(".advice-body");
// Generate Advice Button
const generateBtn = document.querySelector(".advice .generate-advice");

// Fetch Advice
const getAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
    });
    const data = await res.json();
    adviceHeader.textContent = `Advice #${data.slip.id}`;
    adviceBody.textContent = `"${data.slip.advice}"`;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// Get The First Advice
getAdvice();

// Handle Click on Generate Btn
generateBtn.addEventListener("click", () => {
  adviceHeader.textContent = "";
  adviceBody.textContent = "Loading ...";
  getAdvice();
});

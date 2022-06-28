// refs
const titleRef = document.querySelector(".advice__title");
const contentRef = document.querySelector(".advice__content");
const diceBtnRef = document.querySelector(".advice__dice");

const setAdvice = async () => {
  try {
    const { slip } = await (
      await fetch("https://api.adviceslip.com/advice")
    ).json();

    const { advice, id } = slip;

    titleRef.textContent = `Advice #${id}`;
    contentRef.textContent = `“${advice}”`;
  } catch (e) {
    console.error(e.message);
  }
};

setAdvice();

diceBtnRef.addEventListener("click", setAdvice);

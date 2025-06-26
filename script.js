(async function () {
  "use strict";

  const config = {
    pageReadTime: { min: 500, max: 1000 },
    betweenClicks: { min: 400, max: 900 },
    typingSpeed: { min: 40, max: 120 },
    finalReviewTime: { min: 1000, max: 2000 },
  };
  function humanizedSleep(min, max) {
    const delay = Math.floor(Math.random() * (max - min + 1) + min);
    return new Promise((resolve) => setTimeout(resolve, delay));
  }
  async function humanizeInteraction(element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    await humanizedSleep(300, 600);
  }
  async function simulateTyping(element, text) {
    await humanizeInteraction(element);
    element.focus();
    for (const char of text) {
      element.value += char;
      element.dispatchEvent(new Event("input", { bubbles: true }));
      await humanizedSleep(config.typingSpeed.min, config.typingSpeed.max);
    }
    element.blur();
  }
  async function clickById(id) {
    const element = document.getElementById(id);
    if (element) {
      await humanizeInteraction(element);
      element.click();
      await humanizedSleep(config.betweenClicks.min, config.betweenClicks.max);
    } else {
      console.error(`ID not found: ${id}`);
    }
  }
  async function clickBySelector(selector, nextStep) {
    const element = document.querySelector(selector);
    if (element) {
      if (nextStep) sessionStorage.setItem("FORM_AUTOMATION_STEP", nextStep);
      await humanizeInteraction(element);
      element.click();
    } else {
      throw new Error(`Action button not found: ${selector}`);
    }
  }

  try {
    const currentStep = sessionStorage.getItem("FORM_AUTOMATION_STEP") || "1";
    console.log(
      `%cCurrent Step: ${currentStep}`,
      "color: #007bff; font-weight: bold; font-size: 14px;"
    );

    switch (currentStep) {
      case "1":
        console.log("--- Processing Page 1 ---");
        await humanizedSleep(config.pageReadTime.min, config.pageReadTime.max);
        const emailCheckbox = document.getElementById("i5");
        if (!emailCheckbox)
          throw new Error(
            "Could not find the start of the form (email checkbox). Are you on Page 1?"
          );
        const myEmail = (emailCheckbox
          .getAttribute("aria-label")
          .match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/) || [""])[0];
        if (!myEmail) throw new Error("Could not extract email.");
        console.log(`Email Found: ${myEmail}`);

        const adjectives = [
          "Silent",
          "Happy",
          "Clever",
          "Brave",
          "Swift",
          "Gentle",
          "Proud",
          "Bright",
          "Calm",
          "Eager",
          "Jolly",
          "Kind",
          "Loyal",
          "Shy",
          "Wise",
          "Zany",
          "Ancient",
          "Cosmic",
        ];
        const nouns = [
          "Panther",
          "River",
          "Mountain",
          "Eagle",
          "Forest",
          "Ocean",
          "Stallion",
          "Comet",
          "Voyager",
          "Dreamer",
          "Pioneer",
          "Wanderer",
          "Oracle",
          "Guardian",
          "Jester",
          "Scholar",
          "Spectre",
        ];
        const randomAdjective =
          adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        const myNickname = randomAdjective + randomNoun;

        const myCountry = "Bangladesh";

        await clickById("i5");
        await simulateTyping(
          document.querySelector(
            "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(2) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input"
          ),
          myNickname
        );
        await clickById("i21");
        await clickById("i38");
        await clickById("i73");
        await simulateTyping(
          document.querySelector(
            "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(6) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input"
          ),
          myCountry
        );
        await clickById("i99");
        await clickBySelector(
          "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(9) > div > div > div.PY6Xd > div > span > div > label:nth-child(6) > div.eRqjfd > div > div > div.vd3tt > div"
        );
        await clickById("i129");
        await clickById("i147");
        await clickById("i176");
        await simulateTyping(
          document.querySelector(
            "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(13) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input"
          ),
          myEmail
        );

        console.log("Navigating to Page 2...");
        await clickBySelector(
          "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div > div.e19J0b.CeoRYc",
          "2"
        );
        break;

      case "2":
        console.log("--- Processing Page 2 ---");
        await humanizedSleep(config.pageReadTime.min, config.pageReadTime.max);
        await clickById("i10");
        await clickById("i16");
        await clickById("i19");
        await clickById("i31");
        await clickById("i40");
        await clickById("i37");
        await clickById("i51");
        await clickById("i71");
        await clickById("i98");
        await clickById("i95");
        await clickById("i92");
        await clickById("i116");
        await clickById("i128");
        await clickById("i142");
        await clickById("i160");
        await clickById("i163");
        await clickById("i181");
        await clickById("i184");
        console.log("Navigating to Page 3...");
        await clickBySelector(
          "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div:nth-child(2) > span",
          "3"
        );
        break;

      case "3":
        console.log("--- Processing Page 3 ---");
        await humanizedSleep(config.pageReadTime.min, config.pageReadTime.max);
        await clickById("i9");
        await clickById("i23");
        await clickById("i41");
        await clickById("i62");
        await clickById("i68");
        await clickById("i86");
        await clickById("i95");
        await clickById("i109");
        await clickById("i129");
        await clickById("i143");
        await clickById("i163");
        console.log("Navigating to Page 4...");
        await clickBySelector(
          "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div:nth-child(2) > span",
          "4"
        );
        break;

      case "4":
        console.log("--- Processing Page 4 ---");
        await humanizedSleep(config.pageReadTime.min, config.pageReadTime.max);
        await clickById("i10");
        await clickById("i36");
        await clickById("i47");
        await clickById("i61");
        await clickById("i75");
        console.log("Navigating to Final Page...");
        await clickBySelector(
          "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div:nth-child(2) > span",
          "5"
        );
        break;

      case "5":
        console.log("--- Processing Final Page ---");
        await humanizedSleep(config.pageReadTime.min, config.pageReadTime.max);
        const finalInput = document.querySelector(
          "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(7) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input"
        );
        if (finalInput) await simulateTyping(finalInput, "CryptoCraft");
        await humanizedSleep(
          config.finalReviewTime.min,
          config.finalReviewTime.max
        );
        console.log("Submitting the form...");

        await clickBySelector(
          "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div.uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd > span > span",
          null
        );

        sessionStorage.removeItem("FORM_AUTOMATION_STEP");
        console.log(
          "%c🎉 Form submitted successfully! State has been reset.",
          "color: green; font-weight: bold; font-size: 16px;"
        );
        break;

      default:
        console.log("Unknown step. Resetting state.");
        sessionStorage.removeItem("FORM_AUTOMATION_STEP");
    }
  } catch (error) {
    console.error(
      "%cAn error occurred. The script has stopped.",
      "color: red; font-weight: bold; font-size: 14px;"
    );
    console.error("Error details:", error);
    console.log(
      "You may need to manually complete this step. To start over from the beginning, use the reset command."
    );
  }
})();

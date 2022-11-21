const TipCalculatorPage = require('../utils/pages/tip-calculator-page');

describe("My Login Demo", () => {
    beforeEach(async () => {
        await TipCalculatorPage.PaymentField.setValue("");
        await TipCalculatorPage.TipPercentageField.setValue("");

        if (await TipCalculatorPage.Switch.checked) {
            await TipCalculatorPage.Switch.click();
        }
    });

    it("should update tip amount", async () => {
      await TipCalculatorPage.PaymentField.setValue("100");
      await TipCalculatorPage.TipPercentageField.setValue("15");
      await driver.pause(3000);
  
      await expect(TipCalculatorPage.TipDisplay).toHaveText("Tip amount: $15.00");
    });

    it("should round up tip amount", async () => {
        //Access the username input element by its content-desc
        await TipCalculatorPage.PaymentField.setValue("99");
        //Access the username input element by its class + content-desc
        await TipCalculatorPage.TipPercentageField.setValue("15");
        await driver.pause(3000);
    
        await expect(TipCalculatorPage.TipDisplay).toHaveText("Tip amount: $14.85");

        await TipCalculatorPage.Switch.click();

        await expect(TipCalculatorPage.TipDisplay).toHaveText("Tip amount: $15.00");
      });
  });
  
  
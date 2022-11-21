const TipCalculatorPage = require('../utils/pages/tip-calculator-page');
const TipCalculatorActor = require('../utils/actors/tip-calculator-actor');

describe("My Login Demo", () => {
    beforeEach(async () => {
        await TipCalculatorActor.clear();
    });

    it("should update tip amount", async () => {
      await TipCalculatorActor.calculateTip(100, 15);
      await driver.pause(3000);
  
      await TipCalculatorActor.assertTipDisplay("Tip amount: $15.00");
    });

    it("should round up tip amount", async () => {
        await TipCalculatorActor.calculateTip(99, 15);
        await driver.pause(3000);
    
        await TipCalculatorActor.assertTipDisplay("Tip amount: $14.85");

        await TipCalculatorActor.toggleTipRoundUp();

        await TipCalculatorActor.assertTipDisplay("Tip amount: $15.00");
      });
  });
  
  
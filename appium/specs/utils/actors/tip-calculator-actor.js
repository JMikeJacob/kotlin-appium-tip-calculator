const Actor = require('../actor');
const TipCalculatorPage = require('../pages/tip-calculator-page');

class TipCalculatorActor extends Actor {
    constructor() {
        super(TipCalculatorPage);
    }

    async calculateTip(payment, tipPercentage) {
        await this.page.PaymentField.setValue(payment.toString());
        await this.page.TipPercentageField.setValue(tipPercentage.toString());
    }

    async toggleTipRoundUp() {
        await this.page.Switch.click();
    }

    async clear() {
        await this.page.PaymentField.setValue("");
        await this.page.TipPercentageField.setValue("");

        if (await this.page.Switch.checked) {
            await this.page.Switch.click();
        }
    }

    async assertTipDisplay(value) {
        await expect(TipCalculatorPage.TipDisplay).toHaveText(value);
    }
}

module.exports = new TipCalculatorActor();
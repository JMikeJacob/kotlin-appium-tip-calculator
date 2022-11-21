const Page = require('../page');

class TipCalculatorPage extends Page {
    get PaymentField() {
        return $('//android.widget.EditText[1]');
    }

    get TipPercentageField() {
        return $('//android.widget.EditText[2]');
    }

    get Switch() {
        return $('android.widget.Switch');
    }

    get TipDisplay() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]');
    }
}

module.exports = new TipCalculatorPage();
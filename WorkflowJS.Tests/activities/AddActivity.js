﻿var wfjsTests;
(function (wfjsTests) {
    var Activities;
    (function (Activities) {

        var AddActivity = (function ()
        {
            function AddActivity()
            {
                this.$inputs = ['number1', 'number2'];
                this.$outputs = ['total'];
            }

            AddActivity.prototype.Execute = function (context)
            {
                var number1 = parseFloat(context.Inputs['number1']) || 0;
                var number2 = parseFloat(context.Inputs['number2']) || 0;
                context.Outputs['total'] = number1 + number2;
            };

            return AddActivity;
        })();

        Activities.AddActivity = AddActivity;
    })(Activities = wfjsTests.Activities || (wfjsTests.Activities = {}));
})(wfjsTests || (wfjsTests = {}));
//# sourceMappingURL=AddActivity.js.map
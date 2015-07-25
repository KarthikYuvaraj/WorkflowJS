var wfjsExample;
(function (wfjsExample) {
    var Activities;
    (function (Activities) {
        Activities.GreetUserActivity = {
            $outputs: ['result'],
            activities: {
                'GetUsersName': wfjs.Activity({
                    activity: new wfjsExample.Activities.PromptActivity(),
                    $inputs: {
                        message: '"What is your name?"'
                    },
                    $outputs: { 'result': 'name' },
                    next: 'Decision:IsCancelled'
                }),
                'Decision:IsCancelled': {
                    condition: 'this.name == null || this.name == ""',
                    ontrue: 'CreateMessage:NameRefusal',
                    onfalse: 'CreateMessage:Hello'
                },
                'CreateMessage:NameRefusal': {
                    output: 'result',
                    value: '"You did not enter a name!"',
                },
                'CreateMessage:Hello': {
                    output: 'result',
                    value: '"Hello " + this.name + "!"',
                }
            }
        };
    })(Activities = wfjsExample.Activities || (wfjsExample.Activities = {}));
})(wfjsExample || (wfjsExample = {}));
//# sourceMappingURL=GetUserNameActivity.js.map
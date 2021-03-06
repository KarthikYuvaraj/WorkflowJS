var wfjs;
(function (wfjs) {
    /**
     * _Specifications Specification Pattern test for commonly used conditions.
     */
    var _Specifications = (function () {
        function _Specifications() {
        }
        _Specifications.IsPaused = new wfjs._Specification(function (o) { return wfjs._ObjectHelper.GetValue(o, 'State') == 3 /* Paused */ || wfjs._ObjectHelper.GetValue(o, 'StateData') != null; });
        _Specifications.IsWildcardDictionary = new wfjs._Specification(function (o) { return wfjs._ObjectHelper.GetValue(o, '*') != null; });
        _Specifications.IsWildcardArray = new wfjs._Specification(function (o) { return wfjs._ObjectHelper.GetValue(o, 0) == '*'; });
        _Specifications.Has$next = new wfjs._Specification(function (o) { return wfjs._ObjectHelper.GetValue(o, 'Outputs', '$next') != null; });
        _Specifications.IsWorkflowActivity = new wfjs._Specification(function (o) { return wfjs._ObjectHelper.GetValue(o, 'activity') != null; });
        _Specifications.IsExecutableActivity = new wfjs._Specification(function (o) { return typeof wfjs._ObjectHelper.GetValue(o, 'Execute') == 'function'; });
        _Specifications.IsExecuteAsync = new wfjs._Specification(function (o) { return o != null && wfjs._FunctionHelper.ParameterCount(o) >= 2; });
        _Specifications.IsArray = new wfjs._Specification(function (o) { return Object.prototype.toString.call(o) == '[object Array]'; });
        return _Specifications;
    })();
    wfjs._Specifications = _Specifications;
})(wfjs || (wfjs = {}));
//# sourceMappingURL=Specifications.js.map
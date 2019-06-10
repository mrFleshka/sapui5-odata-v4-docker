sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "sap/ui/model/BindingMode"
], function (JSONModel, Device, BindingMode) {
    "use strict";
    return {
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode(BindingMode.OneWay);
            return oModel;
        }
    };
});
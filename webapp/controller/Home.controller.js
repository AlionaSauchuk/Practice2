sap.ui.define([
    "sap/ui/core/tutorial/odatav4/controller/BaseController",
    "sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("sap.ui.core.tutorial.odatav4.controller.Home", {

		onInit : function () {
			var oJSONData = {
				busy : false
			};
			var oModel = new JSONModel(oJSONData);
			this.getView().setModel(oModel, "home");
		},

        onItemSelected: function(oEvent) {

            var oItem, oCtx;
			oItem = oEvent.getSource();
            oCtx = oItem.getBindingContext();
            var tempArr = oCtx.sPath.split('\'');
			this.getRouter().navTo("details",{
				personId : tempArr[1]
			});
            
		}

		
	});
});

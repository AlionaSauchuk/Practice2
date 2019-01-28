sap.ui.define([
    "sap/ui/odatav4/controller/BaseController",
    "sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("sap.ui.odatav4.controller.Home", {

		onInit : function () {
			var oJSONData = {
				busy : false
			};
			var oModel = new JSONModel(oJSONData);
			this.getView().setModel(oModel, "app");
		},

		
		peopleListFactory : function(sId, oContext) {
			var oUIControl;
			oUIControl = this.byId("peopleExtended").clone(sId);
			return oUIControl;
		},	

        onItemSelected: function(oEvent) {

			var oSelectedItem = oEvent.getSource();
			var context = encodeURIComponent(oSelectedItem.getBindingContext('people').getPath());
			this.getRouter().navTo("details",  {personID: context});
            
		}

		
	});
});

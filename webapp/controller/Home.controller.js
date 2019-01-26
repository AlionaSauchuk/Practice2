sap.ui.define([
    "sap/ui/core/tutorial/odatav4/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/ObjectAttribute"
], function (BaseController, JSONModel, ObjectAttribute) {
	"use strict";

	return BaseController.extend("sap.ui.core.tutorial.odatav4.controller.Home", {

		onInit : function () {
			var oJSONData = {
				busy : false
			};
			var oModel = new JSONModel(oJSONData);
			this.getView().setModel(oModel, "home");
		},

		peopleListFactory : function(sId, oContext) {
			var oUIControl;

			// Decide based on the data which dependant to clone
			if (oContext.getProperty("FirstName") 
				&& oContext.getProperty("LastName") 
				&& oContext.getProperty("Age")) {
				// The item is discontinued, so use a StandardListItem
				oUIControl = this.byId("UserName").clone(sId);
			} else {
				// The item is available, so we will create an ObjectListItem
				oUIControl = this.byId("UserName").clone(sId);

				// The item is temporarily out of stock, so we will add a status
				if (oContext.getProperty("Age") < 1) {
					oUIControl.addAttribute(new ObjectAttribute({
						text : {
							path: "i18n>age"
						}
					}));
				}
			}

			return oUIControl;
        },

        onItemSelected: function(oEvent) {

            this.getRouter().getTargets().display("details", {
				fromTarget : "home"
			});
            
            /*
			var oSelectedItem = oEvent.getSource();
			var oContext = oSelectedItem.getBindingContext("device");
			var sPath = oContext.getPath();
			var oProductDetailPanel = this.byId("deviceDetailsPanel");
            oProductDetailPanel.bindElement({ path: sPath, model: "device" });
            */
		}

		
	});
});

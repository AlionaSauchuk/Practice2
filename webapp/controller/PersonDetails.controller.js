sap.ui.define([
	"sap/ui/odatav4/controller/BaseController",
	"sap/ui/core/routing/History"
],function (BaseController, History) {
	"use strict";
	return BaseController.extend("sap.ui.odatav4.controller.PersonDetails", {
		onInit: function(){
			var oRouter = this.getRouter();
			oRouter.getRoute("details").attachPatternMatched(this._onObjectMatched, this);
		},

		_onBindingChange : function (oEvent) {
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},

		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: decodeURIComponent(oEvent.getParameter("arguments").personID),
				model: "people"
			}
			);
		},


		onNavBack: function () {

			var oHistory, sPreviousHash;
	  
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
	  
			if (sPreviousHash !== undefined) {
			  window.history.go(-1);
			} else {
			  this.getRouter().navTo("app", {}, true);
			}
		}
	});
});
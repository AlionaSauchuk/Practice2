sap.ui.define([
	"sap/ui/odatav4/controller/BaseController"
],function (BaseController) {
	"use strict";
	return BaseController.extend("sap.ui.odatav4.controller.PersonDetails", {
		onInit: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("details").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			//this.byId("PeopleDetailPanel").
			this.getView().bindElement({
				path: decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "people"
			}
			);
			console.log(this.byId("PeopleDetailPanel").getBindingContext('people'));
		},
		onNavBack: function () {
			var oHistory, sPreviousHash;
	  
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
	  
			if (sPreviousHash !== undefined) {
			  window.history.go(-1);
			} else {
			  this.getRouter().navTo("home", {}, true);
			}
		  }
	});
});
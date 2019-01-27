sap.ui.define([
	"sap/ui/core/tutorial/odatav4/controller/BaseController"
],function (BaseController) {
	"use strict";
	return BaseController.extend("sap.ui.core.tutorial.odatav4.controller.PersonDetails", {
		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("details").attachMatched(this._onRouteMatched, this);
			// Hint: we don't want to do it this way
			/*
			oRouter.attachRouteMatched(function (oEvent){
				var sRouteName, oArgs, oView;
				sRouteName = oEvent.getParameter("name");
				if (sRouteName === "details"){
					this._onRouteMatched(oEvent);
				}
			}, this);
			*/
		},
		_onRouteMatched : function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			console.log(oArgs);
			oView.bindElement({
				path : "/People('" + oArgs.personId + "')",
				events : {
					
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
		},
		_onBindingChange : function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		}
	});
});
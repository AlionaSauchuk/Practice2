sap.ui.define([
	"sap/ui/core/UIComponent",
	"./model/model"
], function(UIComponent, models) {
	"use strict";

	return UIComponent.extend("Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // create the views based on the url/hash
            this.getRouter().initialize();
        }
	});
});
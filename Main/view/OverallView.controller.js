sap.ui.controller("SAP_MRF.view.OverallView", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf SAP_MRF.view.OverallView
	 */
	//	onInit: function() {
	//
	//	},
	onInit: function() {
		
		var model = new sap.ui.model.json.JSONModel();
		model.loadData("./overallroom.json", false);
		this.getView().setModel(model);
	},

	handleEditPress: function(evt) {
		var oTileContainer = this.getView().byId("container");
		var newValue = !oTileContainer.getEditable();
		oTileContainer.setEditable(newValue);
		evt.getSource().setText(newValue ? "Done" : "Edit");
	},

	handleBusyPress: function(evt) {
		var oTileContainer = this.getView().byId("container");
		var newValue = !oTileContainer.getBusy();
		oTileContainer.setBusy(newValue);
		evt.getSource().setText(newValue ? "Done" : "Busy state");
	},

	handleTileDelete: function(evt) {
		var tile = evt.getParameter("tile");
		evt.getSource().removeTile(tile);
	},
	onNavBack: function() {
		window.history.go(-1);
	},
	quickbook: function() {
	    sap.ui.core.UIComponent.getRouterFor(this).navTo("Room");
	}
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf SAP_MRF.view.OverallView
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf SAP_MRF.view.OverallView
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf SAP_MRF.view.OverallView
	 */
	//	onExit: function() {
	//
	//	}

});
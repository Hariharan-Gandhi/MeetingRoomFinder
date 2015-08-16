jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.ca.ui.model.format.AmountFormat");
jQuery.sap.require("sap.m.TablePersoController");

function addMinutes(date, minutes) {
	return new Date(date.getTime() + minutes * 60000);
}

function formatAMPM(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = "Aug " + date.getDate() + ", " + date.getFullYear() + ", " + hours + ':' + minutes + ' ' + ampm;
	return strTime;
}

sap.ui.core.mvc.Controller.extend("SAP_MRF.view.Master", {
	_oCatalog: null,
	_oResourceBundle: null,

	onInit: function() {
		this._oView = this.getView();
		//var oItemTemplate = this.byId("columnListItem").clone();
		this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this._oView));
		this._oResourceBundle = this._oComponent.getModel("i18n").getResourceBundle();
		this._oRouter = this._oComponent.getRouter();
		this._oCatalog = this.byId("catalogTable");

		this._initViewPropertiesModel();

		var model = new sap.ui.model.json.JSONModel();
		model.loadData("./objects.json", false);
		this.getView().setModel(model);

		var data = {
			myDate: new Date()
		};

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(data);
		sap.ui.getCore().setModel(oModel);

		var currentdate = new Date();
		var datetime = formatAMPM(currentdate);

		sap.m.MessageToast.show(datetime);
		this.byId("findnowdt").setText(datetime);
	},

	// The model created here is used to set values or view element properties that cannot be bound
	// directly to the OData service. Setting view element attributes by binding them to a model is preferable to the
	// alternative of getting each view element by its ID and setting the values directly because a JSon model is more
	// robust if the customer removes view elements (see extensibility).
	_initViewPropertiesModel: function() {
		var oViewElemProperties = {};
		oViewElemProperties.catalogTitleText = "";
		if (sap.ui.Device.system.phone) {
			oViewElemProperties.availabilityColumnWidth = "80%";
			oViewElemProperties.pictureColumnWidth = "5rem";
			oViewElemProperties.btnColHeaderVisible = true;
			oViewElemProperties.searchFieldWidth = "100%";
			oViewElemProperties.catalogTitleVisible = false;
			// in phone mode the spacer is removed in order to increase the size of the search field
			//this.byId("tableToolbar").removeContent(this.byId("toolbarSpacer"));
		} else {
			oViewElemProperties.availabilityColumnWidth = "18%";
			oViewElemProperties.pictureColumnWidth = "9%";
			oViewElemProperties.btnColHeaderVisible = false;
			oViewElemProperties.searchFieldWidth = "30%";
			oViewElemProperties.catalogTitleVisible = true;
		}
		this._oViewProperties = new sap.ui.model.json.JSONModel(oViewElemProperties);
		this._oView.setModel(this._oViewProperties, "viewProperties");
	},

	onNavBack: function() {
		window.history.go(-1);
	},

	// --- List Handling

	// Handler method for the table search.
	onSearchPressed: function() {
		var sValue = this.byId("searchField").getValue();
		var oFilter = new sap.ui.model.Filter("",
			sap.ui.model.FilterOperator.Contains, sValue);
		var oBinding = this.byId("catalogTable").getBinding("items");
		oBinding.filter([oFilter]);
	},

	// --- Navigation
	onLineItemPressed: function(oEvent) {
		this._oRouter.navTo("details", {
			from: "main",
			entity: oEvent.getSource().getBindingContext().getPath().substr(1),
			tab: null
		});
	},
	// CUSTOM CODE

	onOverallView: function() {
		// add filter for search
		var choosendate = this.getView().byId("overalldt").getValue();

		if (!(choosendate === "")) {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("OverallView");
		} else {
			sap.m.MessageToast.show("Date and Time Slot cannot be Empty!!!");
		}
	},

	onSelectionChange: function(oEvt) {

		var oList = oEvt.getSource();
		var oLabel = this.getView().byId("idFilterLabel");
		var oInfoToolbar = this.getView().byId("idInfoToolbar");

		// With the 'getSelectedContexts' function you can access the context paths
		// of all list items that have been selected, regardless of any current
		// filter on the aggregation binding.
		var aContexts = oList.getSelectedContexts(true);

		// update UI
		var bSelected = (aContexts && aContexts.length > 0);
		var sText = (bSelected) ? aContexts.length + " selected" : null;
		oInfoToolbar.setVisible(bSelected);
		oLabel.setText(sText);
	},

	onPressFind: function() {
		sap.m.MessageToast.show(" Search Pressed");
		sap.ui.core.UIComponent.getRouterFor(this).navTo("SearchResults");
	},

	now: function() {
		var datetimenowformatted = formatAMPM(new Date());
		sap.m.MessageToast.show(datetimenowformatted);
		this.getView().byId("findnowdt").setText(datetimenowformatted);
	},

	on15mins: function() {
		var datetimeplus15 = addMinutes(new Date(), 15);
		var datetimeplus15formatted = formatAMPM(datetimeplus15);
		sap.m.MessageToast.show(datetimeplus15formatted);
		this.getView().byId("findnowdt").setText(datetimeplus15formatted);
	},

	on30mins: function() {

		var datetimeplus15 = addMinutes(new Date(), 30);
		var datetimeplus15formatted = formatAMPM(datetimeplus15);
		sap.m.MessageToast.show(datetimeplus15formatted);
		this.getView().byId("findnowdt").setText(datetimeplus15formatted);
	},

	on1hr: function() {
		var datetimeplus15 = addMinutes(new Date(), 60);
		var datetimeplus15formatted = formatAMPM(datetimeplus15);
		sap.m.MessageToast.show(datetimeplus15formatted);
		this.getView().byId("findnowdt").setText(datetimeplus15formatted);
	},

	onSearch: function() {
		//sap.ui.core.UIComponent.getRouterFor(this).navTo("Timeline");
		sap.ui.core.UIComponent.getRouterFor(this).navTo("Room");
	}
});
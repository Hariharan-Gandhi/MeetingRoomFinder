sap.ui.controller("SAP_MRF.view.Room", {

	onInit: function() {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("/supplier.json", false));
		this.getView().setModel(oModel);
	},

	attachUserNameClicked: function(oControlEvent) {
		var oPopover = new sap.m.Popover({
			showHeader: false,
			placement: sap.m.PlacementType.Auto,
			contentHeight: "87px",
			contentWidth: "300px"
		});
		var vCardName = new sap.ui.commons.Label();
		var oVCard = new sap.suite.ui.commons.BusinessCard({
			firstTitle: vCardName,
			secondTitle: "Sales Contact at Customer Side",
			width: "298px"
		});
		var oContent = new sap.ui.commons.layout.MatrixLayout({
			widths: ["30px", "100px"]
		});
		oContent.createRow(new sap.ui.commons.TextView({
			text: "Phone:"
		}), new sap.ui.commons.TextView({
			text: "+1 (635) 457-2875"
		}));
		oContent.createRow(new sap.ui.commons.TextView({
			text: "Email:"
		}), new sap.ui.commons.TextView({
			text: "abc@company.com"
		}));
		oVCard.setContent(oContent);
		oPopover.addContent(oVCard);
		var oItem = oControlEvent.getSource();
		vCardName.setText(oItem.getUserName());
		oVCard.setIconPath("images/persons/male_MillerM.jpg");
		oPopover.openBy(oItem._userNameLink);

	},
	attachUserNameClicked1: function(oControlEvent) {
		var oPopover = new sap.m.Popover({
			showHeader: false,
			placement: sap.m.PlacementType.Auto,
			contentHeight: "87px",
			contentWidth: "300px"
		});
		var vCardName = new sap.ui.commons.Label();
		var oVCard = new sap.suite.ui.commons.BusinessCard({
			firstTitle: vCardName,
			secondTitle: "Sales Contact at Customer Side",
			width: "298px"
		});
		var oContent = new sap.ui.commons.layout.MatrixLayout({
			widths: ["30px", "100px"]
		});
		oContent.createRow(new sap.ui.commons.TextView({
			text: "Phone:"
		}), new sap.ui.commons.TextView({
			text: "+1 (635) 489-5325"
		}));
		oContent.createRow(new sap.ui.commons.TextView({
			text: "Email:"
		}), new sap.ui.commons.TextView({
			text: "abc@company.com"
		}));
		oVCard.setContent(oContent);
		oPopover.addContent(oVCard);
		var oItem = oControlEvent.getSource();
		vCardName.setText(oItem.getUserName());
		oVCard.setIconPath("images/persons/female_IngallsB.jpg");
		oPopover.openBy(oItem._userNameLink);

	},
	attachUserNameClicked2: function(oControlEvent) {
		var oPopover = new sap.m.Popover({
			showHeader: false,
			placement: sap.m.PlacementType.Auto,
			contentHeight: "87px",
			contentWidth: "300px"
		});
		var vCardName = new sap.ui.commons.Label();
		var oVCard = new sap.suite.ui.commons.BusinessCard({
			firstTitle: vCardName,
			secondTitle: "Sales Contact at Customer Side",
			width: "298px"
		});
		var oContent = new sap.ui.commons.layout.MatrixLayout({
			widths: ["30px", "100px"]
		});
		oContent.createRow(new sap.ui.commons.TextView({
			text: "Phone:"
		}), new sap.ui.commons.TextView({
			text: "+1 (635) 234-4781"
		}));
		oContent.createRow(new sap.ui.commons.TextView({
			text: "Email:"
		}), new sap.ui.commons.TextView({
			text: "abc@company.com"
		}));
		oVCard.setContent(oContent);
		oPopover.addContent(oVCard);
		var oItem = oControlEvent.getSource();
		vCardName.setText(oItem.getUserName());
		oVCard.setIconPath("images/persons/male_SmithJo.jpg");
		oPopover.openBy(oItem._userNameLink);

	},
	onNavBack: function() {
		window.history.go(-1);
	},
	onPress: function() {
		alert("Hello from Timeline item");
	}

});
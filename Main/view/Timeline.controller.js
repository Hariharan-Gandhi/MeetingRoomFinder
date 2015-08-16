sap.ui.controller("SAP_MRF.view.Timeline", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf SAP_MRF.view.Timeline
	 */
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf SAP_MRF.view.Timeline
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf SAP_MRF.view.Timeline
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf SAP_MRF.view.Timeline
	 */
	//	onExit: function() {
	//
	//	}
	
	attachUserNameClicked : function(oControlEvent) {
    var oPopover = new sap.m.Popover({
      showHeader : false,
      placement : sap.m.PlacementType.Auto,
      contentHeight : "87px",
      contentWidth : "300px"
    });
    var vCardName = new sap.ui.commons.Label();
    var oVCard = new sap.suite.ui.commons.BusinessCard({
      firstTitle : vCardName,
      secondTitle : "Sales Contact at Customer Side",
      width : "298px"
    });
    var oContent = new sap.ui.commons.layout.MatrixLayout({
      widths : ["30px", "100px"]
    });
    oContent.createRow(new sap.ui.commons.TextView({
      text : "Phone:"
    }), new sap.ui.commons.TextView({
      text : "+1 (635) 457-2875"
    }));
    oContent.createRow(new sap.ui.commons.TextView({
      text : "Email:"
    }), new sap.ui.commons.TextView({
      text : "abc@company.com"
    }));
    oVCard.setContent(oContent);
    oPopover.addContent(oVCard);
    var oItem = oControlEvent.getSource();
    vCardName.setText(oItem.getUserName());
    oVCard.setIconPath("images/persons/male_MillerM.jpg");
    oPopover.openBy(oItem._userNameLink);

  },
  attachUserNameClicked1 : function(oControlEvent) {
    var oPopover = new sap.m.Popover({
      showHeader : false,
      placement : sap.m.PlacementType.Auto,
      contentHeight : "87px",
      contentWidth : "300px"
    });
    var vCardName = new sap.ui.commons.Label();
    var oVCard = new sap.suite.ui.commons.BusinessCard({
      firstTitle : vCardName,
      secondTitle : "Sales Contact at Customer Side",
      width : "298px"
    });
    var oContent = new sap.ui.commons.layout.MatrixLayout({
      widths : ["30px", "100px"]
    });
    oContent.createRow(new sap.ui.commons.TextView({
      text : "Phone:"
    }), new sap.ui.commons.TextView({
      text : "+1 (635) 489-5325"
    }));
    oContent.createRow(new sap.ui.commons.TextView({
      text : "Email:"
    }), new sap.ui.commons.TextView({
      text : "abc@company.com"
    }));
    oVCard.setContent(oContent);
    oPopover.addContent(oVCard);
    var oItem = oControlEvent.getSource();
    vCardName.setText(oItem.getUserName());
    oVCard.setIconPath("images/persons/female_IngallsB.jpg");
    oPopover.openBy(oItem._userNameLink);

  },
  attachUserNameClicked2 : function(oControlEvent) {
    var oPopover = new sap.m.Popover({
      showHeader : false,
      placement : sap.m.PlacementType.Auto,
      contentHeight : "87px",
      contentWidth : "300px" 
    });
    var vCardName = new sap.ui.commons.Label();
    var oVCard = new sap.suite.ui.commons.BusinessCard({
      firstTitle : vCardName,
      secondTitle : "Sales Contact at Customer Side",
      width : "298px"
    });
    var oContent = new sap.ui.commons.layout.MatrixLayout({
      widths : ["30px", "100px"]
    });
    oContent.createRow(new sap.ui.commons.TextView({
      text : "Phone:"
    }), new sap.ui.commons.TextView({
      text : "+1 (635) 234-4781"
    }));
    oContent.createRow(new sap.ui.commons.TextView({
      text : "Email:"
    }), new sap.ui.commons.TextView({
      text : "abc@company.com"
    }));
    oVCard.setContent(oContent);
    oPopover.addContent(oVCard);
    var oItem = oControlEvent.getSource();
    vCardName.setText(oItem.getUserName());
    oVCard.setIconPath("images/persons/male_SmithJo.jpg");
    oPopover.openBy(oItem._userNameLink);

  },
  
  onPress : function() {
    alert("Hello from Timeline item");
  }



});
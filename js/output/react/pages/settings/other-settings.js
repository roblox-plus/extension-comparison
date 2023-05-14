class OtherSettings extends SettingsTab {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      class: "section"
    }, /*#__PURE__*/React.createElement("div", {
      class: "container-header"
    }, /*#__PURE__*/React.createElement("h3", null, "Profile Page")), /*#__PURE__*/React.createElement("div", {
      class: "section-content"
    }, /*#__PURE__*/React.createElement("span", {
      class: "text-lead"
    }, "Display users RAP in header."), /*#__PURE__*/React.createElement(PillToggle, {
      getValue: this.getPillValue.bind(this, "profileRAP"),
      onToggle: this.setPillValue.bind(this, "profileRAP")
    }), /*#__PURE__*/React.createElement("div", {
      class: "rbx-divider"
    }), /*#__PURE__*/React.createElement("span", {
      class: "text-description"
    }, "Calculates total user value in items and displays it as profile header stat."))), /*#__PURE__*/React.createElement("div", {
      class: "section"
    }, /*#__PURE__*/React.createElement("div", {
      class: "container-header"
    }, /*#__PURE__*/React.createElement("h3", null, "Game Details Page")), /*#__PURE__*/React.createElement("div", {
      class: "section-content"
    }, /*#__PURE__*/React.createElement("span", {
      class: "text-lead"
    }, "Badge Achievement Dates"), /*#__PURE__*/React.createElement(PillToggle, {
      getValue: this.getPillValue.bind(this, "badgeAchievementDatesEnabled"),
      onToggle: this.setPillValue.bind(this, "badgeAchievementDatesEnabled")
    }), /*#__PURE__*/React.createElement("div", {
      class: "rbx-divider"
    }), /*#__PURE__*/React.createElement("span", {
      class: "text-description"
    }, "On game details page see when you achieved each badge."))), /*#__PURE__*/React.createElement("div", {
      class: "section"
    }, /*#__PURE__*/React.createElement("div", {
      class: "container-header"
    }, /*#__PURE__*/React.createElement("h3", null, "Item Details Page")), /*#__PURE__*/React.createElement("div", {
      class: "section-content"
    }, /*#__PURE__*/React.createElement("span", {
      class: "text-lead"
    }, "Created Items Sales Counter"), /*#__PURE__*/React.createElement(PillToggle, {
      getValue: this.getPillValue.bind(this, "itemSalesCounter"),
      onToggle: this.setPillValue.bind(this, "itemSalesCounter"),
      disabled: !this.state.isPremium
    }), /*#__PURE__*/React.createElement("div", {
      class: "rbx-divider"
    }), /*#__PURE__*/React.createElement("span", {
      class: "text-description"
    }, "Adds a sales count label on item details pages for items that you created. This feature is for Roblox+ Premium users only.")), /*#__PURE__*/React.createElement("div", {
      class: "section-content"
    }, /*#__PURE__*/React.createElement("span", {
      class: "text-lead"
    }, "Asset Dependencies"), /*#__PURE__*/React.createElement(PillToggle, {
      getValue: this.getPillValue.bind(this, "asset-dependency-list"),
      onToggle: this.setPillValue.bind(this, "asset-dependency-list")
    }), /*#__PURE__*/React.createElement("div", {
      class: "rbx-divider"
    }), /*#__PURE__*/React.createElement("span", {
      class: "text-description"
    }, "Shows the assets that an item depends on, on the item details page."))), /*#__PURE__*/React.createElement("div", {
      class: "section"
    }, /*#__PURE__*/React.createElement("div", {
      class: "container-header"
    }, /*#__PURE__*/React.createElement("h3", null, "Twemojis")), /*#__PURE__*/React.createElement("div", {
      class: "section-content"
    }, /*#__PURE__*/React.createElement("span", {
      class: "text-description"
    }, "Replace emojis on the website with twemojis."), /*#__PURE__*/React.createElement(PillToggle, {
      getValue: this.getPillValue.bind(this, "twemoji"),
      onToggle: this.setPillValue.bind(this, "twemoji")
    }))), /*#__PURE__*/React.createElement("div", {
      class: "section"
    }, /*#__PURE__*/React.createElement("div", {
      class: "container-header"
    }, /*#__PURE__*/React.createElement("h3", null, "Money")), /*#__PURE__*/React.createElement("div", {
      class: "section-content"
    }, /*#__PURE__*/React.createElement("span", {
      class: "text-lead"
    }, "Track Robux History"), /*#__PURE__*/React.createElement(PillToggle, {
      getValue: this.getPillValue.bind(this, "robuxHistoryEnabled"),
      onToggle: this.setPillValue.bind(this, "robuxHistoryEnabled"),
      disabled: !this.state.isPremium
    }), /*#__PURE__*/React.createElement("div", {
      class: "rbx-divider"
    }), /*#__PURE__*/React.createElement("span", {
      class: "text-description"
    }, "Keeps track of your Robux history while live navigation counters are turned on and charts them on the ", /*#__PURE__*/React.createElement("a", {
      class: "text-link",
      href: "/My/Money.aspx#/#Summary_tab"
    }, "Money page summary tab"), ". This feature is for Roblox+ Premium users only."))), /*#__PURE__*/React.createElement("div", {
      class: "section"
    }, /*#__PURE__*/React.createElement("div", {
      class: "container-header"
    }, /*#__PURE__*/React.createElement("h3", null, "Developer Stats")), /*#__PURE__*/React.createElement("div", {
      class: "section-content"
    }, /*#__PURE__*/React.createElement("span", {
      class: "text-lead"
    }, "Premium Payouts Summary"), /*#__PURE__*/React.createElement(PillToggle, {
      getValue: this.getPillValue.bind(this, "premiumPayoutsSummary"),
      onToggle: this.setPillValue.bind(this, "premiumPayoutsSummary"),
      disabled: !this.state.isPremium
    }), /*#__PURE__*/React.createElement("div", {
      class: "rbx-divider"
    }), /*#__PURE__*/React.createElement("span", {
      class: "text-description"
    }, "Adds premium payout summary to premium tab. This feature is for Roblox+ Premium users only."))));
  }
}
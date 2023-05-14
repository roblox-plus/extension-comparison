class OtherSettings extends SettingsTab {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div class="section">
					<div class="container-header">
						<h3>Profile Page</h3>
					</div>
					<div class="section-content">
						<span class="text-lead">Display users RAP in header.</span>
						<PillToggle getValue={this.getPillValue.bind(this, "profileRAP")}
							onToggle={this.setPillValue.bind(this, "profileRAP")} />
						<div class="rbx-divider"></div>
						<span class="text-description">Calculates total user value in items and displays it as profile header stat.</span>
					</div>
				</div>
				<div class="section">
					<div class="container-header">
						<h3>Game Details Page</h3>
					</div>
					<div class="section-content">
						<span class="text-lead">Badge Achievement Dates</span>
						<PillToggle getValue={this.getPillValue.bind(this, "badgeAchievementDatesEnabled")}
							onToggle={this.setPillValue.bind(this, "badgeAchievementDatesEnabled")} />
						<div class="rbx-divider"></div>
						<span class="text-description">On game details page see when you achieved each badge.</span>
					</div>
				</div>
				<div class="section">
					<div class="container-header">
						<h3>Item Details Page</h3>
					</div>
					<div class="section-content">
						<span class="text-lead">Created Items Sales Counter</span>
						<PillToggle getValue={this.getPillValue.bind(this, "itemSalesCounter")}
							onToggle={this.setPillValue.bind(this, "itemSalesCounter")}
							disabled={!this.state.isPremium} />
						<div class="rbx-divider"></div>
						<span class="text-description">Adds a sales count label on item details pages for items that you created. This feature is for Roblox+ Premium users only.</span>
					</div>
					<div class="section-content">
						<span class="text-lead">Asset Dependencies</span>
						<PillToggle getValue={this.getPillValue.bind(this, "asset-dependency-list")}
							onToggle={this.setPillValue.bind(this, "asset-dependency-list")} />
						<div class="rbx-divider"></div>
						<span class="text-description">Shows the assets that an item depends on, on the item details page.</span>
					</div>
				</div>
				<div class="section">
					<div class="container-header">
						<h3>Twemojis</h3>
					</div>
					<div class="section-content">
						<span class="text-description">Replace emojis on the website with twemojis.</span>
						<PillToggle getValue={this.getPillValue.bind(this, "twemoji")}
							onToggle={this.setPillValue.bind(this, "twemoji")} />
					</div>
				</div>
				<div class="section">
					<div class="container-header">
						<h3>Money</h3>
					</div>
					<div class="section-content">
						<span class="text-lead">Track Robux History</span>
						<PillToggle getValue={this.getPillValue.bind(this, "robuxHistoryEnabled")}
							onToggle={this.setPillValue.bind(this, "robuxHistoryEnabled")}
							disabled={!this.state.isPremium} />
						<div class="rbx-divider"></div>
						<span class="text-description">Keeps track of your Robux history while live navigation counters are turned on and charts them on the <a class="text-link" href="/My/Money.aspx#/#Summary_tab">Money page summary tab</a>. This feature is for Roblox+ Premium users only.</span>
					</div>
				</div>
				<div class="section">
					<div class="container-header">
						<h3>Developer Stats</h3>
					</div>
					<div class="section-content">
						<span class="text-lead">Premium Payouts Summary</span>
						<PillToggle getValue={this.getPillValue.bind(this, "premiumPayoutsSummary")}
							onToggle={this.setPillValue.bind(this, "premiumPayoutsSummary")}
							disabled={!this.state.isPremium} />
						<div class="rbx-divider"></div>
						<span class="text-description">Adds premium payout summary to premium tab. This feature is for Roblox+ Premium users only.</span>
					</div>
				</div>
			</div>
		);
	}
}
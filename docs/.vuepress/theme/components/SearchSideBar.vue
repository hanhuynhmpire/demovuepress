<template>
    <aside class="sidebar">
        <div class="sidebar-top-mobile d-md-none">
            <div class="sidebar-button" @click="closeSidebar">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                    <path id="ic_arrow_back_24px" d="M16,9.25H6.872l4.193-4.193L10,4,4,10l6,6,1.057-1.057L6.872,10.75H16Z" transform="translate(-4 -4)" fill="#3e6f8f"/>
                </svg>
            </div>
            <h6><span v-if="$siteTitle" ref="siteName" class="site-name" :class="{ 'can-hide': $site.themeConfig.logo }">{{ $siteTitle }}</span></h6>
        </div>
        <div class="search-box">
            <input class="search-sidebar" type="text" v-model="inputSearch" @change="searchSideBar">
        </div>
        <ul class="sidebar-links">
            
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/accommodation/accommodation/" class="sidebar-heading clickable"><span>Accommodation</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/accommodation/accommodation/short-term-accommodation-activities/" class="sidebar-link" name="group">Short Term Accommodation Activities</a></li>
					<li><a href="/accommodation/accommodation/camping-grounds-recreational-vehicle-parks-and-trailer-parks/" class="sidebar-link" name="group">Camping Grounds, Recreational Vehicle Parks And Trailer Parks</a></li>
					<li><a href="/accommodation/accommodation/other-accommodation/" class="sidebar-link" name="group">Other Accommodation</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/activities-auxiliary-to-financial-service-and-insurance-activities/activities-auxiliary-to-financial-service-and-insurance-activities/" class="sidebar-heading clickable"><span>Activities auxiliary to financial service and insurance activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/activities-auxiliary-to-financial-service-and-insurance-activities/activities-auxiliary-to-financial-service-and-insurance-activities/administration-of-financial-markets/" class="sidebar-link" name="group">Administration Of Financial Markets</a></li>
					<li><a href="/activities-auxiliary-to-financial-service-and-insurance-activities/activities-auxiliary-to-financial-service-and-insurance-activities/security-and-commodity-contracts-brokerage/" class="sidebar-link" name="group">Security And Commodity Contracts Brokerage</a></li>
					<li><a href="/activities-auxiliary-to-financial-service-and-insurance-activities/activities-auxiliary-to-financial-service-and-insurance-activities/other-activities-auxiliary-to-financial-service-activities/" class="sidebar-link" name="group">Other Activities Auxiliary To Financial Service Activities</a></li>
					<li><a href="/activities-auxiliary-to-financial-service-and-insurance-activities/activities-auxiliary-to-financial-service-and-insurance-activities/risk-and-damage-evaluation/" class="sidebar-link" name="group">Risk And Damage Evaluation</a></li>
					<li><a href="/activities-auxiliary-to-financial-service-and-insurance-activities/activities-auxiliary-to-financial-service-and-insurance-activities/activities-of-insurance-agents-and-brokers/" class="sidebar-link" name="group">Activities Of Insurance Agents And Brokers</a></li>
					<li><a href="/activities-auxiliary-to-financial-service-and-insurance-activities/activities-auxiliary-to-financial-service-and-insurance-activities/other-activities-auxiliary-to-insurance-and-pension-funding/" class="sidebar-link" name="group">Other Activities Auxiliary To Insurance And Pension Funding</a></li>
					<li><a href="/activities-auxiliary-to-financial-service-and-insurance-activities/activities-auxiliary-to-financial-service-and-insurance-activities/fund-management-activities/" class="sidebar-link" name="group">Fund Management Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/activities-of-extraterritorial-organizations-and-bodies/activities-of-extraterritorial-organizations-and-bodies/" class="sidebar-heading clickable"><span>Activities of extraterritorial organizations and bodies</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/activities-of-extraterritorial-organizations-and-bodies/activities-of-extraterritorial-organizations-and-bodies/activities-of-extraterritorial-organizations-and-bodies/" class="sidebar-link" name="group">Activities Of Extraterritorial Organizations And Bodies</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/activities-of-head-offices-management-consultancy-activities/activities-of-head-offices-management-consultancy-activities/" class="sidebar-heading clickable"><span>Activities of head offices; management consultancy activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/activities-of-head-offices-management-consultancy-activities/activities-of-head-offices-management-consultancy-activities/activities-of-head-offices/" class="sidebar-link" name="group">Activities Of Head Offices</a></li>
					<li><a href="/activities-of-head-offices-management-consultancy-activities/activities-of-head-offices-management-consultancy-activities/management-consultancy-activities/" class="sidebar-link" name="group">Management Consultancy Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/activities-of-households-as-employers-of-domestic-personnel/activities-of-households-as-employers-of-domestic-personnel/" class="sidebar-heading clickable"><span>Activities of households as employers of domestic personnel</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/activities-of-households-as-employers-of-domestic-personnel/activities-of-households-as-employers-of-domestic-personnel/activities-of-households-as-employers-of-domestic-personnel/" class="sidebar-link" name="group">Activities Of Households As Employers Of Domestic Personnel</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/activities-of-membership-organizations/activities-of-membership-organizations/" class="sidebar-heading clickable"><span>Activities of membership organizations</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/activities-of-membership-organizations/activities-of-membership-organizations/activities-of-business-and-employers-membership-organizations/" class="sidebar-link" name="group">Activities Of Business And Employers Membership Organizations</a></li>
					<li><a href="/activities-of-membership-organizations/activities-of-membership-organizations/activities-of-professional-membership-organizations/" class="sidebar-link" name="group">Activities Of Professional Membership Organizations</a></li>
					<li><a href="/activities-of-membership-organizations/activities-of-membership-organizations/activities-of-trade-unions/" class="sidebar-link" name="group">Activities Of Trade Unions</a></li>
					<li><a href="/activities-of-membership-organizations/activities-of-membership-organizations/activities-of-other-membership-organizations-not-elsewhere-classified/" class="sidebar-link" name="group">Activities Of Other Membership Organizations Not Elsewhere Classified</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/advertising-and-market-research/advertising-and-market-research/" class="sidebar-heading clickable"><span>Advertising and market research</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/advertising-and-market-research/advertising-and-market-research/advertising/" class="sidebar-link" name="group">Advertising</a></li>
					<li><a href="/advertising-and-market-research/advertising-and-market-research/market-research-and-public-opinion-polling/" class="sidebar-link" name="group">Market Research And Public Opinion Polling</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/air-transport/air-transport/" class="sidebar-heading clickable"><span>Air transport</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/air-transport/air-transport/passenger-air-transport/" class="sidebar-link" name="group">Passenger Air Transport</a></li>
					<li><a href="/air-transport/air-transport/freight-air-transport/" class="sidebar-link" name="group">Freight Air Transport</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/architectural-and-engineering-activities-technical-testing-and-analysis/architectural-and-engineering-activities-technical-testing-and-analysis/" class="sidebar-heading clickable"><span>Architectural and engineering activities; technical testing and analysis</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/architectural-and-engineering-activities-technical-testing-and-analysis/architectural-and-engineering-activities-technical-testing-and-analysis/architectural-and-engineering-activities-and-related-technical-consultancy/" class="sidebar-link" name="group">Architectural And Engineering Activities And Related Technical Consultancy</a></li>
					<li><a href="/architectural-and-engineering-activities-technical-testing-and-analysis/architectural-and-engineering-activities-technical-testing-and-analysis/technical-testing-and-analysis/" class="sidebar-link" name="group">Technical Testing And Analysis</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/civil-engineering/civil-engineering/" class="sidebar-heading clickable"><span>Civil engineering</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/civil-engineering/civil-engineering/construction-of-roads-and-railways/" class="sidebar-link" name="group">Construction Of Roads And Railways</a></li>
					<li><a href="/civil-engineering/civil-engineering/construction-of-utility-projects/" class="sidebar-link" name="group">Construction Of Utility Projects</a></li>
					<li><a href="/civil-engineering/civil-engineering/construction-of-other-civil-engineering-projects/" class="sidebar-link" name="group">Construction Of Other Civil Engineering Projects</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/computer-programming-consultancy-and-related-activities/computer-programming-consultancy-and-related-activities/" class="sidebar-heading clickable"><span>Computer programming, consultancy and related activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/computer-programming-consultancy-and-related-activities/computer-programming-consultancy-and-related-activities/computer-programming-activities/" class="sidebar-link" name="group">Computer Programming Activities</a></li>
					<li><a href="/computer-programming-consultancy-and-related-activities/computer-programming-consultancy-and-related-activities/computer-consultancy-and-computer-facilities-management-activities/" class="sidebar-link" name="group">Computer Consultancy And Computer Facilities Management Activities</a></li>
					<li><a href="/computer-programming-consultancy-and-related-activities/computer-programming-consultancy-and-related-activities/other-information-technology-and-computer-service-activities/" class="sidebar-link" name="group">Other Information Technology And Computer Service Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/construction-of-buildings/construction-of-buildings/" class="sidebar-heading clickable"><span>Construction of buildings</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/construction-of-buildings/construction-of-buildings/construction-of-buildings/" class="sidebar-link" name="group">Construction Of Buildings</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/creative-arts-and-entertainment-activities/creative-arts-and-entertainment-activities/" class="sidebar-heading clickable"><span>Creative, arts and entertainment activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/creative-arts-and-entertainment-activities/creative-arts-and-entertainment-activities/creative-arts-and-entertainment-activities/" class="sidebar-link" name="group">Creative, Arts And Entertainment Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/" class="sidebar-heading clickable"><span>Crop and animal production, hunting and related service activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/growing-of-cereals-except-rice-leguminous-crops-and-oil-seeds/" class="sidebar-link" name="group">Growing Of Cereals (Except Rice), Leguminous Crops And Oil Seeds</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/growing-of-rice/" class="sidebar-link" name="group">Growing Of Rice</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/growing-of-vegetables-and-melons-roots-and-tubers/" class="sidebar-link" name="group">Growing Of Vegetables And Melons, Roots And Tubers</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/growing-of-sugar-cane/" class="sidebar-link" name="group">Growing Of Sugar Cane</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/growing-of-fibre-crops/" class="sidebar-link" name="group">Growing Of Fibre Crops</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/growing-of-other-non-perennial-crops/" class="sidebar-link" name="group">Growing of other non-perennial crops</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/growing-of-grapes/" class="sidebar-link" name="group">Growing Of Grapes</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/growing-of-other-tree-and-bush-fruits-and-nuts/" class="sidebar-link" name="group">Growing Of Other Tree And Bush Fruits And Nuts</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/growing-of-beverage-crops/" class="sidebar-link" name="group">Growing Of Beverage Crops</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/growing-of-spices-aromatic-drug-and-pharmaceutical-crops/" class="sidebar-link" name="group">Growing Of Spices, Aromatic, Drug And Pharmaceutical Crops</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/growing-of-other-perennial-crops/" class="sidebar-link" name="group">Growing Of Other Perennial Crops</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/plant-propagation/" class="sidebar-link" name="group">Plant Propagation</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/raising-of-cattle-and-buffaloes/" class="sidebar-link" name="group">Raising Of Cattle And Buffaloes</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/raising-of-camels-and-camelids/" class="sidebar-link" name="group">Raising Of Camels And Camelids</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/raising-of-sheep-and-goats/" class="sidebar-link" name="group">Raising Of Sheep And Goats</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/raising-of-poultry/" class="sidebar-link" name="group">Raising Of Poultry</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/raising-of-other-animals/" class="sidebar-link" name="group">Raising Of Other Animals</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/support-activities-for-crop-production/" class="sidebar-link" name="group">Support Activities For Crop Production</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/support-activities-for-animal-production/" class="sidebar-link" name="group">Support Activities For Animal Production</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/post-harvest-crop-activities/" class="sidebar-link" name="group">Post-harvest crop activities</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/seed-processing-for-propagation/" class="sidebar-link" name="group">Seed Processing For Propagation</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/hunting-trapping-and-related-service-activities/" class="sidebar-link" name="group">Hunting, Trapping And Related Service Activities</a></li>
					<li><a href="/crop-and-animal-production-hunting-and-related-service-activities/crop-and-animal-production-hunting-and-related-service-activities/mixed-farming/" class="sidebar-link" name="group">Mixed Farming</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/education/education/" class="sidebar-heading clickable"><span>Education</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/education/education/pre-primary-and-primary-education/" class="sidebar-link" name="group">Pre-primary and primary education</a></li>
					<li><a href="/education/education/general-secondary-education/" class="sidebar-link" name="group">General Secondary Education</a></li>
					<li><a href="/education/education/technical-and-vocational-secondary-education/" class="sidebar-link" name="group">Technical And Vocational Secondary Education</a></li>
					<li><a href="/education/education/higher-education/" class="sidebar-link" name="group">Higher Education</a></li>
					<li><a href="/education/education/sports-and-recreation-education/" class="sidebar-link" name="group">Sports And Recreation Education</a></li>
					<li><a href="/education/education/cultural-education/" class="sidebar-link" name="group">Cultural Education</a></li>
					<li><a href="/education/education/other-education-not-elsewhere-classified/" class="sidebar-link" name="group">Other Education Not Elsewhere Classified</a></li>
					<li><a href="/education/education/educational-support-activities/" class="sidebar-link" name="group">Educational Support Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/electricity-gas-steam-and-air-conditioning-supply/electricity-gas-steam-and-air-conditioning-supply/" class="sidebar-heading clickable"><span>Electricity, gas, steam and air conditioning supply</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/electricity-gas-steam-and-air-conditioning-supply/electricity-gas-steam-and-air-conditioning-supply/electric-power-generation-transmission-and-distribution/" class="sidebar-link" name="group">Electric Power Generation, Transmission And Distribution</a></li>
					<li><a href="/electricity-gas-steam-and-air-conditioning-supply/electricity-gas-steam-and-air-conditioning-supply/manufacture-of-gas-distribution-of-gaseous-fuels-through-mains/" class="sidebar-link" name="group">Manufacture Of Gas; Distribution Of Gaseous Fuels Through Mains</a></li>
					<li><a href="/electricity-gas-steam-and-air-conditioning-supply/electricity-gas-steam-and-air-conditioning-supply/steam-and-air-conditioning-supply/" class="sidebar-link" name="group">Steam And Air Conditioning Supply</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/employment-activities/employment-activities/" class="sidebar-heading clickable"><span>Employment activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/employment-activities/employment-activities/activities-of-employment-placement-agencies/" class="sidebar-link" name="group">Activities Of Employment Placement Agencies</a></li>
					<li><a href="/employment-activities/employment-activities/temporary-employment-agency-activities/" class="sidebar-link" name="group">Temporary Employment Agency Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/extraction-of-crude-petroleum-and-natural-gas/extraction-of-crude-petroleum-and-natural-gas/" class="sidebar-heading clickable"><span>Extraction of crude petroleum and natural gas</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/extraction-of-crude-petroleum-and-natural-gas/extraction-of-crude-petroleum-and-natural-gas/extraction-of-natural-gas/" class="sidebar-link" name="group">Extraction Of Natural Gas</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/financial-service-activities-except-insurance-and-pension-funding/financial-service-activities-except-insurance-and-pension-funding/" class="sidebar-heading clickable"><span>Financial service activities, except insurance and pension funding</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/financial-service-activities-except-insurance-and-pension-funding/financial-service-activities-except-insurance-and-pension-funding/central-banking/" class="sidebar-link" name="group">Central Banking</a></li>
					<li><a href="/financial-service-activities-except-insurance-and-pension-funding/financial-service-activities-except-insurance-and-pension-funding/other-monetary-intermediation/" class="sidebar-link" name="group">Other Monetary Intermediation</a></li>
					<li><a href="/financial-service-activities-except-insurance-and-pension-funding/financial-service-activities-except-insurance-and-pension-funding/activities-of-holding-companies/" class="sidebar-link" name="group">Activities Of Holding Companies</a></li>
					<li><a href="/financial-service-activities-except-insurance-and-pension-funding/financial-service-activities-except-insurance-and-pension-funding/trusts-funds-and-similar-financial-entities/" class="sidebar-link" name="group">Trusts, Funds And Similar Financial Entities</a></li>
					<li><a href="/financial-service-activities-except-insurance-and-pension-funding/financial-service-activities-except-insurance-and-pension-funding/financial-leasing/" class="sidebar-link" name="group">Financial Leasing</a></li>
					<li><a href="/financial-service-activities-except-insurance-and-pension-funding/financial-service-activities-except-insurance-and-pension-funding/other-credit-granting/" class="sidebar-link" name="group">Other Credit Granting</a></li>
					<li><a href="/financial-service-activities-except-insurance-and-pension-funding/financial-service-activities-except-insurance-and-pension-funding/other-financial-service-activities-except-insurance-and-pension-funding-activities-not-elsewhere-classified/" class="sidebar-link" name="group">Other Financial Service Activities, Except Insurance And Pension Funding Activities, Not Elsewhere Classified</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/fishing-and-aquaculture/fishing-and-aquaculture/" class="sidebar-heading clickable"><span>Fishing and aquaculture</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/fishing-and-aquaculture/fishing-and-aquaculture/marine-fishing/" class="sidebar-link" name="group">Marine Fishing</a></li>
					<li><a href="/fishing-and-aquaculture/fishing-and-aquaculture/freshwater-fishing/" class="sidebar-link" name="group">Freshwater Fishing</a></li>
					<li><a href="/fishing-and-aquaculture/fishing-and-aquaculture/marine-aquaculture/" class="sidebar-link" name="group">Marine Aquaculture</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/food-and-beverage-service-activities/food-and-beverage-service-activities/" class="sidebar-heading clickable"><span>Food and beverage service activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/food-and-beverage-service-activities/food-and-beverage-service-activities/restaurants-and-mobile-food-service-activities/" class="sidebar-link" name="group">Restaurants And Mobile Food Service Activities</a></li>
					<li><a href="/food-and-beverage-service-activities/food-and-beverage-service-activities/event-catering/" class="sidebar-link" name="group">Event Catering</a></li>
					<li><a href="/food-and-beverage-service-activities/food-and-beverage-service-activities/other-food-service-activities/" class="sidebar-link" name="group">Other Food Service Activities</a></li>
					<li><a href="/food-and-beverage-service-activities/food-and-beverage-service-activities/beverage-serving-activities/" class="sidebar-link" name="group">Beverage Serving Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/forestry-and-logging/forestry-and-logging/" class="sidebar-heading clickable"><span>Forestry and logging</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/forestry-and-logging/forestry-and-logging/silviculture-and-other-forestry-activities/" class="sidebar-link" name="group">Silviculture And Other Forestry Activities</a></li>
					<li><a href="/forestry-and-logging/forestry-and-logging/logging/" class="sidebar-link" name="group">Logging</a></li>
					<li><a href="/forestry-and-logging/forestry-and-logging/gathering-of-non-wood-forest-products/" class="sidebar-link" name="group">Gathering of non-wood forest products</a></li>
					<li><a href="/forestry-and-logging/forestry-and-logging/support-services-to-forestry/" class="sidebar-link" name="group">Support Services To Forestry</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/gambling-and-betting-activities/gambling-and-betting-activities/" class="sidebar-heading clickable"><span>Gambling and betting activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/gambling-and-betting-activities/gambling-and-betting-activities/gambling-and-betting-activities/" class="sidebar-link" name="group">Gambling And Betting Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/human-health-activities/human-health-activities/" class="sidebar-heading clickable"><span>Human health activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/human-health-activities/human-health-activities/hospital-activities/" class="sidebar-link" name="group">Hospital Activities</a></li>
					<li><a href="/human-health-activities/human-health-activities/medical-and-dental-practice-activities/" class="sidebar-link" name="group">Medical And Dental Practice Activities</a></li>
					<li><a href="/human-health-activities/human-health-activities/other-human-health-activities/" class="sidebar-link" name="group">Other Human Health Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/information-service-activities/information-service-activities/" class="sidebar-heading clickable"><span>Information service activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/information-service-activities/information-service-activities/data-processing-hosting-and-related-activities/" class="sidebar-link" name="group">Data Processing, Hosting And Related Activities</a></li>
					<li><a href="/information-service-activities/information-service-activities/web-portals/" class="sidebar-link" name="group">Web Portals</a></li>
					<li><a href="/information-service-activities/information-service-activities/news-agency-activities/" class="sidebar-link" name="group">News Agency Activities</a></li>
					<li><a href="/information-service-activities/information-service-activities/other-information-service-activities-not-elsewhere-classified/" class="sidebar-link" name="group">Other Information Service Activities Not Elsewhere Classified</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/insurance-reinsurance-and-pension-funding-except-compulsory-social-security/insurance-reinsurance-and-pension-funding-except-compulsory-social-security/" class="sidebar-heading clickable"><span>Insurance, reinsurance and pension funding, except compulsory social security</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/insurance-reinsurance-and-pension-funding-except-compulsory-social-security/insurance-reinsurance-and-pension-funding-except-compulsory-social-security/life-insurance/" class="sidebar-link" name="group">Life Insurance</a></li>
					<li><a href="/insurance-reinsurance-and-pension-funding-except-compulsory-social-security/insurance-reinsurance-and-pension-funding-except-compulsory-social-security/non-life-insurance/" class="sidebar-link" name="group">Non-life insurance</a></li>
					<li><a href="/insurance-reinsurance-and-pension-funding-except-compulsory-social-security/insurance-reinsurance-and-pension-funding-except-compulsory-social-security/pension-funding/" class="sidebar-link" name="group">Pension Funding</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/land-transport-and-transport-via-pipelines/land-transport-and-transport-via-pipelines/" class="sidebar-heading clickable"><span>Land transport and transport via pipelines</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/land-transport-and-transport-via-pipelines/land-transport-and-transport-via-pipelines/passenger-rail-transport-interurban/" class="sidebar-link" name="group">Passenger Rail Transport, Interurban</a></li>
					<li><a href="/land-transport-and-transport-via-pipelines/land-transport-and-transport-via-pipelines/freight-rail-transport/" class="sidebar-link" name="group">Freight Rail Transport</a></li>
					<li><a href="/land-transport-and-transport-via-pipelines/land-transport-and-transport-via-pipelines/transport-via-pipeline/" class="sidebar-link" name="group">Transport Via Pipeline</a></li>
					<li><a href="/land-transport-and-transport-via-pipelines/land-transport-and-transport-via-pipelines/other-passenger-land-transport/" class="sidebar-link" name="group">Other Passenger Land Transport</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/legal-and-accounting-activities/legal-and-accounting-activities/" class="sidebar-heading clickable"><span>Legal and accounting activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/legal-and-accounting-activities/legal-and-accounting-activities/legal-activities/" class="sidebar-link" name="group">Legal Activities</a></li>
					<li><a href="/legal-and-accounting-activities/legal-and-accounting-activities/accounting-bookkeeping-and-auditing-activities-tax-consultancy/" class="sidebar-link" name="group">Accounting, Bookkeeping And Auditing Activities; Tax Consultancy</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/libraries-archives-museums-and-other-cultural-activities/libraries-archives-museums-and-other-cultural-activities/" class="sidebar-heading clickable"><span>Libraries, archives, museums and other cultural activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/libraries-archives-museums-and-other-cultural-activities/libraries-archives-museums-and-other-cultural-activities/library-and-archives-activities/" class="sidebar-link" name="group">Library And Archives Activities</a></li>
					<li><a href="/libraries-archives-museums-and-other-cultural-activities/libraries-archives-museums-and-other-cultural-activities/museums-activities-and-operation-of-historical-sites-and-buildings/" class="sidebar-link" name="group">Museums Activities And Operation Of Historical Sites And Buildings</a></li>
					<li><a href="/libraries-archives-museums-and-other-cultural-activities/libraries-archives-museums-and-other-cultural-activities/botanical-and-zoological-gardens-and-nature-reserves-activities/" class="sidebar-link" name="group">Botanical And Zoological Gardens And Nature Reserves Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-basic-metals/manufacture-of-basic-metals/" class="sidebar-heading clickable"><span>Manufacture of basic metals</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-basic-metals/manufacture-of-basic-metals/casting-of-iron-and-steel/" class="sidebar-link" name="group">Casting Of Iron And Steel</a></li>
					<li><a href="/manufacture-of-basic-metals/manufacture-of-basic-metals/casting-of-non-ferrous-metals/" class="sidebar-link" name="group">Casting of non-ferrous metals</a></li>
					<li><a href="/manufacture-of-basic-metals/manufacture-of-basic-metals/manufacture-of-basic-iron-and-steel/" class="sidebar-link" name="group">Manufacture Of Basic Iron And Steel</a></li>
					<li><a href="/manufacture-of-basic-metals/manufacture-of-basic-metals/manufacture-of-basic-precious-and-other-non-ferrous-metals/" class="sidebar-link" name="group">Manufacture of basic precious and other non-ferrous metals</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-basic-pharmaceutical-products-and-pharmaceutical-preparations/manufacture-of-basic-pharmaceutical-products-and-pharmaceutical-preparations/" class="sidebar-heading clickable"><span>Manufacture of basic pharmaceutical products and pharmaceutical preparations</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-basic-pharmaceutical-products-and-pharmaceutical-preparations/manufacture-of-basic-pharmaceutical-products-and-pharmaceutical-preparations/manufacture-of-pharmaceuticals-medicinal-chemical-and-botanical-products/" class="sidebar-link" name="group">Manufacture Of Pharmaceuticals, Medicinal Chemical And Botanical Products</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-beverages/manufacture-of-beverages/" class="sidebar-heading clickable"><span>Manufacture of beverages</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-beverages/manufacture-of-beverages/distilling-rectifying-and-blending-of-spirits/" class="sidebar-link" name="group">Distilling, Rectifying And Blending Of Spirits</a></li>
					<li><a href="/manufacture-of-beverages/manufacture-of-beverages/manufacture-of-wines/" class="sidebar-link" name="group">Manufacture Of Wines</a></li>
					<li><a href="/manufacture-of-beverages/manufacture-of-beverages/manufacture-of-malt-liquors-and-malt/" class="sidebar-link" name="group">Manufacture Of Malt Liquors And Malt</a></li>
					<li><a href="/manufacture-of-beverages/manufacture-of-beverages/manufacture-of-soft-drinks-production-of-mineral-waters-and-other-bottled-waters/" class="sidebar-link" name="group">Manufacture Of Soft Drinks; Production Of Mineral Waters And Other Bottled Waters</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-chemicals-and-chemical-products/manufacture-of-chemicals-and-chemical-products/" class="sidebar-heading clickable"><span>Manufacture of chemicals and chemical products</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-chemicals-and-chemical-products/manufacture-of-chemicals-and-chemical-products/manufacture-of-basic-chemicals/" class="sidebar-link" name="group">Manufacture Of Basic Chemicals</a></li>
					<li><a href="/manufacture-of-chemicals-and-chemical-products/manufacture-of-chemicals-and-chemical-products/manufacture-of-fertilizers-and-nitrogen-compounds/" class="sidebar-link" name="group">Manufacture Of Fertilizers And Nitrogen Compounds</a></li>
					<li><a href="/manufacture-of-chemicals-and-chemical-products/manufacture-of-chemicals-and-chemical-products/manufacture-of-plastics-and-synthetic-rubber-in-primary-forms/" class="sidebar-link" name="group">Manufacture Of Plastics And Synthetic Rubber In Primary Forms</a></li>
					<li><a href="/manufacture-of-chemicals-and-chemical-products/manufacture-of-chemicals-and-chemical-products/manufacture-of-pesticides-and-other-agrochemical-products/" class="sidebar-link" name="group">Manufacture Of Pesticides And Other Agrochemical Products</a></li>
					<li><a href="/manufacture-of-chemicals-and-chemical-products/manufacture-of-chemicals-and-chemical-products/manufacture-of-paints-varnishes-and-similar-coatings-printing-ink-and-mastics/" class="sidebar-link" name="group">Manufacture Of Paints, Varnishes And Similar Coatings, Printing Ink And Mastics</a></li>
					<li><a href="/manufacture-of-chemicals-and-chemical-products/manufacture-of-chemicals-and-chemical-products/manufacture-of-soap-and-detergents-cleaning-and-polishing-preparations-perfumes-and-toilet-preparations/" class="sidebar-link" name="group">Manufacture Of Soap And Detergents, Cleaning And Polishing Preparations, Perfumes And Toilet Preparations</a></li>
					<li><a href="/manufacture-of-chemicals-and-chemical-products/manufacture-of-chemicals-and-chemical-products/manufacture-of-other-chemical-products-not-elsewhere-classified/" class="sidebar-link" name="group">Manufacture Of Other Chemical Products Not Elsewhere Classified</a></li>
					<li><a href="/manufacture-of-chemicals-and-chemical-products/manufacture-of-chemicals-and-chemical-products/made-fibres/" class="sidebar-link" name="group">Made Fibres</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-coke-and-refined-petroleum-products/manufacture-of-coke-and-refined-petroleum-products/" class="sidebar-heading clickable"><span>Manufacture of coke and refined petroleum products</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-coke-and-refined-petroleum-products/manufacture-of-coke-and-refined-petroleum-products/manufacture-of-coke-oven-products/" class="sidebar-link" name="group">Manufacture Of Coke Oven Products</a></li>
					<li><a href="/manufacture-of-coke-and-refined-petroleum-products/manufacture-of-coke-and-refined-petroleum-products/manufacture-of-refined-petroleum-products/" class="sidebar-link" name="group">Manufacture Of Refined Petroleum Products</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-computer-electronic-and-optical-products/manufacture-of-computer-electronic-and-optical-products/" class="sidebar-heading clickable"><span>Manufacture of computer, electronic and optical products</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-computer-electronic-and-optical-products/manufacture-of-computer-electronic-and-optical-products/manufacture-of-measuring-testing-navigating-and-control-equipment/" class="sidebar-link" name="group">Manufacture Of Measuring, Testing, Navigating And Control Equipment</a></li>
					<li><a href="/manufacture-of-computer-electronic-and-optical-products/manufacture-of-computer-electronic-and-optical-products/manufacture-of-watches-and-clocks/" class="sidebar-link" name="group">Manufacture Of Watches And Clocks</a></li>
					<li><a href="/manufacture-of-computer-electronic-and-optical-products/manufacture-of-computer-electronic-and-optical-products/manufacture-of-electronic-components-and-boards/" class="sidebar-link" name="group">Manufacture Of Electronic Components And Boards</a></li>
					<li><a href="/manufacture-of-computer-electronic-and-optical-products/manufacture-of-computer-electronic-and-optical-products/manufacture-of-computers-and-peripheral-equipment/" class="sidebar-link" name="group">Manufacture Of Computers And Peripheral Equipment</a></li>
					<li><a href="/manufacture-of-computer-electronic-and-optical-products/manufacture-of-computer-electronic-and-optical-products/manufacture-of-communication-equipment/" class="sidebar-link" name="group">Manufacture Of Communication Equipment</a></li>
					<li><a href="/manufacture-of-computer-electronic-and-optical-products/manufacture-of-computer-electronic-and-optical-products/manufacture-of-consumer-electronics/" class="sidebar-link" name="group">Manufacture Of Consumer Electronics</a></li>
					<li><a href="/manufacture-of-computer-electronic-and-optical-products/manufacture-of-computer-electronic-and-optical-products/manufacture-of-irradiation-electromedical-and-electrotherapeutic-equipment/" class="sidebar-link" name="group">Manufacture Of Irradiation, Electromedical And Electrotherapeutic Equipment</a></li>
					<li><a href="/manufacture-of-computer-electronic-and-optical-products/manufacture-of-computer-electronic-and-optical-products/manufacture-of-optical-instruments-and-photographic-equipment/" class="sidebar-link" name="group">Manufacture Of Optical Instruments And Photographic Equipment</a></li>
					<li><a href="/manufacture-of-computer-electronic-and-optical-products/manufacture-of-computer-electronic-and-optical-products/manufacture-of-magnetic-and-optical-media/" class="sidebar-link" name="group">Manufacture Of Magnetic And Optical Media</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-electrical-equipment/manufacture-of-electrical-equipment/" class="sidebar-heading clickable"><span>Manufacture of electrical equipment</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-electrical-equipment/manufacture-of-electrical-equipment/manufacture-of-other-electronic-and-electric-wires-and-cables/" class="sidebar-link" name="group">Manufacture Of Other Electronic And Electric Wires And Cables</a></li>
					<li><a href="/manufacture-of-electrical-equipment/manufacture-of-electrical-equipment/manufacture-of-wiring-devices/" class="sidebar-link" name="group">Manufacture Of Wiring Devices</a></li>
					<li><a href="/manufacture-of-electrical-equipment/manufacture-of-electrical-equipment/manufacture-of-electric-motors-generators-transformers-and-electricity-distribution-and-control-apparatus/" class="sidebar-link" name="group">Manufacture Of Electric Motors, Generators, Transformers And Electricity Distribution And Control Apparatus</a></li>
					<li><a href="/manufacture-of-electrical-equipment/manufacture-of-electrical-equipment/manufacture-of-batteries-and-accumulators/" class="sidebar-link" name="group">Manufacture Of Batteries And Accumulators</a></li>
					<li><a href="/manufacture-of-electrical-equipment/manufacture-of-electrical-equipment/manufacture-of-electric-lighting-equipment/" class="sidebar-link" name="group">Manufacture Of Electric Lighting Equipment</a></li>
					<li><a href="/manufacture-of-electrical-equipment/manufacture-of-electrical-equipment/manufacture-of-domestic-appliances/" class="sidebar-link" name="group">Manufacture Of Domestic Appliances</a></li>
					<li><a href="/manufacture-of-electrical-equipment/manufacture-of-electrical-equipment/manufacture-of-other-electrical-equipment/" class="sidebar-link" name="group">Manufacture Of Other Electrical Equipment</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/" class="sidebar-heading clickable"><span>Manufacture of fabricated metal products, except machinery and equipment</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-structural-metal-products/" class="sidebar-link" name="group">Manufacture Of Structural Metal Products</a></li>
					<li><a href="/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-tanks-reservoirs-and-containers-of-metal/" class="sidebar-link" name="group">Manufacture Of Tanks, Reservoirs And Containers Of Metal</a></li>
					<li><a href="/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-steam-generators-except-central-heating-hot-water-boilers/" class="sidebar-link" name="group">Manufacture Of Steam Generators, Except Central Heating Hot Water Boilers</a></li>
					<li><a href="/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/forging-pressing-stamping-and-roll-forming-of-metal-powder-metallurgy/" class="sidebar-link" name="group">Forging, pressing, stamping and roll-forming of metal; powder metallurgy</a></li>
					<li><a href="/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/treatment-and-coating-of-metals-machining/" class="sidebar-link" name="group">Treatment And Coating Of Metals; Machining</a></li>
					<li><a href="/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-cutlery-hand-tools-and-general-hardware/" class="sidebar-link" name="group">Manufacture Of Cutlery, Hand Tools And General Hardware</a></li>
					<li><a href="/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-other-fabricated-metal-products-not-elsewhere-classified/" class="sidebar-link" name="group">Manufacture Of Other Fabricated Metal Products Not Elsewhere Classified</a></li>
					<li><a href="/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-fabricated-metal-products-except-machinery-and-equipment/manufacture-of-weapons-and-ammunition/" class="sidebar-link" name="group">Manufacture Of Weapons And Ammunition</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-food-products/manufacture-of-food-products/" class="sidebar-heading clickable"><span>Manufacture of food products</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/processing-and-preserving-of-meat/" class="sidebar-link" name="group">Processing And Preserving Of Meat</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/processing-and-preserving-of-fish-crustaceans-and-molluscs/" class="sidebar-link" name="group">Processing And Preserving Of Fish, Crustaceans And Molluscs</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/processing-and-preserving-of-fruit-and-vegetables/" class="sidebar-link" name="group">Processing And Preserving Of Fruit And Vegetables</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/manufacture-of-vegetable-and-animal-oils-and-fats/" class="sidebar-link" name="group">Manufacture Of Vegetable And Animal Oils And Fats</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/manufacture-of-dairy-products/" class="sidebar-link" name="group">Manufacture Of Dairy Products</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/manufacture-of-grain-mill-products/" class="sidebar-link" name="group">Manufacture Of Grain Mill Products</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/manufacture-of-starches-and-starch-products/" class="sidebar-link" name="group">Manufacture Of Starches And Starch Products</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/manufacture-of-bakery-products/" class="sidebar-link" name="group">Manufacture Of Bakery Products</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/manufacture-of-sugar/" class="sidebar-link" name="group">Manufacture Of Sugar</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/manufacture-of-cocoa-chocolate-and-sugar-confectionery/" class="sidebar-link" name="group">Manufacture Of Cocoa, Chocolate And Sugar Confectionery</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/manufacture-of-macaroni-noodles-couscous-and-similar-farinaceous-products/" class="sidebar-link" name="group">Manufacture Of Macaroni, Noodles, Couscous And Similar Farinaceous Products</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/manufacture-of-prepared-meals-and-dishes/" class="sidebar-link" name="group">Manufacture Of Prepared Meals And Dishes</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/manufacture-of-other-food-products-not-elsewhere-classified/" class="sidebar-link" name="group">Manufacture Of Other Food Products Not Elsewhere Classified</a></li>
					<li><a href="/manufacture-of-food-products/manufacture-of-food-products/manufacture-of-prepared-animal-feeds/" class="sidebar-link" name="group">Manufacture Of Prepared Animal Feeds</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-furniture/manufacture-of-furniture/" class="sidebar-heading clickable"><span>Manufacture of furniture</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-furniture/manufacture-of-furniture/manufacture-of-furniture/" class="sidebar-link" name="group">Manufacture Of Furniture</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-leather-and-related-products/manufacture-of-leather-and-related-products/" class="sidebar-heading clickable"><span>Manufacture of leather and related products</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-leather-and-related-products/manufacture-of-leather-and-related-products/tanning-and-dressing-of-leather-dressing-and-dyeing-of-fur/" class="sidebar-link" name="group">Tanning And Dressing Of Leather; Dressing And Dyeing Of Fur</a></li>
					<li><a href="/manufacture-of-leather-and-related-products/manufacture-of-leather-and-related-products/manufacture-of-luggage-handbags-and-the-like-saddlery-and-harness/" class="sidebar-link" name="group">Manufacture Of Luggage, Handbags And The Like, Saddlery And Harness</a></li>
					<li><a href="/manufacture-of-leather-and-related-products/manufacture-of-leather-and-related-products/manufacture-of-footwear/" class="sidebar-link" name="group">Manufacture Of Footwear</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/" class="sidebar-heading clickable"><span>Manufacture of machinery and equipment, not elsewhere classified</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-engines-and-turbines-except-aircraft-vehicle-and-cycle-engines/" class="sidebar-link" name="group">Manufacture Of Engines And Turbines, Except Aircraft, Vehicle And Cycle Engines</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-fluid-power-equipment/" class="sidebar-link" name="group">Manufacture Of Fluid Power Equipment</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-other-pumps-compressors-taps-and-valves/" class="sidebar-link" name="group">Manufacture Of Other Pumps, Compressors, Taps And Valves</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-bearings-gears-gearing-and-driving-elements/" class="sidebar-link" name="group">Manufacture Of Bearings, Gears, Gearing And Driving Elements</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-ovens-furnaces-and-furnace-burners/" class="sidebar-link" name="group">Manufacture Of Ovens, Furnaces And Furnace Burners</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-lifting-and-handling-equipment/" class="sidebar-link" name="group">Manufacture Of Lifting And Handling Equipment</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-office-machinery-and-equipment-except-computers-and-peripheral-equipment/" class="sidebar-link" name="group">Manufacture Of Office Machinery And Equipment (Except Computers And Peripheral Equipment)</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-power-driven-hand-tools/" class="sidebar-link" name="group">Manufacture of power-driven hand tools</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-other-general-purpose-machinery/" class="sidebar-link" name="group">Manufacture of other general-purpose machinery</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-agricultural-and-forestry-machinery/" class="sidebar-link" name="group">Manufacture Of Agricultural And Forestry Machinery</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-metal-forming-machinery-and-machine-tools/" class="sidebar-link" name="group">Manufacture of metal-forming machinery and machine tools</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-for-metallurgy/" class="sidebar-link" name="group">Manufacture Of Machinery For Metallurgy</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-for-mining-quarrying-and-construction/" class="sidebar-link" name="group">Manufacture Of Machinery For Mining, Quarrying And Construction</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-for-food-beverage-and-tobacco-processing/" class="sidebar-link" name="group">Manufacture Of Machinery For Food, Beverage And Tobacco Processing</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-for-textile-apparel-and-leather-production/" class="sidebar-link" name="group">Manufacture Of Machinery For Textile, Apparel And Leather Production</a></li>
					<li><a href="/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-machinery-and-equipment-not-elsewhere-classified/manufacture-of-other-special-purpose-machinery/" class="sidebar-link" name="group">Manufacture of other special-purpose machinery</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-motor-vehicles-trailers-and-semi-trailers/manufacture-of-motor-vehicles-trailers-and-semi-trailers/" class="sidebar-heading clickable"><span>Manufacture of motor vehicles, trailers and semi-trailers</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-motor-vehicles-trailers-and-semi-trailers/manufacture-of-motor-vehicles-trailers-and-semi-trailers/manufacture-of-motor-vehicles/" class="sidebar-link" name="group">Manufacture Of Motor Vehicles</a></li>
					<li><a href="/manufacture-of-motor-vehicles-trailers-and-semi-trailers/manufacture-of-motor-vehicles-trailers-and-semi-trailers/manufacture-of-bodies-coachwork-for-motor-vehicles-manufacture-of-trailers-and-semi-trailers/" class="sidebar-link" name="group">Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers</a></li>
					<li><a href="/manufacture-of-motor-vehicles-trailers-and-semi-trailers/manufacture-of-motor-vehicles-trailers-and-semi-trailers/manufacture-of-parts-and-accessories-for-motor-vehicles/" class="sidebar-link" name="group">Manufacture Of Parts And Accessories For Motor Vehicles</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-other-non-metallic-mineral-products/manufacture-of-other-non-metallic-mineral-products/" class="sidebar-heading clickable"><span>Manufacture of other non-metallic mineral products</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-other-non-metallic-mineral-products/manufacture-of-other-non-metallic-mineral-products/manufacture-of-refractory-products/" class="sidebar-link" name="group">Manufacture Of Refractory Products</a></li>
					<li><a href="/manufacture-of-other-non-metallic-mineral-products/manufacture-of-other-non-metallic-mineral-products/manufacture-of-clay-building-materials/" class="sidebar-link" name="group">Manufacture Of Clay Building Materials</a></li>
					<li><a href="/manufacture-of-other-non-metallic-mineral-products/manufacture-of-other-non-metallic-mineral-products/manufacture-of-other-porcelain-and-ceramic-products/" class="sidebar-link" name="group">Manufacture Of Other Porcelain And Ceramic Products</a></li>
					<li><a href="/manufacture-of-other-non-metallic-mineral-products/manufacture-of-other-non-metallic-mineral-products/manufacture-of-cement-lime-and-plaster/" class="sidebar-link" name="group">Manufacture Of Cement, Lime And Plaster</a></li>
					<li><a href="/manufacture-of-other-non-metallic-mineral-products/manufacture-of-other-non-metallic-mineral-products/manufacture-of-articles-of-concrete-cement-and-plaster/" class="sidebar-link" name="group">Manufacture Of Articles Of Concrete, Cement And Plaster</a></li>
					<li><a href="/manufacture-of-other-non-metallic-mineral-products/manufacture-of-other-non-metallic-mineral-products/cutting-shaping-and-finishing-of-stone/" class="sidebar-link" name="group">Cutting, Shaping And Finishing Of Stone</a></li>
					<li><a href="/manufacture-of-other-non-metallic-mineral-products/manufacture-of-other-non-metallic-mineral-products/manufacture-of-other-non-metallic-mineral-products-not-elsewhere-classified/" class="sidebar-link" name="group">Manufacture of other non-metallic mineral products, not elsewhere classified</a></li>
					<li><a href="/manufacture-of-other-non-metallic-mineral-products/manufacture-of-other-non-metallic-mineral-products/manufacture-of-glass-and-glass-products/" class="sidebar-link" name="group">Manufacture Of Glass And Glass Products</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-other-transport-equipment/manufacture-of-other-transport-equipment/" class="sidebar-heading clickable"><span>Manufacture of other transport equipment</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-other-transport-equipment/manufacture-of-other-transport-equipment/building-of-ships-and-floating-structures/" class="sidebar-link" name="group">Building Of Ships And Floating Structures</a></li>
					<li><a href="/manufacture-of-other-transport-equipment/manufacture-of-other-transport-equipment/building-of-pleasure-and-sporting-boats/" class="sidebar-link" name="group">Building Of Pleasure And Sporting Boats</a></li>
					<li><a href="/manufacture-of-other-transport-equipment/manufacture-of-other-transport-equipment/manufacture-of-motorcycles/" class="sidebar-link" name="group">Manufacture Of Motorcycles</a></li>
					<li><a href="/manufacture-of-other-transport-equipment/manufacture-of-other-transport-equipment/manufacture-of-bicycles-and-invalid-carriages/" class="sidebar-link" name="group">Manufacture Of Bicycles And Invalid Carriages</a></li>
					<li><a href="/manufacture-of-other-transport-equipment/manufacture-of-other-transport-equipment/manufacture-of-other-transport-equipment-not-elsewhere-classified/" class="sidebar-link" name="group">Manufacture of other transport equipment, not elsewhere classified</a></li>
					<li><a href="/manufacture-of-other-transport-equipment/manufacture-of-other-transport-equipment/manufacture-of-railway-locomotives-and-rolling-stock/" class="sidebar-link" name="group">Manufacture Of Railway Locomotives And Rolling Stock</a></li>
					<li><a href="/manufacture-of-other-transport-equipment/manufacture-of-other-transport-equipment/manufacture-of-air-and-spacecraft-and-related-machinery/" class="sidebar-link" name="group">Manufacture Of Air And Spacecraft And Related Machinery</a></li>
					<li><a href="/manufacture-of-other-transport-equipment/manufacture-of-other-transport-equipment/manufacture-of-military-fighting-vehicles/" class="sidebar-link" name="group">Manufacture Of Military Fighting Vehicles</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-paper-and-paper-products/manufacture-of-paper-and-paper-products/" class="sidebar-heading clickable"><span>Manufacture of paper and paper products</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-paper-and-paper-products/manufacture-of-paper-and-paper-products/manufacture-of-pulp-paper-and-paperboard/" class="sidebar-link" name="group">Manufacture Of Pulp, Paper And Paperboard</a></li>
					<li><a href="/manufacture-of-paper-and-paper-products/manufacture-of-paper-and-paper-products/manufacture-of-corrugated-paper-and-paperboard-and-of-containers-of-paper-and-paperboard/" class="sidebar-link" name="group">Manufacture Of Corrugated Paper And Paperboard And Of Containers Of Paper And Paperboard</a></li>
					<li><a href="/manufacture-of-paper-and-paper-products/manufacture-of-paper-and-paper-products/manufacture-of-other-articles-of-paper-and-paperboard/" class="sidebar-link" name="group">Manufacture Of Other Articles Of Paper And Paperboard</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-rubber-and-plastics-products/manufacture-of-rubber-and-plastics-products/" class="sidebar-heading clickable"><span>Manufacture of rubber and plastics products</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-rubber-and-plastics-products/manufacture-of-rubber-and-plastics-products/manufacture-of-rubber-tyres-and-tubes-retreading-and-rebuilding-of-rubber-tyres/" class="sidebar-link" name="group">Manufacture Of Rubber Tyres And Tubes; Retreading And Rebuilding Of Rubber Tyres</a></li>
					<li><a href="/manufacture-of-rubber-and-plastics-products/manufacture-of-rubber-and-plastics-products/manufacture-of-other-rubber-products/" class="sidebar-link" name="group">Manufacture Of Other Rubber Products</a></li>
					<li><a href="/manufacture-of-rubber-and-plastics-products/manufacture-of-rubber-and-plastics-products/manufacture-of-plastics-products/" class="sidebar-link" name="group">Manufacture Of Plastics Products</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-textiles/manufacture-of-textiles/" class="sidebar-heading clickable"><span>Manufacture of textiles</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-textiles/manufacture-of-textiles/preparation-and-spinning-of-textile-fibres/" class="sidebar-link" name="group">Preparation And Spinning Of Textile Fibres</a></li>
					<li><a href="/manufacture-of-textiles/manufacture-of-textiles/weaving-of-textiles/" class="sidebar-link" name="group">Weaving Of Textiles</a></li>
					<li><a href="/manufacture-of-textiles/manufacture-of-textiles/finishing-of-textiles/" class="sidebar-link" name="group">Finishing Of Textiles</a></li>
					<li><a href="/manufacture-of-textiles/manufacture-of-textiles/manufacture-of-knitted-and-crocheted-fabrics/" class="sidebar-link" name="group">Manufacture Of Knitted And Crocheted Fabrics</a></li>
					<li><a href="/manufacture-of-textiles/manufacture-of-textiles/manufacture-of-made-up-textile-articles-except-apparel/" class="sidebar-link" name="group">Manufacture of made-up textile articles, except apparel</a></li>
					<li><a href="/manufacture-of-textiles/manufacture-of-textiles/manufacture-of-carpets-and-rugs/" class="sidebar-link" name="group">Manufacture Of Carpets And Rugs</a></li>
					<li><a href="/manufacture-of-textiles/manufacture-of-textiles/manufacture-of-cordage-rope-twine-and-netting/" class="sidebar-link" name="group">Manufacture Of Cordage, Rope, Twine And Netting</a></li>
					<li><a href="/manufacture-of-textiles/manufacture-of-textiles/manufacture-of-other-textiles-not-elsewhere-classified/" class="sidebar-link" name="group">Manufacture of other textiles, not elsewhere classified</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-tobacco-products/manufacture-of-tobacco-products/" class="sidebar-heading clickable"><span>Manufacture of tobacco products</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-tobacco-products/manufacture-of-tobacco-products/manufacture-of-tobacco-products/" class="sidebar-link" name="group">Manufacture Of Tobacco Products</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-wearing-apparel/manufacture-of-wearing-apparel/" class="sidebar-heading clickable"><span>Manufacture of wearing apparel</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-wearing-apparel/manufacture-of-wearing-apparel/manufacture-of-wearing-apparel-except-fur-apparel/" class="sidebar-link" name="group">Manufacture Of Wearing Apparel, Except Fur Apparel</a></li>
					<li><a href="/manufacture-of-wearing-apparel/manufacture-of-wearing-apparel/manufacture-of-articles-of-fur/" class="sidebar-link" name="group">Manufacture Of Articles Of Fur</a></li>
					<li><a href="/manufacture-of-wearing-apparel/manufacture-of-wearing-apparel/manufacture-of-knitted-and-crocheted-apparel/" class="sidebar-link" name="group">Manufacture Of Knitted And Crocheted Apparel</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/manufacture-of-wood-and-of-products-of-wood-and-cork-except-furniture-manufacture-of-articles-of-straw-and-plaiting-materials/manufacture-of-wood-and-of-products-of-wood-and-cork-except-furniture-manufacture-of-articles-of-straw-and-plaiting-materials/" class="sidebar-heading clickable"><span>Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/manufacture-of-wood-and-of-products-of-wood-and-cork-except-furniture-manufacture-of-articles-of-straw-and-plaiting-materials/manufacture-of-wood-and-of-products-of-wood-and-cork-except-furniture-manufacture-of-articles-of-straw-and-plaiting-materials/manufacture-of-veneer-sheets-and-wood-based-panels/" class="sidebar-link" name="group">Manufacture of veneer sheets and wood-based panels</a></li>
					<li><a href="/manufacture-of-wood-and-of-products-of-wood-and-cork-except-furniture-manufacture-of-articles-of-straw-and-plaiting-materials/manufacture-of-wood-and-of-products-of-wood-and-cork-except-furniture-manufacture-of-articles-of-straw-and-plaiting-materials/manufacture-of-other-products-of-wood-manufacture-of-articles-of-cork-straw-and-plaiting-materials/" class="sidebar-link" name="group">Manufacture Of Other Products Of Wood; Manufacture Of Articles Of Cork, Straw And Plaiting Materials</a></li>
					<li><a href="/manufacture-of-wood-and-of-products-of-wood-and-cork-except-furniture-manufacture-of-articles-of-straw-and-plaiting-materials/manufacture-of-wood-and-of-products-of-wood-and-cork-except-furniture-manufacture-of-articles-of-straw-and-plaiting-materials/manufacture-of-builders-carpentry-and-joinery/" class="sidebar-link" name="group">Manufacture Of Builders' Carpentry And Joinery</a></li>
					<li><a href="/manufacture-of-wood-and-of-products-of-wood-and-cork-except-furniture-manufacture-of-articles-of-straw-and-plaiting-materials/manufacture-of-wood-and-of-products-of-wood-and-cork-except-furniture-manufacture-of-articles-of-straw-and-plaiting-materials/manufacture-of-wooden-containers/" class="sidebar-link" name="group">Manufacture Of Wooden Containers</a></li>
					<li><a href="/manufacture-of-wood-and-of-products-of-wood-and-cork-except-furniture-manufacture-of-articles-of-straw-and-plaiting-materials/manufacture-of-wood-and-of-products-of-wood-and-cork-except-furniture-manufacture-of-articles-of-straw-and-plaiting-materials/sawmilling-and-planing-of-wood/" class="sidebar-link" name="group">Sawmilling And Planing Of Wood</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/mining-of-coal-and-lignite/mining-of-coal-and-lignite/" class="sidebar-heading clickable"><span>Mining of coal and lignite</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/mining-of-coal-and-lignite/mining-of-coal-and-lignite/mining-of-hard-coal/" class="sidebar-link" name="group">Mining Of Hard Coal</a></li>
					<li><a href="/mining-of-coal-and-lignite/mining-of-coal-and-lignite/mining-of-lignite/" class="sidebar-link" name="group">Mining Of Lignite</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/mining-of-metal-ores/mining-of-metal-ores/" class="sidebar-heading clickable"><span>Mining of metal ores</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/mining-of-metal-ores/mining-of-metal-ores/mining-of-iron-ores/" class="sidebar-link" name="group">Mining Of Iron Ores</a></li>
					<li><a href="/mining-of-metal-ores/mining-of-metal-ores/mining-of-other-non-ferrous-metal-ores/" class="sidebar-link" name="group">Mining of other non-ferrous metal ores</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/mining-support-service-activities/mining-support-service-activities/" class="sidebar-heading clickable"><span>Mining support service activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/mining-support-service-activities/mining-support-service-activities/support-activities-for-petroleum-and-natural-gas-extraction/" class="sidebar-link" name="group">Support Activities For Petroleum And Natural Gas Extraction</a></li>
					<li><a href="/mining-support-service-activities/mining-support-service-activities/support-activities-for-other-mining-and-quarrying/" class="sidebar-link" name="group">Support Activities For Other Mining And Quarrying</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/motion-picture-video-and-television-programme-production-sound-recording-and-music-publishing-activities/motion-picture-video-and-television-programme-production-sound-recording-and-music-publishing-activities/" class="sidebar-heading clickable"><span>Motion picture, video and television programme production, sound recording and music publishing activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/motion-picture-video-and-television-programme-production-sound-recording-and-music-publishing-activities/motion-picture-video-and-television-programme-production-sound-recording-and-music-publishing-activities/motion-picture-video-and-television-programme-production-activities/" class="sidebar-link" name="group">Motion Picture, Video And Television Programme Production Activities</a></li>
					<li><a href="/motion-picture-video-and-television-programme-production-sound-recording-and-music-publishing-activities/motion-picture-video-and-television-programme-production-sound-recording-and-music-publishing-activities/motion-picture-video-and-television-programme-post-production-activities/" class="sidebar-link" name="group">Motion picture, video and television programme post-production activities</a></li>
					<li><a href="/motion-picture-video-and-television-programme-production-sound-recording-and-music-publishing-activities/motion-picture-video-and-television-programme-production-sound-recording-and-music-publishing-activities/motion-picture-video-and-television-programme-distribution-activities/" class="sidebar-link" name="group">Motion Picture, Video And Television Programme Distribution Activities</a></li>
					<li><a href="/motion-picture-video-and-television-programme-production-sound-recording-and-music-publishing-activities/motion-picture-video-and-television-programme-production-sound-recording-and-music-publishing-activities/motion-picture-projection-activities/" class="sidebar-link" name="group">Motion Picture Projection Activities</a></li>
					<li><a href="/motion-picture-video-and-television-programme-production-sound-recording-and-music-publishing-activities/motion-picture-video-and-television-programme-production-sound-recording-and-music-publishing-activities/sound-recording-and-music-publishing-activities/" class="sidebar-link" name="group">Sound Recording And Music Publishing Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/office-administrative-office-support-and-other-business-support-activities/office-administrative-office-support-and-other-business-support-activities/" class="sidebar-heading clickable"><span>Office administrative, office support and other business support activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/office-administrative-office-support-and-other-business-support-activities/office-administrative-office-support-and-other-business-support-activities/combined-office-administrative-service-activities/" class="sidebar-link" name="group">Combined Office Administrative Service Activities</a></li>
					<li><a href="/office-administrative-office-support-and-other-business-support-activities/office-administrative-office-support-and-other-business-support-activities/photocopying-document-preparation-and-other-specialized-office-support-activities/" class="sidebar-link" name="group">Photocopying, Document Preparation And Other Specialized Office Support Activities</a></li>
					<li><a href="/office-administrative-office-support-and-other-business-support-activities/office-administrative-office-support-and-other-business-support-activities/activities-of-call-centres/" class="sidebar-link" name="group">Activities Of Call Centres</a></li>
					<li><a href="/office-administrative-office-support-and-other-business-support-activities/office-administrative-office-support-and-other-business-support-activities/organization-of-conventions-and-trade-shows/" class="sidebar-link" name="group">Organization Of Conventions And Trade Shows</a></li>
					<li><a href="/office-administrative-office-support-and-other-business-support-activities/office-administrative-office-support-and-other-business-support-activities/activities-of-collection-agencies-and-credit-bureaus/" class="sidebar-link" name="group">Activities Of Collection Agencies And Credit Bureaus</a></li>
					<li><a href="/office-administrative-office-support-and-other-business-support-activities/office-administrative-office-support-and-other-business-support-activities/packaging-activities/" class="sidebar-link" name="group">Packaging Activities</a></li>
					<li><a href="/office-administrative-office-support-and-other-business-support-activities/office-administrative-office-support-and-other-business-support-activities/other-business-support-service-activities-not-elsewhere-classified/" class="sidebar-link" name="group">Other Business Support Service Activities Not Elsewhere Classified</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/other-manufacturing/other-manufacturing/" class="sidebar-heading clickable"><span>Other manufacturing</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/other-manufacturing/other-manufacturing/manufacture-of-jewellery-and-related-articles/" class="sidebar-link" name="group">Manufacture Of Jewellery And Related Articles</a></li>
					<li><a href="/other-manufacturing/other-manufacturing/manufacture-of-imitation-jewellery-and-related-articles/" class="sidebar-link" name="group">Manufacture Of Imitation Jewellery And Related Articles</a></li>
					<li><a href="/other-manufacturing/other-manufacturing/manufacture-of-musical-instruments/" class="sidebar-link" name="group">Manufacture Of Musical Instruments</a></li>
					<li><a href="/other-manufacturing/other-manufacturing/manufacture-of-sports-goods/" class="sidebar-link" name="group">Manufacture Of Sports Goods</a></li>
					<li><a href="/other-manufacturing/other-manufacturing/manufacture-of-games-and-toys/" class="sidebar-link" name="group">Manufacture Of Games And Toys</a></li>
					<li><a href="/other-manufacturing/other-manufacturing/manufacture-of-medical-and-dental-instruments-and-supplies/" class="sidebar-link" name="group">Manufacture Of Medical And Dental Instruments And Supplies</a></li>
					<li><a href="/other-manufacturing/other-manufacturing/other-manufacturing-not-elsewhere-classified/" class="sidebar-link" name="group">Other Manufacturing Not Elsewhere Classified</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/other-mining-and-quarrying/other-mining-and-quarrying/" class="sidebar-heading clickable"><span>Other mining and quarrying</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/other-mining-and-quarrying/other-mining-and-quarrying/quarrying-of-stone-sand-and-clay/" class="sidebar-link" name="group">Quarrying Of Stone, Sand And Clay</a></li>
					<li><a href="/other-mining-and-quarrying/other-mining-and-quarrying/mining-of-chemical-and-fertilizer-minerals/" class="sidebar-link" name="group">Mining Of Chemical And Fertilizer Minerals</a></li>
					<li><a href="/other-mining-and-quarrying/other-mining-and-quarrying/extraction-of-peat/" class="sidebar-link" name="group">Extraction Of Peat</a></li>
					<li><a href="/other-mining-and-quarrying/other-mining-and-quarrying/extraction-of-salt/" class="sidebar-link" name="group">Extraction Of Salt</a></li>
					<li><a href="/other-mining-and-quarrying/other-mining-and-quarrying/other-mining-and-quarrying-not-elsewhere-classified/" class="sidebar-link" name="group">Other mining and quarrying, not elsewhere classified</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/other-personal-service-activities/other-personal-service-activities/" class="sidebar-heading clickable"><span>Other personal service activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/other-personal-service-activities/other-personal-service-activities/other-personal-service-activities-not-elsewhere-classified/" class="sidebar-link" name="group">Other Personal Service Activities Not Elsewhere Classified</a></li>
					<li><a href="/other-personal-service-activities/other-personal-service-activities/funeral-and-related-activities/" class="sidebar-link" name="group">Funeral And Related Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/other-professional-scientific-and-technical-activities/other-professional-scientific-and-technical-activities/" class="sidebar-heading clickable"><span>Other professional, scientific and technical activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/other-professional-scientific-and-technical-activities/other-professional-scientific-and-technical-activities/specialized-design-activities/" class="sidebar-link" name="group">Specialized Design Activities</a></li>
					<li><a href="/other-professional-scientific-and-technical-activities/other-professional-scientific-and-technical-activities/photographic-activities/" class="sidebar-link" name="group">Photographic Activities</a></li>
					<li><a href="/other-professional-scientific-and-technical-activities/other-professional-scientific-and-technical-activities/other-professional-scientific-and-technical-activities-not-elsewhere-classified/" class="sidebar-link" name="group">Other Professional, Scientific And Technical Activities Not Elsewhere Classified</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/postal-and-courier-activities/postal-and-courier-activities/" class="sidebar-heading clickable"><span>Postal and courier activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/postal-and-courier-activities/postal-and-courier-activities/postal-activities/" class="sidebar-link" name="group">Postal Activities</a></li>
					<li><a href="/postal-and-courier-activities/postal-and-courier-activities/courier-activities/" class="sidebar-link" name="group">Courier Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/printing-and-reproduction-of-recorded-media/printing-and-reproduction-of-recorded-media/" class="sidebar-heading clickable"><span>Printing and reproduction of recorded media</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/printing-and-reproduction-of-recorded-media/printing-and-reproduction-of-recorded-media/printing/" class="sidebar-link" name="group">Printing</a></li>
					<li><a href="/printing-and-reproduction-of-recorded-media/printing-and-reproduction-of-recorded-media/service-activities-related-to-printing/" class="sidebar-link" name="group">Service Activities Related To Printing</a></li>
					<li><a href="/printing-and-reproduction-of-recorded-media/printing-and-reproduction-of-recorded-media/reproduction-of-recorded-media/" class="sidebar-link" name="group">Reproduction Of Recorded Media</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/programming-and-broadcasting-activities/programming-and-broadcasting-activities/" class="sidebar-heading clickable"><span>Programming and broadcasting activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/programming-and-broadcasting-activities/programming-and-broadcasting-activities/radio-broadcasting/" class="sidebar-link" name="group">Radio Broadcasting</a></li>
					<li><a href="/programming-and-broadcasting-activities/programming-and-broadcasting-activities/television-programming-and-broadcasting-activities/" class="sidebar-link" name="group">Television Programming And Broadcasting Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/public-administration-and-defence-compulsory-social-security/public-administration-and-defence-compulsory-social-security/" class="sidebar-heading clickable"><span>Public administration and defence; compulsory social security</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/public-administration-and-defence-compulsory-social-security/public-administration-and-defence-compulsory-social-security/general-public-administration-activities/" class="sidebar-link" name="group">General Public Administration Activities</a></li>
					<li><a href="/public-administration-and-defence-compulsory-social-security/public-administration-and-defence-compulsory-social-security/regulation-of-the-activities-of-providing-health-care-education-cultural-services-and-other-social-services-excluding-social-security/" class="sidebar-link" name="group">Regulation Of The Activities Of Providing Health Care, Education, Cultural Services And Other Social Services, Excluding Social Security</a></li>
					<li><a href="/public-administration-and-defence-compulsory-social-security/public-administration-and-defence-compulsory-social-security/regulation-of-and-contribution-to-more-efficient-operation-of-businesses/" class="sidebar-link" name="group">Regulation Of And Contribution To More Efficient Operation Of Businesses</a></li>
					<li><a href="/public-administration-and-defence-compulsory-social-security/public-administration-and-defence-compulsory-social-security/foreign-affairs/" class="sidebar-link" name="group">Foreign Affairs</a></li>
					<li><a href="/public-administration-and-defence-compulsory-social-security/public-administration-and-defence-compulsory-social-security/defence-activities/" class="sidebar-link" name="group">Defence Activities</a></li>
					<li><a href="/public-administration-and-defence-compulsory-social-security/public-administration-and-defence-compulsory-social-security/public-order-and-safety-activities/" class="sidebar-link" name="group">Public Order And Safety Activities</a></li>
					<li><a href="/public-administration-and-defence-compulsory-social-security/public-administration-and-defence-compulsory-social-security/compulsory-social-security-activities/" class="sidebar-link" name="group">Compulsory Social Security Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/publishing-activities/publishing-activities/" class="sidebar-heading clickable"><span>Publishing activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/publishing-activities/publishing-activities/book-publishing/" class="sidebar-link" name="group">Book Publishing</a></li>
					<li><a href="/publishing-activities/publishing-activities/publishing-of-directories-and-mailing-lists/" class="sidebar-link" name="group">Publishing Of Directories And Mailing Lists</a></li>
					<li><a href="/publishing-activities/publishing-activities/publishing-of-newspapers-journals-and-periodicals/" class="sidebar-link" name="group">Publishing Of Newspapers, Journals And Periodicals</a></li>
					<li><a href="/publishing-activities/publishing-activities/other-publishing-activities/" class="sidebar-link" name="group">Other Publishing Activities</a></li>
					<li><a href="/publishing-activities/publishing-activities/software-publishing/" class="sidebar-link" name="group">Software Publishing</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/real-estate-activities/real-estate-activities/" class="sidebar-heading clickable"><span>Real estate activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/real-estate-activities/real-estate-activities/real-estate-activities-with-own-or-leased-property/" class="sidebar-link" name="group">Real Estate Activities With Own Or Leased Property</a></li>
					<li><a href="/real-estate-activities/real-estate-activities/real-estate-activities-on-a-fee-or-contract-basis/" class="sidebar-link" name="group">Real Estate Activities On A Fee Or Contract Basis</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/remediation-activities-and-other-waste-management-services/remediation-activities-and-other-waste-management-services/" class="sidebar-heading clickable"><span>Remediation activities and other waste management services</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/remediation-activities-and-other-waste-management-services/remediation-activities-and-other-waste-management-services/remediation-activities-and-other-waste-management-services/" class="sidebar-link" name="group">Remediation Activities And Other Waste Management Services</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/rental-and-leasing-activities/rental-and-leasing-activities/" class="sidebar-heading clickable"><span>Rental and leasing activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/rental-and-leasing-activities/rental-and-leasing-activities/renting-and-leasing-of-motor-vehicles/" class="sidebar-link" name="group">Renting And Leasing Of Motor Vehicles</a></li>
					<li><a href="/rental-and-leasing-activities/rental-and-leasing-activities/renting-and-leasing-of-recreational-and-sports-goods/" class="sidebar-link" name="group">Renting And Leasing Of Recreational And Sports Goods</a></li>
					<li><a href="/rental-and-leasing-activities/rental-and-leasing-activities/renting-of-video-tapes-and-disks/" class="sidebar-link" name="group">Renting Of Video Tapes And Disks</a></li>
					<li><a href="/rental-and-leasing-activities/rental-and-leasing-activities/renting-and-leasing-of-other-personal-and-household-goods/" class="sidebar-link" name="group">Renting And Leasing Of Other Personal And Household Goods</a></li>
					<li><a href="/rental-and-leasing-activities/rental-and-leasing-activities/renting-and-leasing-of-other-machinery-equipment-and-tangible-goods/" class="sidebar-link" name="group">Renting And Leasing Of Other Machinery, Equipment And Tangible Goods</a></li>
					<li><a href="/rental-and-leasing-activities/rental-and-leasing-activities/leasing-of-intellectual-property-and-similar-products-except-copyrighted-works/" class="sidebar-link" name="group">Leasing Of Intellectual Property And Similar Products, Except Copyrighted Works</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/repair-and-installation-of-machinery-and-equipment/repair-and-installation-of-machinery-and-equipment/" class="sidebar-heading clickable"><span>Repair and installation of machinery and equipment</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/repair-and-installation-of-machinery-and-equipment/repair-and-installation-of-machinery-and-equipment/repair-of-fabricated-metal-products/" class="sidebar-link" name="group">Repair Of Fabricated Metal Products</a></li>
					<li><a href="/repair-and-installation-of-machinery-and-equipment/repair-and-installation-of-machinery-and-equipment/repair-of-machinery/" class="sidebar-link" name="group">Repair Of Machinery</a></li>
					<li><a href="/repair-and-installation-of-machinery-and-equipment/repair-and-installation-of-machinery-and-equipment/repair-of-electronic-and-optical-equipment/" class="sidebar-link" name="group">Repair Of Electronic And Optical Equipment</a></li>
					<li><a href="/repair-and-installation-of-machinery-and-equipment/repair-and-installation-of-machinery-and-equipment/repair-of-electrical-equipment/" class="sidebar-link" name="group">Repair Of Electrical Equipment</a></li>
					<li><a href="/repair-and-installation-of-machinery-and-equipment/repair-and-installation-of-machinery-and-equipment/repair-of-transport-equipment-except-motor-vehicles/" class="sidebar-link" name="group">Repair Of Transport Equipment, Except Motor Vehicles</a></li>
					<li><a href="/repair-and-installation-of-machinery-and-equipment/repair-and-installation-of-machinery-and-equipment/repair-of-other-equipment/" class="sidebar-link" name="group">Repair Of Other Equipment</a></li>
					<li><a href="/repair-and-installation-of-machinery-and-equipment/repair-and-installation-of-machinery-and-equipment/installation-of-industrial-machinery-and-equipment/" class="sidebar-link" name="group">Installation Of Industrial Machinery And Equipment</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/repair-of-computers-and-personal-and-household-goods/repair-of-computers-and-personal-and-household-goods/" class="sidebar-heading clickable"><span>Repair of computers and personal and household goods</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/repair-of-computers-and-personal-and-household-goods/repair-of-computers-and-personal-and-household-goods/repair-of-communication-equipment/" class="sidebar-link" name="group">Repair Of Communication Equipment</a></li>
					<li><a href="/repair-of-computers-and-personal-and-household-goods/repair-of-computers-and-personal-and-household-goods/repair-of-consumer-electronics/" class="sidebar-link" name="group">Repair Of Consumer Electronics</a></li>
					<li><a href="/repair-of-computers-and-personal-and-household-goods/repair-of-computers-and-personal-and-household-goods/repair-of-household-appliances-and-home-and-garden-equipment/" class="sidebar-link" name="group">Repair Of Household Appliances And Home And Garden Equipment</a></li>
					<li><a href="/repair-of-computers-and-personal-and-household-goods/repair-of-computers-and-personal-and-household-goods/repair-of-furniture-and-home-furnishings/" class="sidebar-link" name="group">Repair Of Furniture And Home Furnishings</a></li>
					<li><a href="/repair-of-computers-and-personal-and-household-goods/repair-of-computers-and-personal-and-household-goods/repair-of-other-personal-and-household-goods/" class="sidebar-link" name="group">Repair Of Other Personal And Household Goods</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/residential-care-activities/residential-care-activities/" class="sidebar-heading clickable"><span>Residential care activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/residential-care-activities/residential-care-activities/residential-nursing-care-facilities/" class="sidebar-link" name="group">Residential Nursing Care Facilities</a></li>
					<li><a href="/residential-care-activities/residential-care-activities/residential-care-activities-for-mental-retardation-mental-health-and-substance-abuse/" class="sidebar-link" name="group">Residential Care Activities For Mental Retardation, Mental Health And Substance Abuse</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/" class="sidebar-heading clickable"><span>Retail trade, except of motor vehicles and motorcycles</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/other-retail-sale-in-non-specialized-stores/" class="sidebar-link" name="group">Other retail sale in non-specialized stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-food-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Food In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-beverages-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Beverages In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-tobacco-products-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Tobacco Products In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-computers-peripheral-units-software-and-telecommunications-equipment-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Computers, Peripheral Units, Software And Telecommunications Equipment In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-audio-and-video-equipment-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Audio And Video Equipment In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-textiles-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Textiles In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-hardware-paints-and-glass-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Hardware, Paints And Glass In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-carpets-rugs-wall-and-floor-coverings-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Carpets, Rugs, Wall And Floor Coverings In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-electrical-household-appliances-furniture-lighting-equipment-and-other-household-articles-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Electrical Household Appliances, Furniture, Lighting Equipment And Other Household Articles In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-books-newspapers-and-stationary-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Books, Newspapers And Stationary In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-music-and-video-recordings-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Music And Video Recordings In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-sporting-equipment-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Sporting Equipment In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-games-and-toys-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Games And Toys In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-clothing-footwear-and-leather-articles-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Clothing, Footwear And Leather Articles In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-pharmaceutical-and-medical-goods-cosmetic-and-toilet-articles-in-specialized-stores/" class="sidebar-link" name="group">Retail Sale Of Pharmaceutical And Medical Goods, Cosmetic And Toilet Articles In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/other-retail-sale-of-new-goods-in-specialized-stores/" class="sidebar-link" name="group">Other Retail Sale Of New Goods In Specialized Stores</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-of-second-hand-goods/" class="sidebar-link" name="group">Retail sale of second-hand goods</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-via-stalls-and-markets-of-food-beverages-and-tobacco-products/" class="sidebar-link" name="group">Retail Sale Via Stalls And Markets Of Food, Beverages And Tobacco Products</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-via-stalls-and-markets-of-textiles-clothing-and-footwear/" class="sidebar-link" name="group">Retail Sale Via Stalls And Markets Of Textiles, Clothing And Footwear</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-via-stalls-and-markets-of-other-goods/" class="sidebar-link" name="group">Retail Sale Via Stalls And Markets Of Other Goods</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-sale-via-mail-order-houses-or-via-internet/" class="sidebar-link" name="group">Retail Sale Via Mail Order Houses Or Via Internet</a></li>
					<li><a href="/retail-trade-except-of-motor-vehicles-and-motorcycles/retail-trade-except-of-motor-vehicles-and-motorcycles/other-retail-sale-not-in-stores-stalls-or-markets/" class="sidebar-link" name="group">Other Retail Sale Not In Stores, Stalls Or Markets</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/security-and-investigation-activities/security-and-investigation-activities/" class="sidebar-heading clickable"><span>Security and investigation activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/security-and-investigation-activities/security-and-investigation-activities/private-security-activities/" class="sidebar-link" name="group">Private Security Activities</a></li>
					<li><a href="/security-and-investigation-activities/security-and-investigation-activities/security-systems-service-activities/" class="sidebar-link" name="group">Security Systems Service Activities</a></li>
					<li><a href="/security-and-investigation-activities/security-and-investigation-activities/investigation-activities/" class="sidebar-link" name="group">Investigation Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/services-to-buildings-and-landscape-activities/services-to-buildings-and-landscape-activities/" class="sidebar-heading clickable"><span>Services to buildings and landscape activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/services-to-buildings-and-landscape-activities/services-to-buildings-and-landscape-activities/combined-facilities-support-activities/" class="sidebar-link" name="group">Combined Facilities Support Activities</a></li>
					<li><a href="/services-to-buildings-and-landscape-activities/services-to-buildings-and-landscape-activities/general-cleaning-of-buildings/" class="sidebar-link" name="group">General Cleaning Of Buildings</a></li>
					<li><a href="/services-to-buildings-and-landscape-activities/services-to-buildings-and-landscape-activities/other-building-and-industrial-cleaning-activities/" class="sidebar-link" name="group">Other Building And Industrial Cleaning Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/sewerage/sewerage/" class="sidebar-heading clickable"><span>Sewerage</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/sewerage/sewerage/sewerage/" class="sidebar-link" name="group">Sewerage</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/social-work-activities-without-accommodation/social-work-activities-without-accommodation/" class="sidebar-heading clickable"><span>Social work activities without accommodation</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/social-work-activities-without-accommodation/social-work-activities-without-accommodation/social-work-activities-without-accommodation-for-the-elderly-and-disabled/" class="sidebar-link" name="group">Social Work Activities Without Accommodation For The Elderly And Disabled</a></li>
					<li><a href="/social-work-activities-without-accommodation/social-work-activities-without-accommodation/other-social-work-activities-without-accommodation/" class="sidebar-link" name="group">Other Social Work Activities Without Accommodation</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/specialized-construction-activities/specialized-construction-activities/" class="sidebar-heading clickable"><span>Specialized construction activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/specialized-construction-activities/specialized-construction-activities/demolition/" class="sidebar-link" name="group">Demolition</a></li>
					<li><a href="/specialized-construction-activities/specialized-construction-activities/site-preparation/" class="sidebar-link" name="group">Site Preparation</a></li>
					<li><a href="/specialized-construction-activities/specialized-construction-activities/electrical-installation/" class="sidebar-link" name="group">Electrical Installation</a></li>
					<li><a href="/specialized-construction-activities/specialized-construction-activities/plumbing-heat-and-air-conditioning-installation/" class="sidebar-link" name="group">Plumbing, heat and air-conditioning installation</a></li>
					<li><a href="/specialized-construction-activities/specialized-construction-activities/other-construction-installation/" class="sidebar-link" name="group">Other Construction Installation</a></li>
					<li><a href="/specialized-construction-activities/specialized-construction-activities/building-completion-and-finishing/" class="sidebar-link" name="group">Building Completion And Finishing</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/sports-activities-and-amusement-and-recreation-activities/sports-activities-and-amusement-and-recreation-activities/" class="sidebar-heading clickable"><span>Sports activities and amusement and recreation activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/sports-activities-and-amusement-and-recreation-activities/sports-activities-and-amusement-and-recreation-activities/operation-of-sports-facilities/" class="sidebar-link" name="group">Operation Of Sports Facilities</a></li>
					<li><a href="/sports-activities-and-amusement-and-recreation-activities/sports-activities-and-amusement-and-recreation-activities/activities-of-sports-clubs/" class="sidebar-link" name="group">Activities Of Sports Clubs</a></li>
					<li><a href="/sports-activities-and-amusement-and-recreation-activities/sports-activities-and-amusement-and-recreation-activities/other-sports-activities/" class="sidebar-link" name="group">Other Sports Activities</a></li>
					<li><a href="/sports-activities-and-amusement-and-recreation-activities/sports-activities-and-amusement-and-recreation-activities/activities-of-amusement-parks-and-theme-parks/" class="sidebar-link" name="group">Activities Of Amusement Parks And Theme Parks</a></li>
					<li><a href="/sports-activities-and-amusement-and-recreation-activities/sports-activities-and-amusement-and-recreation-activities/other-amusement-and-recreation-activities-not-elsewhere-classified/" class="sidebar-link" name="group">Other Amusement And Recreation Activities Not Elsewhere Classified</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/telecommunications/telecommunications/" class="sidebar-heading clickable"><span>Telecommunications</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/telecommunications/telecommunications/wired-telecommunications-activities/" class="sidebar-link" name="group">Wired Telecommunications Activities</a></li>
					<li><a href="/telecommunications/telecommunications/wireless-telecommunications-activities/" class="sidebar-link" name="group">Wireless Telecommunications Activities</a></li>
					<li><a href="/telecommunications/telecommunications/satellite-telecommunications-activities/" class="sidebar-link" name="group">Satellite Telecommunications Activities</a></li>
					<li><a href="/telecommunications/telecommunications/other-telecommunications-activities/" class="sidebar-link" name="group">Other Telecommunications Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/travel-agency-tour-operator-reservation-service-and-related-activities/travel-agency-tour-operator-reservation-service-and-related-activities/" class="sidebar-heading clickable"><span>Travel agency, tour operator, reservation service and related activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/travel-agency-tour-operator-reservation-service-and-related-activities/travel-agency-tour-operator-reservation-service-and-related-activities/travel-agency-activities/" class="sidebar-link" name="group">Travel Agency Activities</a></li>
					<li><a href="/travel-agency-tour-operator-reservation-service-and-related-activities/travel-agency-tour-operator-reservation-service-and-related-activities/tour-operator-activities/" class="sidebar-link" name="group">Tour Operator Activities</a></li>
					<li><a href="/travel-agency-tour-operator-reservation-service-and-related-activities/travel-agency-tour-operator-reservation-service-and-related-activities/other-reservation-service-and-related-activities/" class="sidebar-link" name="group">Other Reservation Service And Related Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/veterinary-activities/veterinary-activities/" class="sidebar-heading clickable"><span>Veterinary activities</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/veterinary-activities/veterinary-activities/veterinary-activities/" class="sidebar-link" name="group">Veterinary Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/warehousing-and-support-activities-for-transportation/warehousing-and-support-activities-for-transportation/" class="sidebar-heading clickable"><span>Warehousing and support activities for transportation</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/warehousing-and-support-activities-for-transportation/warehousing-and-support-activities-for-transportation/warehousing-and-storage/" class="sidebar-link" name="group">Warehousing And Storage</a></li>
					<li><a href="/warehousing-and-support-activities-for-transportation/warehousing-and-support-activities-for-transportation/service-activities-incidental-to-land-transportation/" class="sidebar-link" name="group">Service Activities Incidental To Land Transportation</a></li>
					<li><a href="/warehousing-and-support-activities-for-transportation/warehousing-and-support-activities-for-transportation/service-activities-incidental-to-water-transportation/" class="sidebar-link" name="group">Service Activities Incidental To Water Transportation</a></li>
					<li><a href="/warehousing-and-support-activities-for-transportation/warehousing-and-support-activities-for-transportation/service-activities-incidental-to-air-transportation/" class="sidebar-link" name="group">Service Activities Incidental To Air Transportation</a></li>
					<li><a href="/warehousing-and-support-activities-for-transportation/warehousing-and-support-activities-for-transportation/cargo-handling/" class="sidebar-link" name="group">Cargo Handling</a></li>
					<li><a href="/warehousing-and-support-activities-for-transportation/warehousing-and-support-activities-for-transportation/other-transportation-support-activities/" class="sidebar-link" name="group">Other Transportation Support Activities</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/waste-collection-treatment-and-disposal-activities-materials-recovery/waste-collection-treatment-and-disposal-activities-materials-recovery/" class="sidebar-heading clickable"><span>Waste collection, treatment and disposal activities; materials recovery</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/waste-collection-treatment-and-disposal-activities-materials-recovery/waste-collection-treatment-and-disposal-activities-materials-recovery/collection-of-non-hazardous-waste/" class="sidebar-link" name="group">Collection of non-hazardous waste</a></li>
					<li><a href="/waste-collection-treatment-and-disposal-activities-materials-recovery/waste-collection-treatment-and-disposal-activities-materials-recovery/collection-of-hazardous-waste/" class="sidebar-link" name="group">Collection Of Hazardous Waste</a></li>
					<li><a href="/waste-collection-treatment-and-disposal-activities-materials-recovery/waste-collection-treatment-and-disposal-activities-materials-recovery/treatment-and-disposal-of-non-hazardous-waste/" class="sidebar-link" name="group">Treatment and disposal of non-hazardous waste</a></li>
					<li><a href="/waste-collection-treatment-and-disposal-activities-materials-recovery/waste-collection-treatment-and-disposal-activities-materials-recovery/treatment-and-disposal-of-hazardous-waste/" class="sidebar-link" name="group">Treatment And Disposal Of Hazardous Waste</a></li>
					<li><a href="/waste-collection-treatment-and-disposal-activities-materials-recovery/waste-collection-treatment-and-disposal-activities-materials-recovery/materials-recovery/" class="sidebar-link" name="group">Materials Recovery</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/water-collection-treatment-and-supply/water-collection-treatment-and-supply/" class="sidebar-heading clickable"><span>Water collection, treatment and supply</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/water-collection-treatment-and-supply/water-collection-treatment-and-supply/water-collection-treatment-and-supply/" class="sidebar-link" name="group">Water Collection, Treatment And Supply</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/water-transport/water-transport/" class="sidebar-heading clickable"><span>Water transport</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/water-transport/water-transport/sea-and-coastal-passenger-water-transport/" class="sidebar-link" name="group">Sea And Coastal Passenger Water Transport</a></li>
					<li><a href="/water-transport/water-transport/sea-and-coastal-freight-water-transport/" class="sidebar-link" name="group">Sea And Coastal Freight Water Transport</a></li>
					<li><a href="/water-transport/water-transport/inland-passenger-water-transport/" class="sidebar-link" name="group">Inland Passenger Water Transport</a></li>
					<li><a href="/water-transport/water-transport/inland-freight-water-transport/" class="sidebar-link" name="group">Inland Freight Water Transport</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/wholesale-and-retail-trade-and-repair-of-motor-vehicles-and-motorcycles/wholesale-and-retail-trade-and-repair-of-motor-vehicles-and-motorcycles/" class="sidebar-heading clickable"><span>Wholesale and retail trade and repair of motor vehicles and motorcycles</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/wholesale-and-retail-trade-and-repair-of-motor-vehicles-and-motorcycles/wholesale-and-retail-trade-and-repair-of-motor-vehicles-and-motorcycles/sale-of-motor-vehicles/" class="sidebar-link" name="group">Sale Of Motor Vehicles</a></li>
					<li><a href="/wholesale-and-retail-trade-and-repair-of-motor-vehicles-and-motorcycles/wholesale-and-retail-trade-and-repair-of-motor-vehicles-and-motorcycles/maintenance-and-repair-of-motor-vehicles/" class="sidebar-link" name="group">Maintenance And Repair Of Motor Vehicles</a></li>
					<li><a href="/wholesale-and-retail-trade-and-repair-of-motor-vehicles-and-motorcycles/wholesale-and-retail-trade-and-repair-of-motor-vehicles-and-motorcycles/sale-of-motor-vehicle-parts-and-accessories/" class="sidebar-link" name="group">Sale Of Motor Vehicle Parts And Accessories</a></li>
					<li><a href="/wholesale-and-retail-trade-and-repair-of-motor-vehicles-and-motorcycles/wholesale-and-retail-trade-and-repair-of-motor-vehicles-and-motorcycles/sale-maintenance-and-repair-of-motorcycles-and-related-parts-and-accessories/" class="sidebar-link" name="group">Sale, Maintenance And Repair Of Motorcycles And Related Parts And Accessories</a></li>
				</ul>
			</li>
			<li>
                <section class="sidebar-group collapsable depth-0">
                    <a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/" class="sidebar-heading clickable"><span>Wholesale trade, except of motor vehicles and motorcycles</span></a>
                    <span class="arrow right"></span>
                </section>
                <ul>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-of-textiles-clothing-and-footwear/" class="sidebar-link" name="group">Wholesale Of Textiles, Clothing And Footwear</a></li>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-of-other-household-goods/" class="sidebar-link" name="group">Wholesale Of Other Household Goods</a></li>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-of-computers-computer-peripheral-equipment-and-software/" class="sidebar-link" name="group">Wholesale Of Computers, Computer Peripheral Equipment And Software</a></li>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-of-electronic-and-telecommunications-equipment-and-parts/" class="sidebar-link" name="group">Wholesale Of Electronic And Telecommunications Equipment And Parts</a></li>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-of-agricultural-machinery-equipment-and-supplies/" class="sidebar-link" name="group">Wholesale Of Agricultural Machinery, Equipment And Supplies</a></li>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-of-solid-liquid-and-gaseous-fuels-and-related-products/" class="sidebar-link" name="group">Wholesale Of Solid, Liquid And Gaseous Fuels And Related Products</a></li>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-of-metals-and-metal-ores/" class="sidebar-link" name="group">Wholesale Of Metals And Metal Ores</a></li>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-of-construction-materials-hardware-plumbing-and-heating-equipment-and-supplies/" class="sidebar-link" name="group">Wholesale Of Construction Materials, Hardware, Plumbing And Heating Equipment And Supplies</a></li>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-of-waste-and-scrap-and-other-products-not-elsewhere-classified/" class="sidebar-link" name="group">Wholesale Of Waste And Scrap And Other Products Not Elsewhere Classified</a></li>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-on-a-fee-or-contract-basis/" class="sidebar-link" name="group">Wholesale On A Fee Or Contract Basis</a></li>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-of-agricultural-raw-materials-and-live-animals/" class="sidebar-link" name="group">Wholesale Of Agricultural Raw Materials And Live Animals</a></li>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-of-food-beverages-and-tobacco/" class="sidebar-link" name="group">Wholesale Of Food, Beverages And Tobacco</a></li>
					<li><a href="/wholesale-trade-except-of-motor-vehicles-and-motorcycles/wholesale-trade-except-of-motor-vehicles-and-motorcycles/non-specialized-wholesale-trade/" class="sidebar-link" name="group">Non-specialized wholesale trade</a></li>
				</ul>
			</li>
        </ul>
    </aside>

</template>

<script>
    import {resolveSidebarItems} from '@parent-theme/util'
    // import Sidebar from '@parent-theme/components/Sidebar.vue'

    export default {
        name: "SearchSideBar",

        props: ['closeSidebar'],

        // components: {
        //     Sidebar,
        // },

        data() {
            return {
                customSideBar: [],
                inputSearch: '',
            }
        },

        created() {
            this.customSideBar = this.sidebarItems;
        },

        mounted() {
            const parsedSidebarItems = JSON.stringify(this.sidebarItems);
            localStorage.setItem('sidebar', parsedSidebarItems);

            var arrow = document.getElementsByClassName("arrow right");
            for (var i = 0 ; i < arrow.length; i++) {
               arrow[i].addEventListener("click", expandSublinks);
            }
            function expandSublinks() {
                if (this.parentElement.classList.contains("expanded")) {
                    this.parentElement.classList.remove("expanded");
                } else {
                    this.parentElement.classList.add("expanded");
                }
            }
        },

        computed: {
            sidebarItems() {
                return resolveSidebarItems(
                    this.$page,
                    this.$page.regularPath,
                    this.$site,
                    this.$localePath
                )
            },
        },

        methods: {
            searchSideBar() {
            	var listSidebarLink = document.getElementsByClassName("sidebar-link");

				for (let i = 0; i < listSidebarLink.length; i++) {
					listSidebarLink[i].parentElement.classList.add("hide");
					if (listSidebarLink[i].name === "group") {
						if (!listSidebarLink[i].parentElement.parentElement.parentElement.classList.contains("hide")) {
							listSidebarLink[i].parentElement.parentElement.parentElement.classList.add("hide");
						}
					}
				}

            	for (let i = 0; i < listSidebarLink.length; i++) {
            	    let index = listSidebarLink[i].text.toLowerCase().trim().search(this.inputSearch.toLowerCase().trim());
            	    if (index !== -1) {
						listSidebarLink[i].parentElement.classList.remove("hide")
                        if (listSidebarLink[i].name === "group") {
                            if (listSidebarLink[i].parentElement.parentElement.parentElement.classList.contains("hide")) {
                                listSidebarLink[i].parentElement.parentElement.parentElement.classList.remove("hide")
                            }
                        }
                   	}
            	}
            },
        }

    }
</script>

<style lang="stylus">
.hide
   display none
</style>
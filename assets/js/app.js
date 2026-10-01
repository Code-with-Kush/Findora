const categoryGroups = [
      { name: "Food & Drink", items: [
        "Restaurants", "Cafes & Coffee Shops", "Bakeries", "Bars & Pubs", "Breweries", "Wineries & Cellar Doors", "Cocktail Bars", "Fast Food", "Food Courts", "Food Trucks", "Takeaways", "Dessert Shops", "Ice Cream & Gelato", "Juice & Smoothie Bars", "Breakfast & Brunch", "Fine Dining", "Buffet Restaurants", "Vegetarian & Vegan", "Halal Food", "Indian Restaurants", "Chinese Restaurants", "Japanese Restaurants", "Korean Restaurants", "Thai Restaurants", "Vietnamese Restaurants", "Italian Restaurants", "Mexican Restaurants", "Mediterranean Restaurants", "Seafood Restaurants", "Pizza", "Burgers", "Fish & Chips"
      ]},
      { name: "Shopping & Retail", items: [
        "Shopping Centres & Malls", "Supermarkets", "Convenience Stores", "Farmers Markets", "Department Stores", "Clothing & Fashion", "Shoes & Footwear", "Jewellery", "Beauty & Cosmetics", "Electronics", "Mobile Phone Stores", "Computers & IT Retail", "Furniture", "Homeware", "Hardware Stores", "Garden Centres", "Florists", "Bookshops", "Gift Shops", "Toy Stores", "Baby & Kids Stores", "Sports Stores", "Outdoor Stores", "Bicycle Shops", "Pet Stores", "Liquor Stores", "Specialty Food Stores", "Second-hand & Op Shops", "Art & Craft Stores", "Music Stores"
      ]},
      { name: "Accommodation", items: [
        "Hotels", "Motels", "Hostels", "Backpacker Lodges", "Bed & Breakfast", "Holiday Parks", "Campgrounds", "Holiday Homes", "Serviced Apartments", "Luxury Lodges", "Boutique Accommodation", "Farm Stays", "Cabins & Cottages", "Resorts"
      ]},
      { name: "Attractions & Culture", items: [
        "Attractions & Things to Do", "Museums", "Art Galleries", "Historic Sites", "Heritage Buildings", "Cultural Centres", "Marae & Māori Cultural Experiences", "Libraries", "Visitor Centres", "Zoos", "Aquariums", "Botanical Gardens", "Observation Points", "Landmarks", "Public Art", "Markets", "Festivals & Event Venues", "Convention Centres"
      ]},
      { name: "Nature & Outdoors", items: [
        "Parks", "Regional Parks", "National Parks", "Hiking & Walking Trails", "Mountain Biking Trails", "Cycleways", "Beaches", "Lakes", "Rivers", "Waterfalls", "Lookouts & Viewpoints", "Picnic Areas", "Scenic Reserves", "Wildlife Reserves", "Gardens", "Playgrounds", "Dog Parks", "Camping Areas", "Fishing Spots", "Surf Spots", "Ski Fields", "Hot Pools & Springs"
      ]},
      { name: "Entertainment & Nightlife", items: [
        "Cinemas", "Theatres", "Live Music Venues", "Nightclubs", "Comedy Clubs", "Arcades", "Bowling", "Escape Rooms", "Karaoke", "Casinos", "Family Entertainment Centres", "Indoor Play Centres", "Event Venues", "Performing Arts", "Gaming Lounges"
      ]},
      { name: "Sport & Recreation", items: [
        "Gyms & Fitness Centres", "Swimming Pools", "Sports Centres", "Stadiums", "Golf Courses", "Tennis Courts", "Squash Courts", "Climbing Gyms", "Skate Parks", "Trampoline Parks", "Yoga Studios", "Pilates Studios", "Dance Studios", "Martial Arts", "Sports Clubs", "Kayaking & Paddleboarding", "Surf Schools", "Ski & Snowboard", "Adventure Activities", "Boat Charters"
      ]},
      { name: "Health & Wellness", items: [
        "Hospitals", "Medical Centres", "Doctors & GPs", "Urgent Care", "Pharmacies", "Dentists", "Orthodontists", "Optometrists", "Physiotherapists", "Chiropractors", "Podiatrists", "Psychologists & Counsellors", "Mental Health Services", "Massage", "Day Spas", "Beauty Salons", "Hairdressers & Barbers", "Nail Salons", "Skin Clinics", "Nutritionists", "Audiologists", "Medical Laboratories", "Radiology & Imaging"
      ]},
      { name: "Home & Trade Services", items: [
        "Builders", "Electricians", "Plumbers", "Painters", "Roofers", "Carpenters", "Glaziers", "Locksmiths", "Cleaners", "Carpet Cleaning", "Pest Control", "Landscapers", "Gardeners", "Lawn Care", "Moving Companies", "Storage", "Handyman Services", "Appliance Repair", "Air Conditioning & Heating", "Security Services", "Waste & Rubbish Removal", "Property Maintenance"
      ]},
      { name: "Professional Services", items: [
        "Accountants", "Lawyers", "Financial Advisers", "Banks", "Insurance", "Mortgage Brokers", "Real Estate Agents", "Property Managers", "Architects", "Engineers", "Surveyors", "Marketing Agencies", "Web & Software Developers", "IT Services", "Graphic Designers", "Photographers", "Recruitment Agencies", "Business Consultants", "Coworking Spaces", "Printing Services", "Translators", "Notaries & JP Services"
      ]},
      { name: "Automotive & Transport", items: [
        "Petrol Stations", "EV Charging Stations", "Car Dealers", "Used Car Dealers", "Mechanics", "Tyre Shops", "Warrant of Fitness", "Auto Electricians", "Panel Beaters", "Car Wash", "Car Detailing", "Car Rental", "Campervan Rental", "Motorcycle Shops", "Bicycle Hire", "Taxi & Rideshare", "Bus Stops & Stations", "Train Stations", "Ferry Terminals", "Airports", "Parking", "Towing Services"
      ]},
      { name: "Education & Learning", items: [
        "Universities", "Polytechnics & Institutes", "Schools", "Primary Schools", "Secondary Schools", "Early Childhood Education", "Kindergartens", "Daycare", "Tutoring", "Language Schools", "Driving Schools", "Music Schools", "Dance Schools", "Training Providers", "Libraries", "Community Education"
      ]},
      { name: "Community & Government", items: [
        "City & District Councils", "Government Offices", "Police Stations", "Fire Stations", "Courthouses", "Post Offices", "Community Centres", "Citizens Advice", "Social Services", "Charities", "Food Banks", "Public Toilets", "Recycling Centres", "Cemeteries", "Civil Defence Facilities"
      ]},
      { name: "Family & Kids", items: [
        "Playgrounds", "Indoor Play Centres", "Kids Activities", "Toy Libraries", "Playgroups", "Baby Classes", "Swimming Lessons", "Family Restaurants", "Childcare", "School Holiday Activities", "Birthday Party Venues", "Parenting Services"
      ]},
      { name: "Pets & Animals", items: [
        "Veterinarians", "Emergency Vets", "Pet Stores", "Pet Groomers", "Dog Daycare", "Kennels", "Catteries", "Dog Trainers", "Pet Sitters", "Animal Shelters", "Dog Parks", "Equestrian Centres"
      ]},
      { name: "Faith & Spirituality", items: [
        "Churches", "Mosques", "Temples", "Gurdwaras", "Synagogues", "Buddhist Centres", "Meditation Centres", "Spiritual Centres", "Chapels"
      ]},
      { name: "Travel & Visitor Services", items: [
        "Tour Operators", "Sightseeing Tours", "Travel Agencies", "Visitor Information Centres", "Scenic Flights", "Boat Tours", "Cruises", "Adventure Tours", "Airport Shuttles", "Luggage Storage", "Currency Exchange", "Souvenir Shops"
      ]},
      { name: "Business & Industrial", items: [
        "Manufacturers", "Wholesalers", "Warehouses", "Industrial Suppliers", "Construction Companies", "Logistics & Freight", "Courier Services", "Commercial Cleaning", "Equipment Hire", "Tool Hire", "Agricultural Services", "Farms & Orchards", "Engineering Workshops", "Signwriters"
      ]}
    ];

    const cityGroups = [
      { name: "Auckland & Northland", items: ["Auckland", "Manukau", "North Shore", "Waitākere", "Pukekohe", "Warkworth", "Wellsford", "Whangārei", "Kerikeri", "Paihia", "Kaikohe", "Dargaville", "Kaitaia"] },
      { name: "Waikato & Bay of Plenty", items: ["Hamilton", "Cambridge", "Te Awamutu", "Huntly", "Morrinsville", "Matamata", "Tokoroa", "Taupō", "Tauranga", "Mount Maunganui", "Te Puke", "Rotorua", "Whakatāne", "Ōpōtiki"] },
      { name: "Gisborne, Hawke's Bay & Taranaki", items: ["Gisborne", "Napier", "Hastings", "Havelock North", "Waipukurau", "New Plymouth", "Hāwera", "Stratford"] },
      { name: "Manawatū, Whanganui & Wairarapa", items: ["Palmerston North", "Feilding", "Levin", "Whanganui", "Masterton", "Carterton", "Greytown", "Martinborough"] },
      { name: "Wellington Region", items: ["Wellington", "Lower Hutt", "Upper Hutt", "Porirua", "Paraparaumu", "Waikanae"] },
      { name: "Nelson, Tasman & Marlborough", items: ["Nelson", "Richmond", "Motueka", "Tākaka", "Blenheim", "Picton"] },
      { name: "Canterbury & West Coast", items: ["Christchurch", "Rangiora", "Kaiapoi", "Rolleston", "Lincoln", "Ashburton", "Timaru", "Temuka", "Geraldine", "Greymouth", "Hokitika", "Westport"] },
      { name: "Otago & Southland", items: ["Dunedin", "Oamaru", "Queenstown", "Wānaka", "Alexandra", "Cromwell", "Balclutha", "Invercargill", "Gore", "Te Anau"] }
    ];

    const searchShell = document.getElementById("searchShell");
    const searchInput = document.getElementById("searchInput");
    const micButton = document.getElementById("micButton");
    const clearSearchButton = document.getElementById("clearSearchButton");
    const searchStatus = document.getElementById("searchStatus");

    const categoryButton = document.getElementById("categoryButton");
    const categoryPanel = document.getElementById("categoryPanel");
    const categoryLabel = document.getElementById("categoryLabel");
    const categorySearch = document.getElementById("categorySearch");
    const categoryGrid = document.getElementById("categoryGrid");
    const categoryEmpty = document.getElementById("categoryEmpty");
    const categoryCount = document.getElementById("categoryCount");

    const cityButton = document.getElementById("cityButton");
    const cityPanel = document.getElementById("cityPanel");
    const cityLabel = document.getElementById("cityLabel");
    const citySearch = document.getElementById("citySearch");
    const cityList = document.getElementById("cityList");
    const cityEmpty = document.getElementById("cityEmpty");
    const cityCount = document.getElementById("cityCount");

    let selectedCategory = "All categories";
    let selectedCity = "All New Zealand";
    let searchAnimationTimer;

    const checkIcon = `
      <svg class="selected-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m5 12 4 4L19 6"></path>
      </svg>`;

    function normalise(value) {
      return value.toLocaleLowerCase("en-NZ").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function renderCategories(filter = "") {
      const term = normalise(filter.trim());
      categoryGrid.innerHTML = "";
      let visibleItems = 0;

      categoryGroups.forEach((group) => {
        const matchingItems = group.items.filter((item) => !term || normalise(item).includes(term) || normalise(group.name).includes(term));
        if (!matchingItems.length) return;

        visibleItems += matchingItems.length;
        const section = document.createElement("section");
        section.className = "category-group";
        section.innerHTML = `<h3 class="group-title"><span class="group-dot"></span>${escapeHtml(group.name)}</h3>`;

        matchingItems.forEach((item) => {
          const option = document.createElement("button");
          option.type = "button";
          option.className = "picker-option" + (item === selectedCategory ? " is-selected" : "");
          option.dataset.category = item;
          option.innerHTML = `<span>${escapeHtml(item)}</span>${checkIcon}`;
          section.appendChild(option);
        });

        categoryGrid.appendChild(section);
      });

      categoryEmpty.classList.toggle("is-visible", visibleItems === 0);
      const total = categoryGroups.reduce((count, group) => count + group.items.length, 0);
      categoryCount.textContent = filter ? `${visibleItems} matches` : `${total} categories`;
    }

    function renderCities(filter = "") {
      const term = normalise(filter.trim());
      cityList.innerHTML = "";
      let visibleItems = 0;

      cityGroups.forEach((group) => {
        const matchingItems = group.items.filter((item) => !term || normalise(item).includes(term) || normalise(group.name).includes(term));
        if (!matchingItems.length) return;

        visibleItems += matchingItems.length;
        const section = document.createElement("section");
        section.className = "city-group";
        section.innerHTML = `<h3 class="group-title"><span class="group-dot"></span>${escapeHtml(group.name)}</h3><div class="city-options"></div>`;
        const options = section.querySelector(".city-options");

        matchingItems.forEach((item) => {
          const option = document.createElement("button");
          option.type = "button";
          option.className = "picker-option" + (item === selectedCity ? " is-selected" : "");
          option.dataset.city = item;
          option.innerHTML = `<span>${escapeHtml(item)}</span>${checkIcon}`;
          options.appendChild(option);
        });

        cityList.appendChild(section);
      });

      cityEmpty.classList.toggle("is-visible", visibleItems === 0);
      const total = cityGroups.reduce((count, group) => count + group.items.length, 0);
      cityCount.textContent = filter ? `${visibleItems} matches` : `${total} locations`;
    }

    function openPanel(panelName) {
      const isCategory = panelName === "category";
      const panel = isCategory ? categoryPanel : cityPanel;
      const button = isCategory ? categoryButton : cityButton;
      const otherPanel = isCategory ? cityPanel : categoryPanel;
      const otherButton = isCategory ? cityButton : categoryButton;
      const searchField = isCategory ? categorySearch : citySearch;
      const isAlreadyOpen = panel.classList.contains("is-open");

      otherPanel.classList.remove("is-open");
      otherButton.setAttribute("aria-expanded", "false");

      if (isAlreadyOpen) {
        panel.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
        return;
      }

      panel.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      requestAnimationFrame(() => searchField.focus());
    }

    function closePickers() {
      categoryPanel.classList.remove("is-open");
      cityPanel.classList.remove("is-open");
      categoryButton.setAttribute("aria-expanded", "false");
      cityButton.setAttribute("aria-expanded", "false");
    }

    categoryButton.addEventListener("click", () => openPanel("category"));
    cityButton.addEventListener("click", () => openPanel("city"));

    categorySearch.addEventListener("input", () => renderCategories(categorySearch.value));
    citySearch.addEventListener("input", () => renderCities(citySearch.value));

    [categorySearch, citySearch].forEach((field) => {
      field.addEventListener("keydown", (event) => {
        if (event.key === "Enter") event.preventDefault();
        if (event.key === "Escape") {
          closePickers();
          searchInput.focus();
        }
      });
    });

    categoryPanel.addEventListener("click", (event) => {
      const option = event.target.closest("[data-category]");
      if (!option) return;
      selectedCategory = option.dataset.category;
      categoryLabel.textContent = selectedCategory === "All categories" ? "Explore" : selectedCategory;
      categorySearch.value = "";
      renderCategories();
      closePickers();
      updateClearSearchButton();
      searchInput.focus();
    });

    cityPanel.addEventListener("click", (event) => {
      const option = event.target.closest("[data-city]");
      if (!option) return;
      selectedCity = option.dataset.city;
      cityLabel.textContent = selectedCity === "All New Zealand" ? "New Zealand" : selectedCity;
      citySearch.value = "";
      renderCities();
      closePickers();
      updateClearSearchButton();
      searchInput.focus();
    });

    document.addEventListener("click", (event) => {
      if (!searchShell.contains(event.target)) closePickers();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closePickers();
    });



    // Demo search-result data. Replace this array with Google Places / backend results.
    const demoListings = [
      {
        id: 1,
        name: "North & Grain Coffee Lab",
        category: "Cafe · Specialty coffee",
        rating: 4.9,
        reviews: 684,
        open: true,
        closing: "Closes 4:30 pm",
        distance: 0.6,
        price: "$$",
        address: "18 Market Lane",
        phone: "+64 3 555 0182",
        website: "northandgrain.demo",
        description: "Small-batch coffee, fresh cabinet food and a bright modern room built for an easy city stop.",
        image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=82"
      },
      {
        id: 2,
        name: "Juniper Table",
        category: "Restaurant · Modern New Zealand",
        rating: 4.8,
        reviews: 1287,
        open: true,
        closing: "Closes 10:00 pm",
        distance: 1.1,
        price: "$$$",
        address: "42 Harbour Street",
        phone: "+64 3 555 0237",
        website: "junipertable.demo",
        description: "Seasonal local produce, polished service and relaxed dining with a distinctly Aotearoa-focused menu.",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=82"
      },
      {
        id: 3,
        name: "Atlas City Museum",
        category: "Museum · Arts & culture",
        rating: 4.7,
        reviews: 2394,
        open: true,
        closing: "Closes 5:00 pm",
        distance: 1.8,
        price: "$",
        address: "7 Civic Square",
        phone: "+64 3 555 0311",
        website: "atlascitymuseum.demo",
        description: "Interactive local-history galleries, rotating exhibitions and family-friendly discovery spaces.",
        image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=900&q=82"
      },
      {
        id: 4,
        name: "Summit Loop Trail",
        category: "Hiking trail · Outdoors",
        rating: 4.9,
        reviews: 917,
        open: true,
        closing: "Open 24 hours",
        distance: 4.7,
        price: "$",
        address: "Summit Reserve Entrance",
        phone: "",
        website: "summitloop.demo",
        description: "A scenic loop with wide viewpoints, native planting and clearly marked sections for varied fitness levels.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=82"
      },
      {
        id: 5,
        name: "Paper & Pine Books",
        category: "Bookshop · Independent retail",
        rating: 4.6,
        reviews: 341,
        open: false,
        closing: "Opens 9:00 am tomorrow",
        distance: 2.4,
        price: "$$",
        address: "66 Garden Road",
        phone: "+64 3 555 0440",
        website: "paperandpine.demo",
        description: "Independent books, thoughtful gifts and a quiet reading corner with a carefully curated local section.",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=82"
      },
      {
        id: 6,
        name: "Harbour House Bakery",
        category: "Bakery · Breakfast",
        rating: 4.8,
        reviews: 764,
        open: true,
        closing: "Closes 3:30 pm",
        distance: 3.2,
        price: "$$",
        address: "5 Willow Arcade",
        phone: "+64 3 555 0498",
        website: "harbourhouse.demo",
        description: "Naturally leavened bread, laminated pastries and all-day breakfast favourites served in a light-filled space.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=82"
      },
      {
        id: 7,
        name: "Tidal Wellness Studio",
        category: "Wellness · Yoga & Pilates",
        rating: 4.5,
        reviews: 198,
        open: false,
        closing: "Opens 6:00 am tomorrow",
        distance: 5.8,
        price: "$$$",
        address: "101 Fern Avenue",
        phone: "+64 3 555 0526",
        website: "",
        description: "Small-group movement classes, recovery sessions and modern wellness facilities in a calm studio setting.",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=82"
      },
      {
        id: 8,
        name: "Laneway Kitchen",
        category: "Restaurant · Asian fusion",
        rating: 4.4,
        reviews: 1108,
        open: true,
        closing: "Closes 9:30 pm",
        distance: 0.9,
        price: "$$",
        address: "29 Lantern Lane",
        phone: "+64 3 555 0671",
        website: "lanewaykitchen.demo",
        description: "A fast-moving neighbourhood kitchen with share plates, bold flavours and a casual open-kitchen atmosphere.",
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=82"
      },
      {
        id: 9,
        name: "Koru Design Market",
        category: "Market · Local makers",
        rating: 4.7,
        reviews: 526,
        open: true,
        closing: "Closes 5:00 pm",
        distance: 6.4,
        price: "$$",
        address: "12 Foundry Court",
        phone: "+64 3 555 0714",
        website: "korudesignmarket.demo",
        description: "Local design, small-label fashion, ceramics and rotating pop-ups from independent New Zealand makers.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=82"
      }
    ];

    const resultsSection = document.getElementById("resultsSection");
    const resultsGrid = document.getElementById("resultsGrid");
    const resultsTitle = document.getElementById("resultsTitle");
    const resultsMeta = document.getElementById("resultsMeta");
    const noResults = document.getElementById("noResults");
    const listViewButton = document.getElementById("listViewButton");
    const gridViewButton = document.getElementById("gridViewButton");
    const openNowFilter = document.getElementById("openNowFilter");
    const ratingFilter = document.getElementById("ratingFilter");
    const distanceFilter = document.getElementById("distanceFilter");
    const priceFilter = document.getElementById("priceFilter");
    const websiteFilter = document.getElementById("websiteFilter");
    const phoneFilter = document.getElementById("phoneFilter");
    const sortFilter = document.getElementById("sortFilter");
    const resetFilters = document.getElementById("resetFilters");
    const detailPage = document.getElementById("detailPage");
    const detailHero = document.getElementById("detailHero");
    const similarStrip = document.getElementById("similarStrip");
    const detailMainColumn = document.getElementById("detailMainColumn");
    const detailSidebar = document.getElementById("detailSidebar");
    const backToResults = document.getElementById("backToResults");
    const detailSave = document.getElementById("detailSave");
    let activeDetailListingId = null;

    const resultFilterState = {
      openNow: false,
      rating: 0,
      distance: 999,
      price: "all",
      website: false,
      phone: false,
      sort: "recommended",
      view: "list"
    };

    function getDemoCity() {
      return selectedCity === "All New Zealand" ? "Christchurch" : selectedCity;
    }

    function setToggleFilter(button, key) {
      resultFilterState[key] = !resultFilterState[key];
      button.classList.toggle("is-active", resultFilterState[key]);
      button.setAttribute("aria-pressed", String(resultFilterState[key]));
      renderResults();
    }

    function listingMatchesSearch(listing) {
      const q = normalise(searchInput.value.trim());
      if (!q) return true;
      const haystack = normalise(`${listing.name} ${listing.category} ${listing.description}`);
      const words = q.split(/\s+/).filter(Boolean);
      return words.some((word) => haystack.includes(word));
    }

    function filteredDemoListings() {
      let items = demoListings.filter((listing) => {
        if (resultFilterState.openNow && !listing.open) return false;
        if (listing.rating < Number(resultFilterState.rating)) return false;
        if (listing.distance > Number(resultFilterState.distance)) return false;
        if (resultFilterState.price !== "all" && listing.price !== resultFilterState.price) return false;
        if (resultFilterState.website && !listing.website) return false;
        if (resultFilterState.phone && !listing.phone) return false;
        return true;
      });

      if (resultFilterState.sort === "rating") items.sort((a,b) => b.rating - a.rating);
      if (resultFilterState.sort === "reviews") items.sort((a,b) => b.reviews - a.reviews);
      if (resultFilterState.sort === "distance") items.sort((a,b) => a.distance - b.distance);
      if (resultFilterState.sort === "name") items.sort((a,b) => a.name.localeCompare(b.name));
      return items;
    }

    function resultCardTemplate(listing) {
      const city = getDemoCity();
      const statusClass = listing.open ? "open-text" : "closed-text";
      const badgeClass = listing.open ? "" : " is-closed";
      const websiteLine = listing.website ? `
        <div class="micro-line">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M4 12h16M12 4c2.2 2.3 3.3 5 3.3 8S14.2 17.7 12 20M12 4C9.8 6.3 8.7 9 8.7 12S9.8 17.7 12 20"></path></svg>
          <span>${escapeHtml(listing.website)}</span>
        </div>` : "";
      const phoneLine = listing.phone ? `
        <div class="micro-line">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4 5 6c-1 1 0 5 4 9s8 5 9 4l2-2-4-3-2 2c-1-1-3-2-4-3s-2-3-3-4l2-2-2-3Z"></path></svg>
          <span>${escapeHtml(listing.phone)}</span>
        </div>` : "";

      return `
        <article class="result-card" data-id="${listing.id}">
          <figure class="result-photo">
            <img src="${listing.image}" alt="Demo photo for ${escapeHtml(listing.name)}" loading="lazy" referrerpolicy="no-referrer" />
            <div class="photo-overlay"></div>
            <div class="photo-badges">
              <span class="mini-badge${badgeClass}"><span class="status-dot"></span>${listing.open ? "Open" : "Closed"}</span>
              <span class="mini-badge">${listing.price}</span>
            </div>
            <button class="save-place" type="button" aria-label="Save ${escapeHtml(listing.name)}" title="Save place">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"></path></svg>
            </button>
          </figure>

          <div class="result-main">
            <div class="result-topline">
              <h3 class="result-name">${escapeHtml(listing.name)}</h3>
              <div class="result-rating" title="${listing.rating} out of 5">
                <span class="star">★</span>
                ${listing.rating.toFixed(1)} <span class="rating-count">(${listing.reviews.toLocaleString("en-NZ")})</span>
              </div>
            </div>

            <div class="result-subline">
              <span>${escapeHtml(listing.category)}</span><span class="dot-sep"></span>
              <span class="${statusClass}">${escapeHtml(listing.closing)}</span><span class="dot-sep"></span>
              <span>${listing.distance.toFixed(1)} km</span>
            </div>

            <p class="result-desc">${escapeHtml(listing.description)}</p>

            <div class="micro-details">
              <div class="micro-line">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>
                <span>${escapeHtml(listing.address)}, ${escapeHtml(city)}, New Zealand</span>
              </div>
              ${phoneLine}
              ${websiteLine}
            </div>
          </div>

          <div class="result-side">
            <button class="card-action primary" type="button" data-demo-detail="${listing.id}">
              View details
            </button>
            <button class="card-action" type="button" title="Directions demo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 8 8-8 8-8-8 8-8Z"></path><path d="M9 11h6M13 9l2 2-2 2"></path></svg>
              Directions
            </button>
          </div>
        </article>`;
    }

    function renderResults() {
      if (!resultsSection || resultsSection.hidden) return;
      const items = filteredDemoListings();
      resultsGrid.innerHTML = items.map(resultCardTemplate).join("");
      noResults.classList.toggle("is-visible", items.length === 0);
      resultsGrid.style.display = items.length ? "grid" : "none";

      const city = getDemoCity();
      const descriptor = selectedCategory !== "All categories" ? selectedCategory : (searchInput.value.trim() || "places");
      resultsTitle.textContent = `${descriptor} in ${city}`;
      resultsMeta.textContent = `${items.length} demo match${items.length === 1 ? "" : "es"} · refined from ${demoListings.length} sample listings`;
    }

    function revealResults() {
      document.body.classList.add("has-results");
      resultsSection.hidden = false;
      updateClearSearchButton();
      requestAnimationFrame(() => {
        resultsSection.classList.add("is-visible");
        renderResults();
        setTimeout(() => resultsSection.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      });
    }

    function setResultsView(view) {
      resultFilterState.view = view;
      resultsGrid.dataset.view = view;
      const listActive = view === "list";
      listViewButton.classList.toggle("is-active", listActive);
      gridViewButton.classList.toggle("is-active", !listActive);
      listViewButton.setAttribute("aria-pressed", String(listActive));
      gridViewButton.setAttribute("aria-pressed", String(!listActive));
    }

    listViewButton.addEventListener("click", () => setResultsView("list"));
    gridViewButton.addEventListener("click", () => setResultsView("grid"));
    openNowFilter.addEventListener("click", () => setToggleFilter(openNowFilter, "openNow"));
    websiteFilter.addEventListener("click", () => setToggleFilter(websiteFilter, "website"));
    phoneFilter.addEventListener("click", () => setToggleFilter(phoneFilter, "phone"));

    ratingFilter.addEventListener("change", () => { resultFilterState.rating = Number(ratingFilter.value); renderResults(); });
    distanceFilter.addEventListener("change", () => { resultFilterState.distance = Number(distanceFilter.value); renderResults(); });
    priceFilter.addEventListener("change", () => { resultFilterState.price = priceFilter.value; renderResults(); });
    sortFilter.addEventListener("change", () => { resultFilterState.sort = sortFilter.value; renderResults(); });

    resetFilters.addEventListener("click", () => {
      Object.assign(resultFilterState, { openNow:false, rating:0, distance:999, price:"all", website:false, phone:false, sort:"recommended" });
      openNowFilter.classList.remove("is-active");
      websiteFilter.classList.remove("is-active");
      phoneFilter.classList.remove("is-active");
      [openNowFilter, websiteFilter, phoneFilter].forEach((button) => button.setAttribute("aria-pressed", "false"));
      ratingFilter.value = "0";
      distanceFilter.value = "999";
      priceFilter.value = "all";
      sortFilter.value = "recommended";
      renderResults();
    });


    function detailTagsFor(listing) {
      const categoryTags = listing.category.split("·").map((item) => item.trim()).filter(Boolean);
      const generic = listing.open
        ? ["Open now", "Highly rated", "Local favourite", "New Zealand"]
        : ["Popular", "Local favourite", "New Zealand"];
      if (listing.rating >= 4.7) generic.splice(1, 0, "4.7+ rating");
      if (listing.distance <= 2) generic.push("Nearby");
      return [...new Set([...categoryTags, ...generic])].slice(0, 8);
    }

    function detailFeaturesFor(listing) {
      const cat = normalise(listing.category);
      const base = [
        ["Verified contact", "<path d='M5 12l4 4L19 6'></path>"],
        [listing.website ? "Website available" : "Local listing", "<circle cx='12' cy='12' r='8'></circle><path d='M4 12h16'></path>"],
        ["Easy directions", "<path d='m12 3 8 8-8 8-8-8 8-8Z'></path><path d='M9 11h6'></path>"]
      ];
      if (cat.includes("restaurant") || cat.includes("cafe") || cat.includes("bakery")) {
        return [...base, ["Dine-in", "<path d='M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M15 3v18M15 3c3 2 3 7 0 9'></path>"], ["Takeaway", "<path d='M6 8h12l-1 13H7L6 8Z'></path><path d='M9 8a3 3 0 0 1 6 0'></path>"], ["Popular nearby", "<path d='M12 21s7-5 7-11a7 7 0 1 0-14 0c0 6 7 11 7 11Z'></path>"]];
      }
      if (cat.includes("trail") || cat.includes("park") || cat.includes("outdoor")) {
        return [...base, ["Outdoor", "<path d='m4 18 5-8 3 5 2-3 6 6H4Z'></path>"], ["Scenic", "<circle cx='12' cy='12' r='4'></circle><path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4'></path>"], ["Good for walking", "<path d='M10 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 8l3 2 2 4M9 8l-2 5-3 2M12 10l-1 5 4 5M7 13l3 3-2 5'></path>"]];
      }
      return [...base, ["Well reviewed", "<path d='m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z'></path>"], ["Community choice", "<circle cx='8' cy='9' r='3'></circle><circle cx='16' cy='9' r='3'></circle><path d='M3 20c0-4 2-6 5-6M21 20c0-4-2-6-5-6M10 20c0-4 1-7 2-7s2 3 2 7'></path>"], ["Nearby", "<path d='M12 21s7-5 7-11a7 7 0 1 0-14 0c0 6 7 11 7 11Z'></path>"]];
    }

    function similarListingsFor(listing) {
      const categoryRoot = normalise(listing.category.split("·")[0].trim());
      return demoListings
        .filter((item) => item.id !== listing.id)
        .sort((a, b) => {
          const aMatch = normalise(a.category).includes(categoryRoot) ? 1 : 0;
          const bMatch = normalise(b.category).includes(categoryRoot) ? 1 : 0;
          if (aMatch !== bMatch) return bMatch - aMatch;
          const aScore = a.rating - a.distance * .025;
          const bScore = b.rating - b.distance * .025;
          return bScore - aScore;
        })
        .slice(0, 3);
    }

    function renderSimilarPlaces(listing) {
      similarStrip.innerHTML = similarListingsFor(listing).map((item) => `
        <button class="similar-card" type="button" data-similar-detail="${item.id}">
          <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" referrerpolicy="no-referrer" />
          <span class="similar-card-copy">
            <span class="similar-card-name">${escapeHtml(item.name)}</span>
            <span class="similar-card-meta"><span class="similar-card-rating">${item.rating.toFixed(1)}</span><span>${item.distance.toFixed(1)} km</span></span>
          </span>
        </button>`).join("");
    }

    function renderListingDetail(listing) {
      const city = getDemoCity();
      const tags = detailTagsFor(listing);
      const features = detailFeaturesFor(listing);
      const openClass = listing.open ? "open" : "closed";
      const secondImage = demoListings[(listing.id + 1) % demoListings.length]?.image || listing.image;
      const thirdImage = demoListings[(listing.id + 3) % demoListings.length]?.image || listing.image;

      detailHero.innerHTML = `
        <div class="detail-gallery">
          <figure class="detail-main-photo">
            <img src="${listing.image}" alt="${escapeHtml(listing.name)}" referrerpolicy="no-referrer" />
            <span class="photo-count"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="9" cy="10" r="2"></circle><path d="m21 15-5-5L5 19"></path></svg>12 photos</span>
          </figure>
          <div class="detail-thumb-stack">
            <figure class="detail-thumb"><img src="${secondImage}" alt="Additional view" loading="lazy" referrerpolicy="no-referrer" /></figure>
            <figure class="detail-thumb"><img src="${thirdImage}" alt="Additional view" loading="lazy" referrerpolicy="no-referrer" /></figure>
          </div>
        </div>
        <div class="detail-summary">
          <div class="detail-eyebrow">${escapeHtml(listing.category)}</div>
          <h1>${escapeHtml(listing.name)}</h1>
          <div class="detail-rating-row">
            <span class="detail-rating-pill"><span class="star">★</span>${listing.rating.toFixed(1)} <span>(${listing.reviews.toLocaleString("en-NZ")})</span></span>
            <span class="detail-status ${openClass}">${listing.open ? "Open now" : "Closed"}</span>
            <span>·</span><span>${listing.price}</span><span>·</span><span>${listing.distance.toFixed(1)} km</span>
          </div>
          <p class="detail-summary-copy">${escapeHtml(listing.description)}</p>
          <div class="detail-quick-facts">
            <div class="detail-fact"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg><span>${escapeHtml(listing.address)}, ${escapeHtml(city)}, New Zealand</span></div>
            <div class="detail-fact"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4 5 6c-1 1 0 5 4 9s8 5 9 4l2-2-4-3-2 2c-1-1-3-2-4-3s-2-3-3-4l2-2-2-3Z"></path></svg><span>${escapeHtml(listing.phone || "Contact details unavailable")}</span></div>
            <div class="detail-fact"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M4 12h16M12 4c2.2 2.3 3.3 5 3.3 8S14.2 17.7 12 20M12 4C9.8 6.3 8.7 9 8.7 12S9.8 17.7 12 20"></path></svg><span>${escapeHtml(listing.website || "Website unavailable")}</span></div>
          </div>
        </div>`;

      detailMainColumn.innerHTML = `
        <section class="detail-section prism-panel">
          <div class="section-kicker">Overview</div><h2>About this place</h2>
          <p>${escapeHtml(listing.description)} This demo detail view is structured for richer Google Places or directory data, including business descriptions, amenities, service options, accessibility, opening information and additional listing attributes.</p>
          <div class="feature-grid">${features.map(([label, icon]) => `<div class="feature-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${icon}</svg><span>${label}</span></div>`).join("")}</div>
        </section>

        <section class="detail-section prism-panel">
          <div class="section-kicker">Plan your visit</div><h2>Hours & contact</h2>
          <div class="info-grid">
            <div class="info-block"><div class="info-label">Address</div><div class="info-value">${escapeHtml(listing.address)}<br>${escapeHtml(city)}, New Zealand</div></div>
            <div class="info-block"><div class="info-label">Contact</div><div class="info-value">${escapeHtml(listing.phone || "Not available")}<br>${escapeHtml(listing.website || "Website not available")}</div></div>
          </div>
          <div class="hours-list">
            <div class="hours-row"><span>Monday</span><strong>8:00 am – 5:00 pm</strong></div>
            <div class="hours-row"><span>Tuesday</span><strong>8:00 am – 5:00 pm</strong></div>
            <div class="hours-row"><span>Wednesday</span><strong>8:00 am – 5:00 pm</strong></div>
            <div class="hours-row"><span>Thursday</span><strong>8:00 am – 7:00 pm</strong></div>
            <div class="hours-row"><span>Friday</span><strong>8:00 am – 7:00 pm</strong></div>
            <div class="hours-row"><span>Saturday</span><strong>9:00 am – 5:00 pm</strong></div>
            <div class="hours-row"><span>Sunday</span><strong>9:00 am – 4:00 pm</strong></div>
          </div>
        </section>

        <section class="detail-section prism-panel">
          <div class="section-kicker">Reputation</div><h2>Rating overview</h2>
          <div class="info-grid">
            <div class="info-block"><div class="info-label">Google-style rating</div><div class="info-value"><strong>${listing.rating.toFixed(1)} / 5</strong><br>${listing.reviews.toLocaleString("en-NZ")} reviews</div></div>
            <div class="info-block"><div class="info-label">Prism signal</div><div class="info-value"><strong>${listing.rating >= 4.7 ? "Excellent" : listing.rating >= 4.4 ? "Very good" : "Good"}</strong><br>Strong local discovery match</div></div>
          </div>
        </section>`;

      detailSidebar.innerHTML = `
        <section class="side-panel prism-panel">
          <div class="section-kicker">Tags</div><h3>Good to know</h3>
          <div class="tag-cloud">${tags.map((tag) => `<span class="detail-tag">${escapeHtml(tag)}</span>`).join("")}</div>
        </section>
        <section class="side-panel prism-panel">
          <div class="section-kicker">Related</div><h3>Explore more</h3>
          <div class="side-related-list">
            <div class="side-related-item"><span>${escapeHtml(listing.category.split("·")[0].trim())}</span><span>›</span></div>
            <div class="side-related-item"><span>Nearby places</span><span>›</span></div>
            <div class="side-related-item"><span>Top rated in ${escapeHtml(city)}</span><span>›</span></div>
            <div class="side-related-item"><span>Open now</span><span>›</span></div>
          </div>
        </section>
        <section class="side-panel prism-panel detail-actions-panel">
          <button class="detail-action-wide primary" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 8 8-8 8-8-8 8-8Z"></path><path d="M9 11h6M13 9l2 2-2 2"></path></svg>Get directions</button>
          <button class="detail-action-wide" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4 5 6c-1 1 0 5 4 9s8 5 9 4l2-2-4-3-2 2c-1-1-3-2-4-3s-2-3-3-4l2-2-2-3Z"></path></svg>Call ${escapeHtml(listing.phone || "place")}</button>
        </section>`;

      renderSimilarPlaces(listing);
    }

    function openListingDetail(listing) {
      activeDetailListingId = listing.id;
      renderListingDetail(listing);
      resultsSection.classList.remove("is-visible");
      resultsSection.hidden = true;
      detailPage.hidden = false;
      document.body.classList.add("has-results", "has-detail");
      requestAnimationFrame(() => {
        detailPage.classList.add("is-visible");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      searchStatus.innerHTML = `Viewing <strong>${escapeHtml(listing.name)}</strong>`;
    }

    function closeListingDetail() {
      activeDetailListingId = null;
      detailPage.classList.remove("is-visible");
      detailPage.hidden = true;
      document.body.classList.remove("has-detail");
      resultsSection.hidden = false;
      requestAnimationFrame(() => resultsSection.classList.add("is-visible"));
      renderResults();
      setTimeout(() => resultsSection.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }

    backToResults.addEventListener("click", closeListingDetail);
    similarStrip.addEventListener("click", (event) => {
      const button = event.target.closest("[data-similar-detail]");
      if (!button) return;
      const listing = demoListings.find((item) => item.id === Number(button.dataset.similarDetail));
      if (listing) openListingDetail(listing);
    });
    detailSave.addEventListener("click", () => detailSave.classList.toggle("is-saved"));

    resultsGrid.addEventListener("click", (event) => {
      const saveButton = event.target.closest(".save-place");
      if (saveButton) {
        saveButton.classList.toggle("is-saved");
        return;
      }

      const detailButton = event.target.closest("[data-demo-detail]");
      if (detailButton) {
        const listing = demoListings.find((item) => item.id === Number(detailButton.dataset.demoDetail));
        if (listing) openListingDetail(listing);
      }
    });


    function updateClearSearchButton() {
      const hasCriteria = Boolean(searchInput.value.trim()) ||
        selectedCategory !== "All categories" ||
        selectedCity !== "All New Zealand" ||
        !resultsSection.hidden;
      clearSearchButton.hidden = !hasCriteria;
    }

    function clearSearchExperience() {
      closePickers();
      searchInput.value = "";
      selectedCategory = "All categories";
      selectedCity = "All New Zealand";
      categoryLabel.textContent = "Explore";
      cityLabel.textContent = "New Zealand";
      categorySearch.value = "";
      citySearch.value = "";
      renderCategories();
      renderCities();

      resetFilters.click();
      activeDetailListingId = null;
      detailPage.classList.remove("is-visible");
      detailPage.hidden = true;
      document.body.classList.remove("has-detail");
      resultsSection.classList.remove("is-visible");
      resultsSection.hidden = true;
      document.body.classList.remove("has-results");
      searchStatus.textContent = "";
      updateClearSearchButton();
      window.scrollTo({ top: 0, behavior: "smooth" });
      searchInput.focus({ preventScroll: true });
    }

    clearSearchButton.addEventListener("click", clearSearchExperience);
    searchInput.addEventListener("input", updateClearSearchButton);

    function runSearchAnimation() {
      searchShell.classList.add("is-searching");
      clearTimeout(searchAnimationTimer);
      searchAnimationTimer = setTimeout(() => searchShell.classList.remove("is-searching"), 1800);
    }

    function buildSearchSummary(query) {
      const parts = [];
      if (query) parts.push(`“${query}”`);
      if (selectedCategory !== "All categories") parts.push(selectedCategory);
      if (selectedCity !== "All New Zealand") parts.push(`in ${selectedCity}`);
      return parts.join(" · ") || "all places across New Zealand";
    }

    function performSearch(query) {
      const cleanedQuery = query.trim();
      const hasCategory = selectedCategory !== "All categories";
      const hasCity = selectedCity !== "All New Zealand";

      if (!cleanedQuery && !hasCategory && !hasCity) {
        searchInput.focus();
        searchStatus.textContent = "Type a keyword, choose a category, or select a New Zealand city.";
        return;
      }

      closePickers();
      updateClearSearchButton();
      runSearchAnimation();
      const summary = buildSearchSummary(cleanedQuery);
      searchStatus.innerHTML = `Searching Prism for <strong>${escapeHtml(summary)}</strong>…`;

      /*
        Connect this object to Google Places / your backend search endpoint.
        const criteria = {
          query: cleanedQuery,
          category: selectedCategory,
          city: selectedCity
        };
      */
      setTimeout(() => {
        searchStatus.innerHTML = `Showing demo results for <strong>${escapeHtml(summary)}</strong>.`;
        revealResults();
      }, 620);
    }

    searchShell.addEventListener("submit", (event) => {
      event.preventDefault();
      performSearch(searchInput.value);
    });

    document.querySelectorAll(".quick-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const category = chip.dataset.category;
        if (category) {
          selectedCategory = category;
          categoryLabel.textContent = category;
          renderCategories();
        }
        searchInput.value = chip.dataset.query || chip.textContent.trim();
        updateClearSearchButton();
        searchInput.focus();
        performSearch(searchInput.value);
      });
    });

    function escapeHtml(value) {
      const element = document.createElement("div");
      element.textContent = value;
      return element.innerHTML;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = "en-NZ";

      micButton.addEventListener("click", () => {
        closePickers();
        try { recognition.start(); } catch { /* Ignore duplicate starts. */ }
      });

      recognition.addEventListener("start", () => {
        micButton.classList.add("is-listening");
        searchStatus.textContent = "Listening…";
      });

      recognition.addEventListener("result", (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) transcript += event.results[i][0].transcript;
        searchInput.value = transcript;
        const lastResult = event.results[event.results.length - 1];
        if (lastResult.isFinal) performSearch(searchInput.value);
      });

      recognition.addEventListener("end", () => micButton.classList.remove("is-listening"));
      recognition.addEventListener("error", (event) => {
        micButton.classList.remove("is-listening");
        searchStatus.textContent = event.error === "not-allowed"
          ? "Microphone permission is required for voice search."
          : "Voice input could not be started.";
      });
    } else {
      micButton.disabled = true;
      micButton.title = "Voice search is not supported in this browser";
      micButton.style.opacity = "0.45";
      micButton.style.cursor = "not-allowed";
    }

    renderCategories();
    renderCities();

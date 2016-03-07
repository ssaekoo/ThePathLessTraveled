User.create!(username: "Ssaekoo", password: "baough")
User.create!(username: "SarahKerrigan", password: "SarahKerrigan")
User.create!(username: "KateLockwell", password: "KateLockwell")
User.create!(username: "TychusFindlay", password: "TychusFindlay")
User.create!(username: "JimRaynor", password: "JimRaynor")
User.create!(username: "EdmundDuke", password: "EdmundDuke")
User.create!(username: "SamirDuran", password: "SamirDuran")
User.create!(username: "GerardDuGalle", password: "GerardDuGalle")
User.create!(username: "AlexeiStukov", password: "AlexeiStukov")


Trek.create!(title: "Sykes",
    author_id: 2,
    description: "Hike in Big Sur",
    start_elv: 400,
    peak_elv: 1500,
    elv_measure: "feet",
    duration: 2,
    dur_measure: "days",
    length: 20,
    len_measure: "miles",
    last_edited: 1
    )

Trek.create!(title: "Tiger Leaping Gorge",
    author_id: 1,
    description: "Hike near the Himalayas",
    start_elv: 5905,
    peak_elv: 12434,
    elv_measure: "feet",
    duration: 3,
    dur_measure: "days",
    length: 25,
    len_measure: "miles",
    last_edited: 1
    )

Trek.create!(title: "Lost Coast",
     author_id: 3,
     description: "Hike the coast of California",
     start_elv: 50,
     peak_elv: 100,
     elv_measure: "feet",
     duration: 2,
     dur_measure: "days",
     length: 24,
     len_measure: "miles",
     last_edited: 1
     )

Trek.create!(title: "Yosemite",
      author_id: 4,
      description: "Hike the whole of Yosemite",
      start_elv: 1800,
      peak_elv: 11500,
      elv_measure: "feet",
      duration: 7,
      dur_measure: "days",
      length: 150,
      len_measure: "miles",
      last_edited: 1
      )

Trek.create!(title: "Grand Canyon",
      author_id: 5,
      description: "Hike to the bottom of the Grand Canyon and back",
      start_elv: 5905,
      peak_elv: 12434,
      elv_measure: "feet",
      duration: 2,
      dur_measure: "days",
      length: 44,
      len_measure: "miles",
      last_edited: 1
      )

Trek.create!(title: "Point Reyes",
    author_id: 6,
    description: "Point Reyes",
    start_elv: 0,
    peak_elv: 1400,
    elv_measure: "feet",
    duration: 3,
    dur_measure: "days",
    length: 57,
    len_measure: "miles",
    last_edited: 1
    )

Trek.create!(title: "Hua Shan",
    author_id: 7,
    description: "The most dangerous hike in the world",
    start_elv: 1614,
    peak_elv: 7087,
    elv_measure: "feet",
    duration: 1,
    dur_measure: "days",
    length: 3,
    len_measure: "miles",
    last_edited: 1
    )

Trek.create!(title: "Angel Island",
    author_id: 8,
    description: "Beautiful day hike by ferry from SF",
    start_elv: 0,
    peak_elv: 300,
    elv_measure: "feet",
    duration: 1,
    dur_measure: "days",
    length: 6,
    len_measure: "miles",
    last_edited: 1
    )

Review.create!(user_id: 1,
      trek_id: 1,
      title: "Beautiful, but crowded",
      body: "The Trail is beautiful. I enjoyed both open vista with cool mountains and forest scenery. Forest is peaceful. But it has become crowded.",
      rating: 3.5,
      difficulty: 2.5
      )

Review.create!(user_id: 1,
      trek_id: 1,
      title: "Just Okay",
      body: "The trail had amazing views the main cherry on the top (Sykes hot springs) was not so cheery..it was dirty at least the one above the main hot spring. The main one was full of people and there was a naked women in there, disgusting and rude. I do recommend bringing flashlights, toilet paper, lots and lots of water/snacks, hiking shoes..not runninng shoes.. Like i did lol and a fly swatter.",
      rating: 2.5,
      difficulty: 4.5
      )

Review.create!(user_id: 2,
      trek_id: 1,
      title: "Tiring",
      body: "Just completed this hike yesterday- by far the most challenging hike I've ever done. I went in a small group of all very experienced hikers- all of us in great shape- and I will be recovering fora week at least. Yes, the first 5 miles is the hardest and will rock you if you don't pace yourself. Other reviews say it gets easier after your past the beginning. Don't be fooled- the entire hike is a process of climbing up and down ridges - gaining a lot of altitude over and over. Seriously, you climb at least 8 of these ridges.",
      rating: 2.5,
      difficulty: 4.5
      )

Review.create!(user_id: 3,
      trek_id: 1,
      title: "Had an AWESOME time",
      body: "Love love this trail!   It we are staying one night then we just pack in 5 miles and set up camp at the halfway point, then day trip to the springs and back.  This past time we stayed 2 nights and packed all the way into the springs.  So awesome Being there at night!!",
      rating: 4.5,
      difficulty: 4.5
      )

Review.create!(user_id: 4,
      trek_id: 1,
      title: "Beautiful, but crowded",
      body: "An amazingly beautiful hotsprings and river! The 10 mile hike was well worth the refreshing reward of being a serene nature for 2 nights. Other hikers on the trail were friendly and campers and soakers took care of the hotsprings and sites. The 10 miles back to car felt much easier as I was so refreshed from the hotsprings. Spring was a lovely time to go as we saw lots of wildflowers and the tempertures were pleasant. I will definetly be back!",
      rating: 4.5,
      difficulty: 4.5
      )

Review.create!(user_id: 1,
      trek_id: 2,
      title: "Indescribable",
      body: "Amazingly beautiful place. However be careful while enjoying the sights, this is not a trail that you would want any missteps.",
      rating: 5.0,
      difficulty: 4.5
      )

Review.create!(user_id: 5,
      trek_id: 2,
      title: "Awesome Place!!",
      body: "Lovely everything about Tiger Leaping Gorge, this place just kicks ...!! The hiking trails are super with beautiful views. The people you meet along the way make this trip also, stayed at the halfway inn and loved it, The staff are lovely, plenty beer and yummy cooking, what more could u ask for after some great hiking. Outstanding trip, highlight of china trip",
      rating: 5.0,
      difficulty: 4.5
      )

Review.create!(user_id: 6,
      trek_id: 2,
      title: "Breathtaking",
      body: "I would suggest hiking the whole path, not only the gorges. It takes almost two days, and you can spend the night in one of the guest houses along the path. Tiger Leaping Gorges are not for the faint-hearted, good health conditions are required, but it is not required to be a professional hiker to achieve the goal. The views are amazing, nature shows itself at the strongest, and it it definitely an experience worth the effort.",
      rating: 5.0,
      difficulty: 4.5
      )

Review.create!(user_id: 7,
      trek_id: 3,
      title: "Great for the family",
      body: "Great trip. I take my son and nephews aged 11 to 14 backpacking each year at different locations. They all agreed this was the best trip yet. We took three nights and four days for a more leisurely pace with camps at Cooskie Creek, Big Creek, and Shipman Creek.",
      rating: 5.0,
      difficulty: 3.0
      )

Review.create!(user_id: 7,
      trek_id: 3,
      title: "Great for the family",
      body: "Great trip. I take my son and nephews aged 11 to 14 backpacking each year at different locations. They all agreed this was the best trip yet. We took three nights and four days for a more leisurely pace with camps at Cooskie Creek, Big Creek, and Shipman Creek.",
      rating: 5.0,
      difficulty: 3.0
      )

Review.create!(user_id: 7,
      trek_id: 3,
      title: "Fun and casual",
      body: "I visited this place last december.. will definitely visit again",
      rating: 5.0,
      difficulty: 1.5
      )

Review.create!(user_id: 7,
      trek_id: 3,
      title: "Great for the family",
      body: "Great trip. I take my son and nephews aged 11 to 14 backpacking each year at different locations. They all agreed this was the best trip yet. We took three nights and four days for a more leisurely pace with camps at Cooskie Creek, Big Creek, and Shipman Creek.",
      rating: 5.0,
      difficulty: 3.0
      )

Review.create!(user_id: 8,
      trek_id: 4,
      title: "Not for the faint-hearted",
      body: "This was a workout, very steep hike with lots of steps and elevation gain; an extreme thigh burning hike but worth every step! The views were incredible, actually, no words can describe the amazing beauty of this hike. An experience not to be missed!",
      rating: 5.0,
      difficulty: 5.0
      )

Review.create!(user_id: 8,
      trek_id: 5,
      title: "Spectacular View beware of squirrels",
      body: "Fantastic hike, going down is easy, coming back is hard on your butt. Only thing to be cautious of are the aggressive squirrels. I recall reading that squirrels in the Grand Canyon carry the bubonic plague",
      rating: 5.0,
      difficulty: 4.0
      )

Review.create!(user_id: 8,
      trek_id: 6,
      title: "Stroll in the Park with the Family",
      body: "We are a family of backpackers. We brought our 8 and 10 year old along for this hike and they loved it. Very easy and family friendly!",
      rating: 5.0,
      difficulty: 2.0
      )

Review.create!(user_id: 9,
      trek_id: 7,
      title: "The Ultimate Adrenaline Rush",
      body: "This was on my bucket list for years. Finally did it and loved it! I never felt more alive.",
      rating: 5.0,
      difficulty: 5.0
      )

Review.create!(user_id: 1,
      trek_id: 8,
      title: "Great relaxing hike",
      body: "Beautiful bay scenery. Nice and easy hike. Would go again, but next time I'll bring my bike.",
      rating: 5.0,
      difficulty: 5.0
      )

Picture.create!(author_id: 2,
      trek_id: 1,
      url: 'sykes0.jpg'
      )

Picture.create!(author_id: 1,
      trek_id: 2,
      url: 'tigerLeapingGorge0.jpg'
      )

Picture.create!(author_id: 1,
      trek_id: 2,
      url: 'tigerLeapingGorge1.jpg'
      )

Picture.create!(author_id: 1,
      trek_id: 2,
      url: 'tigerLeapingGorge2.jpg'
      )

Picture.create!(author_id: 1,
      trek_id: 2,
      url: 'tigerLeapingGorge3.jpg'
      )

Picture.create!(author_id: 1,
      trek_id: 2,
      url: 'tigerLeapingGorge4.jpg'
      )

# Picture.create!(author_id: 1,
#       trek_id: 2,
#       url: 'tigerLeapingGorge5.jpg'
#       )

Picture.create!(author_id: 1,
      trek_id: 2,
      url: 'tigerLeapingGorge6.jpg'
      )

Picture.create!(author_id: 1,
      trek_id: 2,
      url: 'tigerLeapingGorge7.jpg'
      )

Picture.create!(author_id: 3,
      trek_id: 3,
      url: 'lostCoast0.jpg'
      )

Picture.create!(author_id: 4,
      trek_id: 4,
      url: 'yosemite0.jpg'
      )

Picture.create!(author_id: 4,
      trek_id: 4,
      url: 'yosemite1.jpg'
      )

Picture.create!(author_id: 5,
      trek_id: 5,
      url: 'grandCanyon0.jpg'
      )

Picture.create!(author_id: 6,
      trek_id: 6,
      url: 'pointReyes0.jpg'
      )

Picture.create!(author_id: 6,
      trek_id: 6,
      url: 'pointReyes1.jpg'
      )

Picture.create!(author_id: 6,
      trek_id: 6,
      url: 'pointReyes2.jpg'
      )

Picture.create!(author_id: 6,
      trek_id: 6,
      url: 'pointReyes3.jpg'
      )

Picture.create!(author_id: 7,
      trek_id: 7,
      url: 'huaShan0.jpg'
      )

Picture.create!(author_id: 7,
      trek_id: 7,
      url: 'huaShan1.jpg'
      )

Picture.create!(author_id: 7,
      trek_id: 7,
      url: 'huaShan2.jpg'
      )

Picture.create!(author_id: 7,
      trek_id: 7,
      url: 'huaShan3.jpg'
      )

Picture.create!(author_id: 7,
      trek_id: 7,
      url: 'huaShan4.jpg'
      )

Picture.create!(author_id: 7,
      trek_id: 7,
      url: 'huaShan5.jpg'
      )

Picture.create!(author_id: 7,
      trek_id: 7,
      url: 'huaShan6.jpg'
      )

Picture.create!(author_id: 7,
      trek_id: 8,
      url: 'angelsIsland0.jpg'
      )

Tag.create!(tag_name: 'Beginner')

Tag.create!(tag_name: 'Intermediate')

Tag.create!(tag_name: 'Expert')

Tag.create!(tag_name: 'Req_equipment')

Tag.create!(tag_name: 'Multi_day')

Tag.create!(tag_name: 'Single_day')

Tag.create!(tag_name: 'Famous')

Tag.create!(tag_name: 'Populous')

Tag.create!(tag_name: 'Deserted')

Tag.create!(tag_name: 'Water_crossing')

Tag.create!(tag_name: 'Mountainous')

Tag.create!(tag_name: 'Family_oriented')

Tagging.create!(trek_id: 1,
      tag_id: 2
      )

Tagging.create!(trek_id: 1,
      tag_id: 5
      )

Tagging.create!(trek_id: 1,
      tag_id: 7
      )

Tagging.create!(trek_id: 1,
      tag_id: 8
      )

Tagging.create!(trek_id: 1,
      tag_id: 12
      )

Tagging.create!(trek_id: 2,
      tag_id: 2
      )

Tagging.create!(trek_id: 2,
      tag_id: 5
      )

Tagging.create!(trek_id: 2,
      tag_id: 7
      )

Tagging.create!(trek_id: 2,
      tag_id: 9
      )

Tagging.create!(trek_id: 2,
      tag_id: 11
      )

Tagging.create!(trek_id: 3,
      tag_id: 1
      )

Tagging.create!(trek_id: 3,
      tag_id: 5
      )

Tagging.create!(trek_id: 3,
      tag_id: 7
      )

Tagging.create!(trek_id: 3,
      tag_id: 9
      )

Tagging.create!(trek_id: 3,
      tag_id: 12
      )

Tagging.create!(trek_id: 4,
      tag_id: 3
      )

Tagging.create!(trek_id: 4,
      tag_id: 4
      )

Tagging.create!(trek_id: 4,
      tag_id: 5
      )

Tagging.create!(trek_id: 4,
      tag_id: 9
      )

Tagging.create!(trek_id: 4,
      tag_id: 10
      )

Tagging.create!(trek_id: 4,
      tag_id: 11
      )

Tagging.create!(trek_id: 5,
      tag_id: 2
      )

Tagging.create!(trek_id: 5,
      tag_id: 5
      )

Tagging.create!(trek_id: 5,
      tag_id: 7
      )

Tagging.create!(trek_id: 5,
      tag_id: 8
      )

Tagging.create!(trek_id: 5,
      tag_id: 11
      )

Tagging.create!(trek_id: 6,
      tag_id: 1
      )

Tagging.create!(trek_id: 6,
      tag_id: 5
      )

Tagging.create!(trek_id: 6,
      tag_id: 7
      )

Tagging.create!(trek_id: 6,
      tag_id: 12
      )

Tagging.create!(trek_id: 6,
      tag_id: 1
      )

Tagging.create!(trek_id: 6,
      tag_id: 5
      )

Tagging.create!(trek_id: 6,
      tag_id: 7
      )

Tagging.create!(trek_id: 6,
      tag_id: 12
      )

Tagging.create!(trek_id: 7,
      tag_id: 2
      )

Tagging.create!(trek_id: 7,
      tag_id: 6
      )

Tagging.create!(trek_id: 7,
      tag_id: 7
      )

Tagging.create!(trek_id: 7,
      tag_id: 8
      )

Tagging.create!(trek_id: 7,
      tag_id: 11
      )

Tagging.create!(trek_id: 8,
      tag_id: 1
      )

Tagging.create!(trek_id: 8,
      tag_id: 4
      )

Tagging.create!(trek_id: 8,
      tag_id: 6
      )

Tagging.create!(trek_id: 8,
      tag_id: 7
      )

Tagging.create!(trek_id: 8,
      tag_id: 8
      )

Tagging.create!(trek_id: 8,
      tag_id: 11
      )

Location.create!(trek_id: 1,
      trek_name: "Sykes",
      country: "United States",
      city: "Big Sur",
      state: "California",
      latitude: 36.1075,
      longitude: -121.6258
      )

Location.create!(trek_id: 2,
      trek_name: "Tiger Leaping Gorge",
      country: "China",
      city: "Lijiang",
      state: "",
      latitude: 26.8833,
      longitude: 100.2333
      )

Location.create!(trek_id: 3,
      trek_name: "Lost Coast",
      country: "United States",
      city: "Lost Coast",
      state: "California",
      latitude: 40.4401,
      longitude: -124.4095
      )

Location.create!(trek_id: 4,
      trek_name: "Yosemite",
      country: "United States",
      city: "Mariposa",
      state: "California",
      latitude: 37.8499,
      longitude: -119.5677
      )

Location.create!(trek_id: 5,
      trek_name: "Grand Canyon",
      country: "United States",
      city: "Flagstaff",
      state: "Arizona",
      latitude: 36.1000,
      longitude: -112.1000
      )

Location.create!(trek_id: 6,
      trek_name: "Point Reyes",
      country: "United States",
      city: "San Francisco",
      state: "California",
      latitude: 37.9968,
      longitude: -123.0198
      )

Location.create!(trek_id: 7,
      trek_name: "Hua Shan",
      country: "China",
      city: "Huayin",
      state: "",
      latitude: 34.4833,
      longitude: 110.0833
      )

Location.create!(trek_id: 8,
      trek_name: "Angel Island",
      country: "United States",
      city: "San Francisco",
      state: "California",
      latitude: 37.8600,
      longitude: -122.4300
      )

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
    location: "California",
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
    location: "China",
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
     location: "California",
     author_id: 3,
     description: "Hike near the Himalayas",
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
      location: "California",
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
      location: "Arizona",
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

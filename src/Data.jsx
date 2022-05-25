const DATA = [
    {
      "id": 1,
      "title": "The Alchemist",
      "price": "Rs:300",
      "author": "by Paulo Coelho",
      "category": "fiction",
      "description": "A novel rich in metaphors and symbolism, The Alchemist is a story based on the adventures of a young shepherd boy, who, upon deciding to follow his prophetic dreams, sets on a treasure hunt.",
      "image": "https://5.imimg.com/data5/WA/IN/MY-11183377/the-alchemist-500x500.png"
    },
    {
      "id": 2,
      "title": "Ugly Love",
      "price": "Rs:250",
      "author": "by Colleen Hoover",
      "category": "fiction",
      "description": "Tate Collins forms an undeniable mutual attraction with airline pilot Miles Archer, and the pair attempt to define a set of rules that will prevent them from falling in love.",
      "image": "https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzQxZzlSZk5WWkJMLl9TUzQwMF8uanBn.jpg"
    },
    {
      "id": 3,
      "title": "The Rudest Book Ever",
      "price": "Rs:400",
      "author": "by Shwetabh Gangwar",
      "category": "fiction",
      "description": "In the process, the author has picked up on a simple pattern: people need a set of principles and perspectives to protect them from all the unnecessary bullshit they go through. Codes to live by, essentially.",
      "image": "https://images-na.ssl-images-amazon.com/images/I/81U3+6n3s1L.jpg"
    },
    {
      "id": 4,
      "title": "Milk and Honey",
      "price": "Rs:300",
      "author": "by Rupi Kaur",
      "category": "fiction",
      "description": "A collection of poetry and prose about survival, about the experience of violence, abuse, love, loss, and femininity.",
      "image": "https://n4.sdlcdn.com/imgs/b/l/c/Milk-and-Honey-SDL283681295-1-919a1.jpg"
    },
    {
      "id": 5,
      "title": "Man's Search for Meaning",
      "price": "Rs:400",
      "author": "by Viktor E Frankl",
      "category": "fiction",
      "description": "Frankl's Man's Search for Meaning provides a vivid account of an individual's experience as a prisoner in a Nazi concentration camp. The book focuses on love, hope, responsibility, inner freedom, and the beauty to be found in both nature and art as means that help one endure and overcome harrowing experiences.",
      "image": "https://rukminim2.flixcart.com/image/416/416/l34ry4w0/regionalbooks/h/o/r/man-s-search-for-meaning-original-imagebpf7cxufu3f.jpeg?q=70"
    },
    {
      "id": 6,
      "title": "The Girl on the Train",
      "price": "Rs:200",
      "author": "by Paula Hawkins",
      "category": "fiction",
      "description": "The Girl on the Train, by Paula Hawkins, is a psychological thriller that revolves around a girl whose life is exposed to dramatic turnarounds from her normal train journeys.",
      "image": "https://n3.sdlcdn.com/imgs/c/4/8/The-Girl-On-The-Train-SDL354976218-1-68366.jpg"
    },
    {
      "id": 7,
      "title": "The Intelligent Investor",
      "price": "Rs:550",
      "author": "by Benjamin Graham",
      "category": "philosophy",
      "description": "DEFINITIVE BOOK ON VALUE INVESTING",
      "image": "https://rukminim2.flixcart.com/image/416/416/kpvivm80/regionalbooks/2/o/1/the-intelligent-investor-very-effective-original-imag4y4sw3w3tvfn.jpeg?q=70"
    },
    {
      "id": 8,
      "title": "Unlimited Power",
      "price": "Rs:600",
      "author": "by Anthony Robbins",
      "category": "philosophy",
      "description": "Unlimited Power by Anthony Robbins is an international bestseller and has gain a lot of popularity among the readers. This book basically covers the major questions of every humans life that is what a person wants to achieve and how can he achieve what he wants.",
      "image": "https://n3.sdlcdn.com/imgs/b/s/v/Unlimited-Power-SDL714125899-1-55e76.jpg"
    },
    {
      "id": 9,
      "title": "The Secret",
      "price": "Rs:300",
      "author": "by Rhonda Byrne",
      "category": "philosophy",
      "description": "The Secret is the Law of Attraction, which says that “like attracts like”, and our thoughts create our lives. In this book, Rhonda Byrne explains The Secret–including stories, quotes, and perspectives from New Age and self-help gurus and famous personalities like Einstein, Jung, and Emerson)–and outlines how to apply it to achieve what we want in our lives. ",
      "image": "https://n3.sdlcdn.com/imgs/j/f/2/The-Secret-English-Paperback-Byrne-SDL877034131-1-47370.jpeg"
    },
    {
      "id": 10,
      "title": "India Past and Present",
      "price": "Rs:800",
      "author": "by  H Forbes-Lindsay",
      "category": "philosophy",
      "description": "The book gives a popular history of the various people of India, geographical information, and a narrative of the history of various cities of India. ",
      "image": "https://n3.sdlcdn.com/imgs/k/a/9/India-Past-And-Present-SDL136248277-1-14a76.jpg"
    },
    {
      "id": 11,
      "title": "Think Like A Monk",
      "price": "Rs:450",
      "author": "by Jay Shetty",
      "category": "philosophy",
      "description": "In this inspiring, empowering book, Shetty draws on his time as a monk in the Vedic tradition to show us how we can the roadblocks to our potential and power.",
      "image": "https://n3.sdlcdn.com/imgs/j/y/q/Combo-of-the-alchemist-think-SDL646235712-1-2d5c2.jpg"
    },
    {
      "id": 12,
      "title": "The Orchid Stud-Book",
      "price": "Rs:600",
      "author": "by Robert Allen Rolfe",
      "category": "philosophy",
      "description": "THE object of the work is to provide an authentic list of existing Orchid hybrids of artificial origin, arranged on a uniform system, so as to show at a glance the crosses that have already been made, the adopted name of the hybrids, the works in which they have been described and figured, the original raiser or exhibitor, and the date of first flowering.",
      "image": "https://n2.sdlcdn.com/imgs/k/a/9/The-Orchid-Stud-Book-SDL186602803-1-08930.jpg"
    },
    {
      "id": 13,
      "title": "University of Delhi (DU) M.A. English Entrance Test Guide",
      "price": "Rs:350",
      "author": "",
      "category": "competitive exams",
      "description": "This comprehensive book is useful for MA (English) Entrance Test for the purpose of Study and practice of questions based on the latest pattern of the examination. This book included Study Material for Better Understanding of the Candidates",
      "image": "https://n1.sdlcdn.com/imgs/g/r/6/DU-M-A-English-Entrance-SDL617809678-1-1eda9.jpg"
    },
    {
      "id": 14,
      "title": "RRB NTPC CBT-II Mock Papers 2021-22",
      "price": "Rs:550",
      "author": "",
      "category": "competitive exams",
      "description": "Adda247 brings to your 20+ RRB NTPC 2021-22 Mock Test Papers ENGLISH EDITION Book that incorporates mock papers that you need to practice to crack the RRB NTPC CBT -2 exam.",
      "image": "https://n1.sdlcdn.com/imgs/k/c/k/RRB-NTPC-CBT-II-Mock-SDL094205643-1-eaceb.jpg"
    },
    {
      "id": 15,
      "title": "Adda247 SBI PO Prelims 2020 Books Kit",
      "price": "Rs:1000",
      "author": "",
      "category": "competitive exams",
      "description": "ADDA247 is launching the SBI PO Prelims 2020 Books Kit (English Printed Edition) by Adda247 Publications include 3 Printed Books (English Edition)The books is updated as per the latest examination pattern and is suitable for all the Banking & Insurance Examinations such as SBI, RBI, IBPS, LIC, & Others.",
      "image": "https://n4.sdlcdn.com/imgs/j/d/q/Adda247-SBI-PO-Prelims-2020-SDL002693379-1-72491.png"
    },
    {
      "id": 16,
      "title": "100 SSC CGL Books for Tier-I Previous Year Question Papers ",
      "price": "Rs:700",
      "author": "",
      "category": "competitive exams",
      "description": "Adda247 brings you the most efficient Practice Book for SSC CGL Tier-I Exam 2020-2021. The wait is over now! As you can start practicing right away with previous years’ papers and practice papers available in this Book. ",
      "image": "https://n1.sdlcdn.com/imgs/j/q/e/100-SSC-CGL-Books-for-SDL004954249-1-dcd10.jpg"
    },
    {
      "id": 17,
      "title": "Objective General Science For Competitive Examinations",
      "price": "Rs:200",
      "author": "",
      "category": "competitive exams",
      "description": "Oswal’s Objective General Science (High score series) is a complete two year strategy for studying science in a comprehensive way that helps you succeed in any competitive exam.",
      "image": "https://n4.sdlcdn.com/imgs/j/r/1/Objective-General-Science-For-Competitive-SDL504610114-1-9d7f7.jpg"
    },
    {
      "id": 18,
      "title": "Lucent Objective General Knowledge Paperback",
      "price": "Rs:500",
      "author": "",
      "category": "competitive exams",
      "description": "Objective General Knowledge 3/E Pb",
      "image": "https://n2.sdlcdn.com/imgs/b/b/n/Objective-General-Knowledge-3-E-SDL185590777-1-cecf2.jpg"
    },
    {
      "id": 19,
      "title": "IKIGAI",
      "price": "Rs:200",
      "author": "by Garcia Hector",
      "category": "self help",
      "description": "Inspiring and comforting, this book will give you the life-changing tools to uncover your personal ikigai. It will show you how to leave urgency behind, find your purpose, nurture friendships and throw your self into your passions.",
      "image": "https://n2.sdlcdn.com/imgs/j/s/h/IKIGAI-English-Hardcover-Garcia-Hector-SDL947335178-1-1c6be.jpg"
    },
    {
      "id": 20,
      "title": "Rich Dad Poor Dad",
      "price": "Rs:300",
      "author": "by Robert T Kiyosaki",
      "category": "self help",
      "description": "The book compares the difference in attitudes between the approaches in two individuals towards wealth and financial security; one is the author's own father, the poor dad and the other is his friend’s father, the rich dad. ",
      "image": "https://n2.sdlcdn.com/imgs/j/i/y/Rich-Dad-Poor-Dad-Paperback-SDL356861425-1-b0804.jpg"
    },
    {
      "id": 21,
      "title": "How To Win Friend And Influence People",
      "price": "Rs:400",
      "author": "by Dale Carnegie",
      "category": "self help",
      "description": "International bestseller. Over 16 million copies sold worldwide. How to Win Friends and Influence People by bestselling author Dale Carnegie is one of the most ground-breaking self-help books of all time. This book has now sold over 16 million copies worldwide, helping and inspiring millions of readers along the way in achieving their true potential.",
      "image": "https://n4.sdlcdn.com/imgs/k/b/h/How-To-Win-Friend-And-SDL712534184-1-3151c.jpg"
    },
    {
      "id": 22,
      "title": "Think And Grow Rich",
      "price": "Rs:150",
      "author": "by Napoleon Hill",
      "category": "self help",
      "description": "Since its publication in 1937, Napoleon Hill’s seminal Think and Grow Rich has inspired generations of readers to develop their skills and become masters at anything to do. Inspired by Andrew Carnegie himself, Hill’s easy-to-follow guidebook to success is based on thirteen simple ‘steps’.",
      "image": "https://n1.sdlcdn.com/imgs/i/4/0/Think-And-Grow-Rich-SDL241614354-1-12c7c.jpg"
    },
    {
      "id": 23,
      "title": "You Can Heal Your Life",
      "price": "Rs:250",
      "author": "by Lousie L Hay",
      "category": "self help",
      "description": "You Can Heal Your Life is a book by Louise Hay that dwells upon how you can shape your life the way you want to by channelising your thoughts and energies in the right ways. This book was released in 2008 by Hay House India.",
      "image": "https://n2.sdlcdn.com/imgs/b/f/j/You-Can-Heal-Your-Life-SDL571096473-1-3f668.jpg"
    },
    {
      "id": 24,
      "title": "The Power of your Subconscious Mind",
      "price": "Rs:300",
      "author": "by Dr. Joseph Murphy",
      "category": "self help",
      "description": "A book that kindles our inner fire.",
      "image": "https://n2.sdlcdn.com/imgs/i/o/t/The-Power-of-your-Subconscious-SDL380412215-1-7bdf6.jpg "
    },
    {
      "id": 25,
      "title": "Ruskin Bond- The Blue Umbrella",
      "price": "Rs:150",
      "author": "by Pegasus",
      "category": "children",
      "description": "The Blue Umbrella.",
      "image": "https://n2.sdlcdn.com/imgs/i/l/8/Ruskin-Bond-The-Blue-Umbrella-SDL218901875-1-36530.jpg"
    },
    {
      "id": 26,
      "title": "Harry Potter And The Philosophers Stone ",
      "price": "Rs:400",
      "author": "by Rowling, J.K.",
      "category": "children",
      "description": " Read Harry Potter and the Philosopher’s Stone to find out how Harry with the help of his friends Ron and Hermione, defeats the Dark Lord’s intention of stealing the precious Stone.",
      "image": "https://n2.sdlcdn.com/imgs/a/4/6/Harry-Potter-And-The-Philosophers-SDL237954387-1-5e0d6.jpg"
    },
    {
      "id": 27,
      "title": "BE A MATHS STAR 8",
      "price": "Rs:500",
      "author": "by Capoor, Monica",
      "category": "children",
      "description": "BE A MATHS STAR 8",
      "image": "https://n4.sdlcdn.com/imgs/j/s/4/BE-A-MATHS-STAR-8-SDL559252046-1-8478d.jpg"
    },
    {
      "id": 28,
      "title": "PRINCESS SUNSHINE AND THE FROG PRINCE",
      "price": "Rs:250",
      "author": "by ART Factory",
      "category": "children",
      "description": "Princess Sunshine loses her golden ball. A frog hops into the pond and fetches it back. In return, he wants to eat from her plate, drink from her cup and sleep on her pillow.",
      "image": "https://n3.sdlcdn.com/imgs/j/s/w/PRINCESS-SUNSHINE-AND-THE-FROG-SDL104418894-1-1f81c.jpg"
    },
    {
      "id": 29,
      "title": "Harry Potter And The Prisoner Of Azkaban ",
      "price": "Rs:400",
      "author": "by Rowling, J.K.",
      "category": "children",
      "description": ".These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON .",
      "image": "https://n2.sdlcdn.com/imgs/g/5/z/Harry-Potter-And-The-Prisoner-SDL059702889-1-7235c.jpeg"
    },
    {
      "id": 30,
      "title": "Diary of a Wimpy Kid: Cabin Fever ",
      "price": "Rs:300",
      "author": "by Jeff Kinney",
      "category": "children",
      "description": "Diary of a Wimpy Kid: Cabin Fever (Book 6) published by Penguin Books is a award-winning and bestselling book. The book is part of the funny and popular series of books in the Diary of a wimpy kid series.",
      "image": "https://n2.sdlcdn.com/imgs/a/4/v/Books-Diary-Of-A-Wimpy-SDL014723209-1-0398e.jpg"
    }
  ]

  export default DATA;

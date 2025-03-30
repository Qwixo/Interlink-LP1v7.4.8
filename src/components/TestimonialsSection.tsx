import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { Testimonials } from './ui/testimonials';


const TestimonialsSection = () => {
  const scrollToApplicationForm = () => {
    const applicationSection = document.getElementById('application-form-section');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      quote: "I have classmates from different countries and they don't speak Spanish… for me that's very helpful because I need to practice everyday. Now I'm graduating. Studying at INTERLINK pushed me to speak every day — and it worked!",
      name: "Lina Rois",
      designation: "Colombia",
      src: "https://i.imgur.com/KXVOcwe.jpeg"
    },
    {
      quote: "I decided to go out of my comfort zone and invest in my personal development. I think that exploring a new culture is the best way to expand my horizons. So, I found the INTERLINK program the perfect opportunity for my family and me.",
      name: "Jimena",
      designation: "Ecuador",
      src: "https://i.imgur.com/J1w7fcm.jpeg"
    },
    {
      quote: "Debate was my favorite thing! I loved learning how to build arguments and express my ideas clearly — it helped me grow in confidence and communication. I'm proud of how much I've grown!",
      name: "Estephania",
      designation: "Colombia",
      src: "https://i.imgur.com/oYY7Zxb.png"
    },
    {
      quote: "Thanks to INTERLINK, I understand not just the English language, but also the culture and people in the U.S. I've made friends from many countries and experienced so many new things — from school history tours to international festivals.",
      name: "Mikey",
      designation: "Vietnam",
      src: "https://i.imgur.com/i4SnHq0.png"
    },
    {
      quote: "My English wasn't good before INTERLINK. I had to stop and think before speaking, and I didn't know how to make others understand me. Now I feel confident — I can talk, write essays, and people understand what I say!",
      name: "Chau",
      designation: "Vietnam",
      src: "https://i.imgur.com/bQLjGzi.png"
    },
    {
      quote: "In my country, classes just focused on testing. INTERLINK focuses more on applying English to the real world.",
      name: "Huizi",
      designation: "Brazil",
      src: "https://i.imgur.com/UN85w6p.jpeg"
    },
    {
      quote: "I learned a lot and appreciate all the teachers' effort to help us in this experience. I have very good memories, and still carry with me all the life lessons. It was an opportunity to learn different things and grow as a human being.",
      name: "Thais",
      designation: "Brazil",
      src: "https://i.imgur.com/9VTBhXQ.jpeg"
    },
    {
      quote: "At INTERLINK, the classes were interactive, encouraging me to express my opinions and think independently. Initially, I was nervous and hesitant to participate, but the supportive teachers provided valuable feedback that boosted my confidence. This experience not only enhanced my English skills but also improved my critical thinking. Collaborating with classmates from various countries taught me about cultural differences and effective communication, which I believe will be beneficial in my future studies at UNCG.",
      name: "Yuna Minami",
      designation: "Japan",
      src: "https://i.imgur.com/ul46HnE.jpeg"
    },
    {
      quote: "Balancing my studies at INTERLINK with being a full-time mother and pursuing my passion for photography was challenging, but incredibly rewarding. The supportive environment and flexible classes allowed me to grow both personally and academically.",
      name: "Telma Borges",
      designation: "Brazil",
      src: "https://i.imgur.com/Y5lGMLM.jpeg"
    }
  ];

  const shadcnTestimonials = [
    {
      image: 'https://i.imgur.com/KXVOcwe.jpeg',
      text: 'I have classmates from different countries and they don\'t speak Spanish… for me that\'s very helpful because I need to practice everyday. Now I\'m graduating. Studying at INTERLINK pushed me to speak every day — and it worked!',
      name: 'Lina Rois',
      username: 'Colombia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/J1w7fcm.jpeg',
      text: 'I decided to go out of my comfort zone and invest in my personal development. I think that exploring a new culture is the best way to expand my horizons. So, I found the INTERLINK program the perfect opportunity for my family and me.',
      name: 'Jimena',
      username: 'Ecuador',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/oYY7Zxb.png',
      text: 'Debate was my favorite thing! I loved learning how to build arguments and express my ideas clearly — it helped me grow in confidence and communication. I\'m proud of how much I\'ve grown!',
      name: 'Estephania',
      username: 'Colombia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/i4SnHq0.png',
      text: 'Thanks to INTERLINK, I understand not just the English language, but also the culture and people in the U.S. I\'ve made friends from many countries and experienced so many new things — from school history tours to international festivals.',
      name: 'Mikey',
      username: 'Vietnam',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/bQLjGzi.png',
      text: 'My English wasn\'t good before INTERLINK. I had to stop and think before speaking, and I didn\'t know how to make others understand me. Now I feel confident — I can talk, write essays, and people understand what I say!',
      name: 'Chau',
      username: 'Vietnam',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/UN85w6p.jpeg',
      text: 'In my country, classes just focused on testing. INTERLINK focuses more on applying English to the real world.',
      name: 'Huizi',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/9VTBhXQ.jpeg',
      text: 'I learned a lot and appreciate all the teachers\' effort to help us in this experience. I have very good memories, and still carry with me all the life lessons. It was an opportunity to learn different things and grow as a human being.',
      name: 'Thais',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/ul46HnE.jpeg',
      text: 'At INTERLINK, the classes were interactive, encouraging me to express my opinions and think independently. Initially, I was nervous and hesitant to participate, but the supportive teachers provided valuable feedback that boosted my confidence. This experience not only enhanced my English skills but also improved my critical thinking. Collaborating with classmates from various countries taught me about cultural differences and effective communication, which I believe will be beneficial in my future studies at UNCG.',
      name: 'Yuna Minami',
      username: 'Japan',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/Y5lGMLM.jpeg',
      text: 'Balancing my studies at INTERLINK with being a full-time mother and pursuing my passion for photography was challenging, but incredibly rewarding. The supportive environment and flexible classes allowed me to grow both personally and academically.',
      name: 'Telma Borges',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'For me, learning English by using projects means teamwork, perseverance, and self-discipline. INTERLINK pushed me to exceed my limits and give my best.',
      name: 'Johanna Lumbu',
      username: 'Democratic Republic of Congo',
      social: 'https://twitter.com'
    },
    {
      text: 'I thank INTERLINK for holding my hand from single word to research paper.',
      name: 'Alhanoof ALFALLAJ',
      username: 'Saudi Arabia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'INTERLINK helped me accomplish my goals and gave me a great social environment with motivating activities.',
      name: 'Luis Sandoval',
      username: 'El Salvador',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Even after passing TOEFL, INTERLINK helped me feel comfortable in an English environment. Highly recommend it before college!',
      name: 'Yuchieh Hsu',
      username: 'Taiwan',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'INTERLINK taught me English, American culture, and how to accept other cultures. A truly life-changing experience.',
      name: 'Thais Lemos',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'The teachers are awesome and the staff is friendly and helpful. I love this school and will miss it!',
      name: 'Hashim Al-Faraj',
      username: 'Kuwait',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Teachers were professional and classmates were so funny. I loved studying in Seattle!',
      name: 'Chi Hsiang (Jane) Hung',
      username: 'Taiwan',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'I shared my experiences with students from around the world in INTERLINK\'s friendly and interactive environment.',
      name: 'Toni Mestrov',
      username: 'Bosnia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'You can feel at home because of the family atmosphere. Every teacher helped me improve my English.',
      name: 'Claudio Alonso',
      username: 'Argentina',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'INTERLINK stimulates your learning in a friendly environment where you develop your own ideas and connect with different cultures.',
      name: 'Berta Abad',
      username: 'Spain',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'INTERLINK gave me the confidence to express myself. I can now speak fluently and handle academic writing, even research papers!',
      name: 'Sanghee Kwon',
      username: 'South Korea',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'I made friends from around the world. It felt like traveling the globe while being in class.',
      name: 'Marcela',
      username: 'Colombia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Before INTERLINK, I couldn\'t write a full paragraph. Now I can write multi-page essays and speak with ease.',
      name: 'Bader',
      username: 'United Arab Emirates',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'It\'s not just about English — INTERLINK helped me grow as a person and explore other cultures.',
      name: 'Paulo Henrique',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'The teachers at INTERLINK always supported me. They\'re mentors and friends.',
      name: 'Mei-Lan Chen',
      username: 'Taiwan',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'I got accepted to my dream school because of the confidence and skills I built at INTERLINK.',
      name: 'Theophilus Twum-Barima',
      username: 'Ghana',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'The classes were fun, challenging, and always focused on real-world English.',
      name: 'Thais Lemos',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'I felt like I belonged from day one. INTERLINK was my home away from home.',
      name: 'Fernanda',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'The small classes and personal feedback helped me improve faster than I expected.',
      name: 'Nicole Schindler',
      username: 'Germany',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Activities outside of class — like field trips and volunteer work — helped me speak with Americans and make friends.',
      name: 'Mohamed Bara',
      username: 'Libya',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'My writing, speaking, and presentation skills all improved. INTERLINK really prepared me for my PhD journey.',
      name: 'Ayman Fawzi Alhadi Alfaleh',
      username: 'Saudi Arabia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'INTERLINK was the best decision I made — they helped me go from basic English to academic success.',
      name: 'Tingting Wang',
      username: 'China',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'INTERLINK combines discipline with fun. You learn fast and feel proud of your progress.',
      name: 'Hiroko',
      username: 'Japan',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'The teachers are not just instructors, they care deeply about each student\'s journey.',
      name: 'Yi-Hen',
      username: 'Taiwan',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'The activities helped me speak more, learn culture, and make friends from everywhere.',
      name: 'Noura',
      username: 'Switzerland',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Valpo is quiet, safe, and the perfect place to focus on English. INTERLINK made learning fun!',
      name: 'Do-Hoon',
      username: 'Korea',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'The curriculum is intensive and it works. I started university confident and ready.',
      name: 'Mohammed Alkurbi',
      username: 'Saudi Arabia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'INTERLINK helped me get a job at the United Nations. The skills I learned gave me a real advantage.',
      name: 'S. AlMorshid',
      username: 'Saudi Arabia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'I now work in the U.S. as a professor. INTERLINK helped me develop the presentation skills I still use today.',
      name: 'Zui Chih Lee',
      username: 'Taiwan',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'I started INTERLINK nervous and unsure. I left with skills, friends, and a clear path forward.',
      name: 'Masa',
      username: 'Japan',
      social: 'https://twitter.com'
    },

    // You can duplicate the format below to reach 30
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'I came for English, but I stayed because of the family feeling at INTERLINK.',
      name: 'Claudia',
      username: 'Venezuela',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'After just two months, my English improved dramatically. INTERLINK made the difference.',
      name: 'Sultan',
      username: 'Oman',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Valpo was cheaper and quieter than big cities. INTERLINK was a perfect fit.',
      name: 'Tomomi',
      username: 'Japan',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'The environment at INTERLINK helped me build confidence and think independently.',
      name: 'Concha Muñoz',
      username: 'Spain',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'You get to learn about English and life. INTERLINK shaped my journey in every way.',
      name: 'Yi-Hen',
      username: 'Taiwan',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'The real value is in the people. Teachers and staff care deeply about your success.',
      name: 'Keren Deckard',
      username: 'USA',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'My classmates came from five continents. We learned from each other every day.',
      name: 'Luciano',
      username: 'Chile',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'The conversation partner program helped me speak with locals and adapt to life in the U.S.',
      name: 'Mashal Aljehany',
      username: 'Saudi Arabia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'My journey from not speaking English to pursuing a master\'s degree started here.',
      name: 'Adel-Alenazi',
      username: 'Saudi Arabia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'I can confidently recommend INTERLINK to any student who\'s serious about learning.',
      name: 'Katrina',
      username: 'Poland',
      social: 'https://twitter.com'
    }
  ];

  // This function determines which component to render based on the current page
  const isGuidePage = window.location.pathname.includes('guide');

  if (isGuidePage) {
    return (
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-6">
            What Our Students Say
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Hear from international students who transformed their English skills and achieved their academic dreams with INTERLINK.
          </p>

          {/* Video Testimonials Grid - UPDATED: Real YouTube videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Video 1 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video w-full">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/WzvHP99gpBc"
                  title="Student Testimonial - Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://i.imgur.com/pg4XxDm.png" 
                    alt="Student 1" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#064088]">Mohamed</h3>
                    <p className="text-sm text-gray-600">Saudi Arabia</p>
                  </div>
                </div>
                <p className="text-gray-700">"At that time when I started I had a really strong accent and comparing to myself now and back then, it's just unbelievable."</p>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video w-full">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/MBqWwl6C7Us"
                  title="Student Testimonial - Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://i.imgur.com/bQLjGzi.png" 
                    alt="Student 2" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#064088]">Chau</h3>
                    <p className="text-sm text-gray-600">Vietnam</p>
                  </div>
                </div>
                <p className="text-gray-700">"After taking the course at INTERLINK I feel more confident and I can communicate with others and others can understand what I say."</p>
              </div>
            </div>
          </div>

          {/* More Students Subsection - Keeping all 3 written testimonials */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[#064088] mb-10">
              More Students
            </h3>
            <Testimonials 
              testimonials={shadcnTestimonials} 
              title=""
              description="Read testimonials from students who have transformed their language skills with INTERLINK"
            />
          </div>


        </div>
      </section>
    );
} else {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-12">
          What Our Students Say
        </h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}

};

export default TestimonialsSection;

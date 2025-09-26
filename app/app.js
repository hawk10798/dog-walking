const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      currentPage: 'home'
    };
  },
  methods: {
    navigate(page) {
      this.currentPage = page;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const socialIcons = document.getElementById('social-icons');
      if (socialIcons) {
        socialIcons.classList.add('highlight');
        setTimeout(() => {
          socialIcons.classList.remove('highlight');
        }, 3000);
      }
    }
  }
});

app.component('header-component', {
  template: `
    <header class="bg-gradient-to-r from-green-800 to-green-900 text-white py-8 shadow-xl">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-extrabold tracking-tight"><a href="#" @click.prevent="$emit('navigate', 'home')">Happy Paws Dog Walking</a></h1>
            <p class="text-xl mt-2 text-green-200">Where every walk is a tail-wagging adventure!</p>
          </div>
          <div class="flex items-center space-x-8">
            <a href="#" @click.prevent="$emit('navigate', 'book')" class="bg-yellow-400 text-green-900 px-6 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105 font-semibold whitespace-nowrap">Book Now</a>
            <div class="flex space-x-6" id="social-icons">
              <a href="#" class="text-white hover:text-green-200 transition duration-300 transform hover:scale-110">
                <i class="fab fa-facebook-f fa-2x"></i>
              </a>
              <a href="#" class="text-white hover:text-green-200 transition duration-300 transform hover:scale-110">
                <i class="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" class="text-white hover:text-green-200 transition duration-300 transform hover:scale-110">
                <i class="fab fa-whatsapp fa-2x"></i>
              </a>
              <a href="mailto:contact@happypaws.com" class="text-white hover:text-green-200 transition duration-300 transform hover:scale-110">
                <i class="fas fa-envelope fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `
});

app.component('home-component', {
  template: `
    <main class="flex-1 container mx-auto px-4 py-12">
      <section class="text-center mb-16">
        <h2 class="text-5xl font-extrabold mb-6 text-green-900 tracking-tight">Welcome to Happy Paws!</h2>
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0 md:mr-8">
            <img src="images/group-photo.jpg" alt="Dog Walkers" class="w-full h-auto max-w-4xl mx-auto rounded-3xl shadow-2xl border-t-8 border-green-900">
          </div>
          <div class="md:w-1/2 text-center md:text-left">
            <p class="text-xl text-gray-800 mb-4 leading-relaxed">We provide professional and reliable dog walking services. We believe that every dog deserves a happy and healthy life, and that starts with regular exercise and socialization. Our team of experienced dog lovers is dedicated to giving your furry friend the best part of their day.</p>
            <p class="text-lg text-green-900 italic mb-6 font-medium">"A tired dog is a happy dog."</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#services" class="bg-green-900 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition duration-300 transform hover:scale-105 font-semibold text-center">Our Services</a>
              <a href="#" @click.prevent="$root.scrollToTop()" class="bg-white text-green-900 px-8 py-3 rounded-full border-2 border-green-900 shadow-lg hover:bg-yellow-50 transition duration-300 transform hover:scale-105 font-semibold text-center">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-16">
        <h2 class="text-4xl font-extrabold mb-12 text-green-900 tracking-tight text-center">Meet Our Walkers</h2>
        <div class="flex flex-col md:flex-row items-center mb-16 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 rounded-3xl shadow-2xl p-12 border-t-8 border-green-900 transform hover:scale-105 transition duration-500">
          <img src="images/harry.jpg" alt="Dog Walker 1" class="w-64 rounded-full border-6 border-green-900 mb-8 md:mb-0 md:mr-12 shadow-2xl ring-8 ring-yellow-300 ring-opacity-50">
          <div>
            <h3 class="text-3xl font-bold mb-4 text-green-900">Harry</h3>
            <p class="text-xl text-gray-800 mb-4 leading-relaxed">Growing up with a Border Terrier in the house, I've always understood the unique joy and unconditional love a dog brings into a home. My lifelong passion for canines extends beyond just one breed; I have a genuine love for dogs of all shapes, sizes, and temperaments. For me, a walk is more than just exercise—it's a chance to bond, explore, and ensure every pup feels safe and happy. My calm, adaptable approach means your furry family member, whether a quiet lapdog or a boisterous hound, is in caring, experienced hands.</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row-reverse items-center bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 rounded-3xl shadow-2xl p-12 border-t-8 border-green-900 transform hover:scale-105 transition duration-500">
          <img src="images/junaid.jpg" alt="Dog Walker 2" class="w-64 rounded-full border-6 border-green-900 mb-8 md:mb-0 md:ml-12 shadow-2xl ring-8 ring-yellow-300 ring-opacity-50">
          <div>
            <h3 class="text-3xl font-bold mb-4 text-green-900">Junaid</h3>
            <p class="text-xl text-gray-800 mb-4 leading-relaxed">As a nurse, I've dedicated my life to caring for others, and that same gentle patience and attention to detail extends to every dog I walk. I have a natural knack for reading canine body language, which helps me understand exactly what your dog needs, whether it's a calm moment or an exciting game of fetch. My calm, caring demeanor helps dogs feel instantly at ease, and I love creating a special bond with each one. I truly believe that a happy, healthy dog starts with someone who listens carefully to what they're trying to say.</p>
          </div>
        </div>
      </section>
      <section id="services" class="mb-12">
        <h2 class="text-4xl font-extrabold mb-8 text-green-900 tracking-tight text-center">Our Services</h2>
        <p class="text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto">We offer a range of services to meet the needs of you and your furry companion.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="group block bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-500 p-8 border-t-6 border-green-900 overflow-hidden relative">
            <div class="absolute top-0 right-0 w-20 h-20 bg-green-900 rounded-bl-full opacity-10"></div>
            <h3 class="text-2xl font-bold mb-4 text-green-900">Solo Walks</h3>
            <p class="text-gray-700 mb-4 leading-relaxed">One-on-one walks for dogs that prefer individual attention. Perfect for senior dogs, puppies, or those with special needs.</p>
            <div class="flex justify-between items-center">
              <span class="inline-block bg-green-900 text-white px-4 py-2 rounded-full text-sm font-semibold">From £25/hr</span>
            </div>
          </div>
          <div class="group block bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-500 p-8 border-t-6 border-green-900 overflow-hidden relative">
            <div class="absolute top-0 right-0 w-20 h-20 bg-green-900 rounded-bl-full opacity-10"></div>
            <h3 class="text-2xl font-bold mb-4 text-green-900">Group Walks</h3>
            <p class="text-gray-700 mb-4 leading-relaxed">A fun-filled group adventure for social dogs who love to play with friends. Great for socialization and burning off energy.</p>
            <div class="flex justify-between items-center">
              <span class="inline-block bg-green-900 text-white px-4 py-2 rounded-full text-sm font-semibold">From £20/hr</span>
            </div>
          </div>
          <div class="group block bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-500 p-8 border-t-6 border-green-900 overflow-hidden relative">
            <div class="absolute top-0 right-0 w-20 h-20 bg-green-900 rounded-bl-full opacity-10"></div>
            <h3 class="text-2xl font-bold mb-4 text-green-900">Pet Sitting</h3>
            <p class="text-gray-700 mb-4 leading-relaxed">In-home pet sitting services while you're away. We'll make sure your pet is comfortable, happy, and well-cared for.</p>
            <div class="flex justify-between items-center">
              <span class="inline-block bg-green-900 text-white px-4 py-2 rounded-full text-sm font-semibold">From £60/day</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
});

app.component('book-component', {
  template: `
    <main class="flex-1 container mx-auto px-4 py-12">
      <section class="text-center mb-16">
        <h2 class="text-5xl font-extrabold mb-6 text-green-900 tracking-tight">Book With Us Today</h2>
        <form class="mt-8 max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg text-left">
          <h3 class="text-2xl font-bold text-green-900 mb-6">1. Choose a Service</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button type="button" @click="selectService('solo')" :class="{'bg-yellow-400 border-yellow-500': selectedService === 'solo', 'bg-gray-200 hover:bg-yellow-200 hover:border-yellow-400': selectedService !== 'solo'}" class="service-btn text-gray-800 p-4 rounded-lg font-semibold border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300">Solo Walk</button>
              <button type="button" @click="selectService('group')" :class="{'bg-yellow-400 border-yellow-500': selectedService === 'group', 'bg-gray-200 hover:bg-yellow-200 hover:border-yellow-400': selectedService !== 'group'}" class="service-btn text-gray-800 p-4 rounded-lg font-semibold border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300">Group Walk</button>
              <button type="button" @click="selectService('pet-sitting')" :class="{'bg-yellow-400 border-yellow-500': selectedService === 'pet-sitting', 'bg-gray-200 hover:bg-yellow-200 hover:border-yellow-400': selectedService !== 'pet-sitting'}" class="service-btn text-gray-800 p-4 rounded-lg font-semibold border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300">Pet Sitting</button>
          </div>

          <div v-if="selectedService === 'solo'">
            <h3 class="text-2xl font-bold text-green-900 mb-6">2. Choose a Date</h3>
            <div class="bg-white rounded-lg shadow-md p-4">
              <div class="flex justify-between items-center mb-4">
                <button @click.prevent="prevMonth" class="text-lg font-bold">&lt;</button>
                <h4 class="text-lg font-bold">{{ monthYear }}</h4>
                <button @click.prevent="nextMonth" class="text-lg font-bold">&gt;</button>
              </div>
              <div class="grid grid-cols-7 gap-2">
                <div v-for="day in calendarDays" :key="day.date" @click="selectDate(day)" :class="['text-center', 'p-2', 'cursor-pointer', 'rounded-full', {'hover:bg-yellow-200': !day.disabled}, {'text-gray-400 cursor-not-allowed': day.disabled}, {'bg-yellow-400': day.date === selectedDate}]">
                  {{ day.day }}
                </div>
              </div>
            </div>
          </div>

          <div v-if="selectedDate" class="mt-8">
            <h3 class="text-2xl font-bold text-green-900 mb-6">3. Choose a Time</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button v-for="time in timeSlots" :key="time" type="button" @click="selectTime(time)" :class="{'bg-yellow-400': selectedTime === time}" class="time-slot bg-gray-200 text-gray-800 p-3 rounded-lg font-semibold border-2 border-transparent hover:bg-yellow-200 hover:border-yellow-400">{{ time }}</button>
            </div>
          </div>
        </form>
      </section>
    </main>
  `,
  data() {
    return {
      selectedService: null,
      selectedDate: null,
      selectedTime: null,
      currentDate: new Date(),
      timeSlots: ['09:00', '11:00', '13:00', '15:00']
    }
  },
  computed: {
    monthYear() {
      return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    },
    calendarDays() {
      const month = this.currentDate.getMonth();
      const year = this.currentDate.getFullYear();
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const days = [];
      for (let i = 0; i < firstDayOfMonth; i++) {
        days.push({ date: null, day: '', disabled: true });
      }
      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month, i);
        const today = new Date();
        today.setHours(0,0,0,0);
        days.push({
          date: date.toISOString().split('T')[0],
          day: i,
          disabled: date < today
        });
      }
      return days;
    }
  },
  methods: {
    selectService(service) {
      this.selectedService = service;
      this.selectedDate = null;
      this.selectedTime = null;
    },
    selectDate(day) {
      if (!day.disabled) {
        this.selectedDate = day.date;
        this.selectedTime = null;
      }
    },
    selectTime(time) {
      this.selectedTime = time;
    },
    prevMonth() {
      this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1));
    },
    nextMonth() {
      this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + 1));
    }
  }
});

app.mount('#app');

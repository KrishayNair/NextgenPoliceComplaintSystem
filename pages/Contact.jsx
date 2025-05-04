import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Search, ChevronLeft, ChevronRight, ShoppingBag, Book, Wrench, MessageCircle, Star, Mail, Home } from 'lucide-react';

// Stamp List Component
const StampList = ({ title, stamps }) => (
  <section className="my-8">
    <div className="flex justify-between items-center mb-4 px-4">
      <h2 className="text-xl md:text-2xl font-bold text-[#5d4037]">{title}</h2>
      <div className="flex items-center space-x-2">
        <span className="text-[#5d4037]">Stamps</span>
        <select className="border border-[#5d4037] rounded p-1 bg-[#f9f5f0] text-[#5d4037]">
          <option>All</option>
        </select>
      </div>
    </div>
    <div className="flex flex-nowrap overflow-x-auto space-x-4 px-4">
      {stamps.map((stamp) => (
        <div key={stamp.id} className="bg-white p-4 rounded-lg shadow-md flex-shrink-0 w-48 md:w-56">
          <div className="relative w-full h-40 md:h-48 mb-2">
            <Image
              src={stamp.image}
              alt={stamp.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold text-[#5d4037]">Rs. {stamp.price}</span>
          <span className="text-sm text-[#5d4037] block">{stamp.name}</span>
          <button className="mt-2 bg-[#4caf50] text-white px-4 py-1 rounded-full flex items-center justify-center w-full">
            <ShoppingBag size={16} className="mr-1" /> Buy Now
          </button>
        </div>
      ))}
    </div>
    <div className="flex justify-end mt-4 space-x-2 text-[#5d4037] px-4">
      <ChevronLeft className="cursor-pointer" />
      <ChevronRight className="cursor-pointer" />
      <span>See More</span>
    </div>
  </section>
);

// Customer Reviews Component
const CustomerReviews = ({ customers }) => (
  <section className="my-8 px-4">
    <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#5d4037]">What customers say about us</h2>
    <div className="flex flex-wrap justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
      {customers.map((customer) => (
        <div key={customer.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-full md:w-64">
          <div className="relative w-16 h-16 mb-2">
            <Image
              src={customer.image}
              alt={customer.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="font-bold text-[#5d4037]">{customer.name}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < customer.rating ? "text-yellow-400 fill-current" : "text-gray-300"} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// SEO Component
const SEO = () => (
  <Head>
    <title>Stamp Collection - Explore Historical Stamps</title>
    <meta name="description" content="Discover a world of history through our extensive stamp collection. Browse, buy, and learn about rare and unique stamps from around the globe." />
    <meta name="keywords" content="stamps, stamp collection, philately, historical stamps" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href="https://yourdomain.com" />
    <meta property="og:title" content="Stamp Collection - Explore Historical Stamps" />
    <meta property="og:description" content="Discover a world of history through our extensive stamp collection." />
    <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
    <meta property="og:url" content="https://yourdomain.com" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);

// Header Component
const Header = () => (
  <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-[#f9f5f0]">
    <div className="text-[#5d4037] font-bold text-xl mb-4 md:mb-0">LOGO</div>
    <nav className="w-full md:w-auto">
      <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
        <li className="text-[#5d4037] flex items-center"><Home size={18} className="mr-1" /> HOME</li>
        <li className="text-[#5d4037] flex items-center"><ShoppingBag size={18} className="mr-1" /> SHOP</li>
        <li className="text-[#5d4037] flex items-center"><Book size={18} className="mr-1" /> CATALOG</li>
        <li className="text-[#5d4037] flex items-center"><Wrench size={18} className="mr-1" /> WORKSHOP</li>
        <li className="text-[#5d4037] flex items-center"><MessageCircle size={18} className="mr-1" /> FORUM</li>
      </ul>
    </nav>
    <button className="bg-[#d7ccc8] text-[#5d4037] px-4 py-2 rounded-full mt-4 md:mt-0">Sign In</button>
  </header>
);

// Hero Section Component
const HeroSection = () => (
  <section className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
    <div className="max-w-md mb-8 md:mb-0">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#5d4037]">Each stamp carries a piece of <span className="text-[#4caf50]">history</span>.</h1>
      <p className="mb-4 text-[#5d4037]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="relative">
        <input type="text" placeholder="What are you looking for?" className="w-full p-2 pr-10 rounded-full border border-[#5d4037]" />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5d4037]" />
      </div>
    </div>
    <div className="flex space-x-2">
      {["/api/placeholder/100/150", "/api/placeholder/100/150", "/api/placeholder/100/150"].map((src, index) => (
        <div key={index} className="relative w-20 h-28 md:w-24 md:h-36">
          <Image
            src={src}
            alt={`Historical Stamp ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-[#4caf50] text-white p-4 md:p-8">
    <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
      <div className="md:w-1/3">
        <h3 className="font-bold mb-2">LOGO</h3>
        <p>Want to know what we&apos;re up to?</p>
        <p>Sign up to get regular updates</p>
        <div className="mt-2 flex">
          <input type="email" placeholder="Your email" className="p-2 rounded-l text-[#5d4037] w-full" />
          <button className="bg-[#d7ccc8] text-[#5d4037] p-2 rounded-r flex items-center">
            <Mail size={16} className="mr-1" /> Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between md:w-1/2">
        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
          <h3 className="font-bold mb-2">About us</h3>
          <ul>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
          <h3 className="font-bold mb-2">Contact</h3>
          <ul>
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mt-4 text-sm flex flex-col md:flex-row justify-between items-center">
      <span>© 2024 Acme Inc. All rights reserved.</span>
      <div className="mt-2 md:mt-0">
        <span className="mr-4">Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  </footer>
);

// Main App Component
const StampCollectionHomepage = () => {
  const stamps = [
    { id: 1, name: "Rare Indian Stamp", price: 250, image: "/api/placeholder/100/150" },
    { id: 2, name: "Vintage US Stamp", price: 250, image: "/api/placeholder/100/150" },
    { id: 3, name: "European Collector's Item", price: 300, image: "/api/placeholder/100/150" },
    { id: 4, name: "Asian Limited Edition", price: 275, image: "/api/placeholder/100/150" },
  ];

  const customers = [
    { id: 1, name: "Jake Williams", image: "/api/placeholder/50/50", rating: 4 },
    { id: 2, name: "Emily Chen", image: "/api/placeholder/50/50", rating: 5 },
    { id: 3, name: "Michael Brown", image: "/api/placeholder/50/50", rating: 4 },
  ];

  return (
    <>
      <SEO />
      <div className="bg-[#f9f5f0] min-h-screen">
        <Header />
        <main className="container mx-auto">
          <HeroSection />
          <StampList title="Best Seller" stamps={stamps} />
          <StampList title="Newly Added" stamps={stamps} />
          <CustomerReviews customers={customers} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default StampCollectionHomepage;
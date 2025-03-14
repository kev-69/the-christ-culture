import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet';
import './About.css'

// Import images - replace with your actual paths
import aboutHero from '../assets/banners/aboutbg1.PNG'
import founderImage from '../assets/images/founder.jpg'
import valueIcon1 from '../assets/icons/faith.png'
import valueIcon2 from '../assets/icons/quality.png'
import valueIcon3 from '../assets/icons/community.png'
import valueIcon4 from '../assets/icons/integrity.png'

const About = () => {
  // Animation logic for elements to fade in when they come into view
  const fadeRefs = useRef([]);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    fadeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      fadeRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Function to add elements to the refs array
  const addToRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | The Christ Culture</title>
        <meta name="description" content="Learn about The Christ Culture's mission to create faith-inspired apparel and lifestyle products." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Our Story</h1>
          <p>Creating apparel that glorifies Christ and inspires believers</p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="about-section mission-section">
        <div className="section-content fade-in" ref={addToRefs}>
          <h2>Our Mission</h2>
          <div className="mission-content">
            <div className="mission-text">
              <p>At The Christ Culture, our mission is to create high-quality apparel that not only looks good but also serves as a powerful reminder of faith and identity in Christ. We believe that what we wear can be a meaningful expression of our beliefs and values.</p>
              
              <p>Through thoughtfully designed products, we aim to inspire conversations about faith, encourage believers in their daily walk, and spread the message of hope in a creative and relevant way.</p>
            </div>
            <div className="mission-image">
              <div className="image-container">
                <img src={aboutHero} alt="People wearing The Christ Culture apparel" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="about-section values-section">
        <div className="section-content fade-in" ref={addToRefs}>
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <img src={valueIcon1} alt="Faith icon" />
              </div>
              <h3>Faith Centered</h3>
              <p>Everything we create is rooted in our faith and inspired by biblical principles and teachings.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <img src={valueIcon2} alt="Quality icon" />
              </div>
              <h3>Quality Craftsmanship</h3>
              <p>We believe in creating products that reflect excellence, using quality materials and attention to detail.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <img src={valueIcon3} alt="Community icon" />
              </div>
              <h3>Building Community</h3>
              <p>We aim to foster a community of believers who support and encourage each other in their faith journey.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <img src={valueIcon4} alt="Integrity icon" />
              </div>
              <h3>Integrity & Transparency</h3>
              <p>We operate with honesty and openness in all our business practices and relationships.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="about-section story-section">
        <div className="section-content fade-in" ref={addToRefs}>
          <h2>Our Journey</h2>
          <div className="story-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>The Christ Culture started as a simple idea in 2021, born from a desire to create meaningful apparel that would help believers express their faith in a modern way.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>First Collection</h3>
                <p>Our first collection launched with just three designs, but the positive response from our community showed us that we were onto something special.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Growing Impact</h3>
                <p>As we've grown, we've been blessed to see our products start conversations about faith and inspire believers across the country.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Looking Forward</h3>
                <p>Today, we continue to expand our offerings while staying true to our original mission of creating quality, faith-inspired apparel that honors Christ.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder Section */}
      <section className="about-section founder-section">
        <div className="section-content fade-in" ref={addToRefs}>
          <h2>Meet the Founder</h2>
          <div className="founder-content">
            <div className="founder-image">
              <img src={founderImage} alt="Founder of The Christ Culture" />
            </div>
            <div className="founder-text">
              <h3>Julian Nii Adjetey</h3>
              <p className="founder-title">Founder & Creative Director</p>
              <p>Julian's journey with The Christ Culture began from his own desire to wear clothing that represented his faith but also matched his personal style. Unable to find exactly what he was looking for, he decided to create it himself.</p>
              <p>With a background in design and a heart for ministry, Julian brings a unique perspective to faith-based apparel. His vision is to create products that not only look good but also serve as conversation starters about faith.</p>
              <blockquote>"I believe that our clothing can be more than just fabric—it can be a testimony, a reminder, and an opportunity to share what matters most."</blockquote>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="about-section contact-section">
        <div className="section-content fade-in" ref={addToRefs}>
          <h2>Connect With Us</h2>
          <p className="contact-intro">We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, reach out to us through any of these channels:</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>info@thechristculture.com</p>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us</h3>
              <p>+233 25-767-7987</p>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <i className="fab fa-instagram"></i>
              </div>
              <h3>Follow Us</h3>
              <p>@thechristculture</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

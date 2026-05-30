import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, useRef } from 'react'; // Added useRef
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha'; // Imported widget component

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null); // Reference for the captcha widget

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // 1. Fetch the solved CAPTCHA token from the element widget
    const captchaToken = recaptchaRef.current?.getValue();

    if (!captchaToken) {
      alert('Please complete the reCAPTCHA verification challenge first.');
      setIsSending(false);
      return;
    }

    // 2. Prepare Template Parameters, injecting the token directly for EmailJS to process
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
      'g-recaptcha-response': captchaToken, // EmailJS reads this specific key to verify the token with Google
    };

    try {
      // 3. Send using your official EmailJS service dashboard parameters
      await emailjs.send(
        'service_ix9etsq',     // Replace with your Service ID
        'template_1cha38d',    // Replace with your Template ID
        templateParams,
        '3Q_Vf6N7pPGEjUCSx'      // Replace with your Account Public Key
      );

      alert('Thank you for reaching out! Your message has been safely delivered.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      recaptchaRef.current?.reset(); // Clear the captcha box back to un-checked state
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send the message. Please contact me directly using the layout links.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'anaboset@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=anawakeyo@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+251 927 024 449',
      link: 'tel:+251927024449',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Adama, Ethiopia',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-34 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in healthcare innovation, AI systems, research, or collaboration? I'd love to connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl mb-6 text-gray-900">Contact Information</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always interested in conversations around healthcare technology, artificial intelligence, 
              research opportunities, innovative ideas, and meaningful collaborations focused on real-world impact.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="size-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-gray-900">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <h3 className="text-lg mb-2 text-gray-900">Availability</h3>
              <p className="text-gray-600">
                Currently available for freelance projects and Internship opportunities.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl mb-6 text-gray-900">Send a Message</h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Research, collaboration, project, or opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell me more about your idea, opportunity, or message..."
                  />
                </div>
                {/* Integrated reCAPTCHA Component Box Container */}
                <div className="py-2 flex justify-center md:justify-start">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeDYwQtAAAAAFo0t75C0iXKfFRJfnMypbrhCJqJ" // Paste your Google Site Key here directly
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                  <Send className="size-5" />
                  {isSending ? 'Sending Message...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

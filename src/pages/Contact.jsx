import React, { useState } from 'react'
import SocialIcons from '../components/SocialIcons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, error: null });

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("_captcha", "false");
    formDataToSend.append("_template", "table");

    try {
      const response = await fetch("https://formsubmit.co/abhisheks6904@gmail.com", {
        method: "POST",
        body: formDataToSend
      });

      if (response.ok) {
        setFormStatus({ submitted: true, error: null });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormStatus({ submitted: false, error: true });
      }
    } catch (err) {
      setFormStatus({ submitted: false, error: true });
    }

    setTimeout(() => {
      setFormStatus({ submitted: false, error: false });
    }, 10000);
  };


  return (
    <section className="md:py-10">
      <header className="pb-8 border-b border-gray-700">
        <h1 className='text-4xl md:text-6xl poppins font-semibold border-b-4 border-indigo-500 pb-2 inline-block'>Get In Touch</h1>
        <p className='text-gray-300 text-md sm:text-lg mt-6'>Have a project in mind or want to discuss opportunities? I'd love to hear from you! Fill out the form below or reach out through my social media channels.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 mt-10">
        <div>
          <section className="py-6 border-b border-gray-700">
            <h2 className='poppins text-2xl text-indigo-500 font-semibold flex items-center'>
              <span className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3">1</span>
              Contact Information
            </h2>
            <div className="mt-6 space-y-4 sm:pl-11">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-medium text-lg">Email</h3>
                <a href='mailto:abhisheks6904@gmail.com' className=" inline-block mt-1 text-indigo-500 hover:underline ml-1">abhisheks6904@gmail.com</a>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-medium text-lg">Location</h3>
                <p className="text-gray-400 mt-1">Chittorgarh, Rajasthan, India, 312001</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-medium text-lg">Connect with me</h3>
                <div className="mt-3">
                  <SocialIcons />
                </div>
              </div>
            </div>
          </section>

          <section className="py-6 mt-8">
            <h2 className='poppins text-2xl text-indigo-500 font-semibold flex items-center'>
              <span className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3">2</span>
              Response Time
            </h2>
            <div className="mt-6 sm:pl-11">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-gray-300">I typically respond to all inquiries within 24-48 hours. For urgent matters, please mention it in your message.</p>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section className="py-6">
            <h2 className='poppins text-2xl text-indigo-500 font-semibold flex items-center'>
              <span className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3">3</span>
              Send a Message
            </h2>
            <div className="mt-6 sm:pl-11">
              {formStatus.error && <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-center">
                <p className="text-red-400 font-medium">Oops! Something went wrong. Please try again later.</p>
              </div>
              }
              {formStatus.submitted && !formStatus.error && (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-medium">Thank you for your message! I'll get back to you soon.</p>
                </div>
              )}
              {!formStatus.submitted && !formStatus.error && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 w-full"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { PHONE_NUMBER, PHONE_LINK, EMAIL_ADDRESS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Info Side */}
            <div className="bg-slate-900 p-10 lg:w-2/5 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6">Get Your Free Estimate</h3>
                <p className="text-slate-400 mb-8">
                  Contact us today for a comprehensive inspection. We serve Hudson, Bergen, Essex, and surrounding NJ counties.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Call Us Anytime</p>
                      <a href={PHONE_LINK} className="font-bold text-lg hover:text-blue-400 transition-colors">{PHONE_NUMBER}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email Us</p>
                      <a href={`mailto:${EMAIL_ADDRESS}`} className="font-bold text-lg hover:text-blue-400 transition-colors break-all">
                        {EMAIL_ADDRESS}
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-700">
                <p className="text-sm text-slate-500">
                  By contacting us, you agree to receive text messages about your appointment.
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10 lg:w-3/5">
              <form 
                action={`mailto:${EMAIL_ADDRESS}`} 
                method="POST" 
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" 
                      placeholder="John" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" 
                      placeholder="Doe" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" 
                    placeholder="(555) 555-5555" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Service Needed</label>
                  <select 
                    name="service"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option>Free Inspection & Estimate</option>
                    <option>Basement Waterproofing</option>
                    <option>Foundation Repair</option>
                    <option>Mold Remediation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-500 outline-none resize-none" 
                    placeholder="Tell us about your issue..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Request Free Estimate
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
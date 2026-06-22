import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);

      setTimeout(() => {
        console.log('--- FORM SUBMITTED ---');
        console.log('Full Name:', formData.fullName);
        console.log('Email:', formData.email);
        console.log('Message:', formData.message);
        console.log('----------------------');
        
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ fullName: '', email: '', message: '' });
        
        // 5 soconds
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow w-full">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have a question or want to work together? Leave us a message and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        

        <div className="lg:col-span-1 space-y-8">
          <div className="glass p-8 rounded-2xl h-full flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Fill up the form and our team will get back to you within 24 hours.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <span>hello@reactmastery.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>123 React Street, Web City, 10010</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden">
          
            {isSuccess && (
              <div className="absolute inset-0 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300">
                <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 text-center px-6">
                  Thank you for reaching out. Please check the console for the submitted data.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 ${
                      errors.fullName 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-primary/50'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-primary/50'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-primary/50'
                  }`}
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full sm:w-auto mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

 "use client";
  
  import { AlertCircle, CheckCircle2 } from "lucide-react";
  import Image from "next/image";
  import React, { useState, ChangeEvent, FormEvent } from 'react';
  import { WaitlistFormData, StatusMessage } from './types';
  
  const Waitlist = () => {
	const [formData, setFormData] = useState<WaitlistFormData>({ 
	  fullname: '', 
	  email: '' 
	});
  
	const [status, setStatus] = useState<StatusMessage>({ 
	  type: '', 
	  message: '' 
	});
  
	const [loading, setLoading] = useState(false);
  
	const validateForm = (): boolean => {
	  if (!formData.fullname.trim() || !formData.email.trim()) {
		setStatus({
		  type: 'error',
		  message: 'Both name and email are required'
		});
		return false;
	  }
  
	  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  if (!emailRegex.test(formData.email)) {
		setStatus({
		  type: 'error',
		  message: 'Please enter a valid email address'
		});
		return false;
	  }
  
	  return true;
	};
  
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
	  e.preventDefault();
	  setLoading(true);
	  setStatus({ type: '', message: '' });
  
	  if (!validateForm()) {
		setLoading(false);
		return;
	  }
  
	  try {
		const response = await fetch('/api/store', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			fullname: formData.fullname.trim(),
			email: formData.email.trim()
		  }),
		  
		});
		console.log("Response:", response); // Debug log

		const data = await response.json();
		console.log('Submission response:', data); // Debug log
  
		if (!response.ok) {
		  throw new Error(data.error || 'Failed to join waitlist');
		}
  
		setStatus({
		  type: 'success',
		  message: 'Successfully joined the waitlist!'
		});
		setFormData({ fullname: '', email: '' });
		
	  } catch (error) {
		console.error('Submission error:', error);
		setStatus({
		  type: 'error',
		  message: error instanceof Error ? error.message : 'Failed to join waitlist. Please try again.'
		});
	  } finally {
		setLoading(false);
	  }
	};
  
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
	  const { name, value } = e.target;
	  setFormData(prev => ({
		...prev,
		[name]: value
	  }));
	};
  
	return (
	  <section id="waitlist" className="flex flex-col justify-center items-center font-dmsans mt-16">
		<form onSubmit={handleSubmit} className="w-full max-w-[500px]">
		  <div className="relative mb-4">
			<Image
			  className="absolute left-3 top-1/2 -translate-y-1/2"
			  src="/icons/user.svg"
			  alt="User icon"
			  width={20}
			  height={20}
			/>
			<input
			  type="text"
			  id="fullname"
			  name="fullname"
			  value={formData.fullname}
			  onChange={handleChange}
			  required
			  placeholder="Enter full name"
			  className="w-full h-[50px] border border-[#164CA4] rounded-md pl-14 
					   focus:outline-none focus:ring-2 focus:ring-[#31558fd2] 
					   placeholder:text-[#222222] placeholder:font-light"
			/>
		  </div>
  
		  <div className="relative mb-6">
			<Image
			  className="absolute left-3 top-1/2 -translate-y-1/2"
			  src="/icons/email.svg"
			  alt="Email icon"
			  width={20}
			  height={20}
			/>
			<input
			  type="email"
			  id="email"
			  name="email"
			  value={formData.email}
			  onChange={handleChange}
			  required
			  placeholder="Enter email address"
			  className="w-full h-[50px] border border-[#164CA4] rounded-md pl-14 
					   focus:outline-none focus:ring-2 focus:ring-[#31558fd2] 
					   placeholder:text-[#222222] placeholder:font-light"
			/>
		  </div>
  
		  <button
			type="submit"
			disabled={loading}
			className="w-full py-3 bg-[#164CA4] text-white text-center rounded-md
					 hover:bg-[#0E3A8B] disabled:bg-[#164CA4]/70 disabled:cursor-not-allowed
					 transition-colors duration-200"
		  >
			{loading ? 'Joining...' : 'Join Waitlist'}
		  </button>
  
		  {status.type && (
			<div className={`mt-4 flex items-center justify-center gap-2 ${
			  status.type === 'success' ? 'text-green-500' : 'text-red-500'
			}`}>
			  {status.type === 'success' ? (
				<CheckCircle2 className="h-5 w-5" />
			  ) : (
				<AlertCircle className="h-5 w-5" />
			  )}
			  <span>{status.message}</span>
			</div>
		  )}
		</form>
	  </section>
	);
  };
  
  export default Waitlist;
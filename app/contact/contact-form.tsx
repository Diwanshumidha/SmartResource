"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'
import { sendEmailToAdmin } from './action'

const ContactForm = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        try {
         const response = await sendEmailToAdmin(formData);
         toast.success('Message sent successfully.');
        } catch (error) {
          console.log(error);
          toast.error('Message failed to send. Please try again.');
      }
    
    }
  return (
    <form onSubmit={onSubmit} className="lg:flex-auto">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm/6 font-semibold text-foreground"
        >
          First name
        </label>
        <div className="mt-2.5">
          <Input name="first-name" placeholder="John" />
        </div>
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="block text-sm/6 font-semibold text-foreground"
        >
          Last name
        </label>
        <div className="mt-2.5">
          <Input name="last-name" placeholder="Doe" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="last-name"
          className="block text-sm/6 font-semibold text-foreground"
        >
          Email
        </label>
        <div className="mt-2.5">
          <Input className="w-full" name="userEmail" type="email" placeholder="johndoe@gmail.com" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm/6 font-semibold text-foreground"
        >
          Message
        </label>
        <div className="mt-2.5">
          <Textarea name="message" placeholder="Enter your message here ..." rows={5} />
        </div>
      </div>
    </div>
    <div className="mt-10">
      <Button type="submit" className="w-full">Let&apos;s talk</Button>
    </div>
    <p className="mt-4 text-sm/6 text-gray-500">
      By submitting this form, I agree to the{" "}
      <Link href="/privacy-policy" className="font-semibold text-primary">
        privacy&nbsp;policy
      </Link>
      .
    </p>
  </form>
  )
}

export default ContactForm
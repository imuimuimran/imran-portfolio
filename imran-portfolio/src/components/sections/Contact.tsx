"use client";
import {
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";

import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );

      if (response.ok) {
        toast.success(
          "Message sent successfully!"
        );

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error(
          "Failed to send message."
        );
      }
    } catch {
      toast.error(
        "Something went wrong."
      );
    }
  };


  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="section-container">

        {/* <h2
          className="
          text-4xl
          font-bold
          text-center
          "
        >
          Contact Me
        </h2> */}

        <SectionHeading
          title="Contact"
          subtitle="Let's work together"
        />

        <p
          className="
          text-center
          text-muted-foreground
          mt-4
          "
        >
          Let's discuss opportunities,
          projects and collaborations.
        </p>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          mt-12
          "
        >
          <ContactCard
            icon={<Mail />}
            title="Email"
            value="hossainmohdimran@gmail.com"
          />

          <ContactCard
            icon={<Phone />}
            title="Phone"
            value="+8801741545420"
          />

          <ContactCard
            icon={<MessageCircle />}
            title="WhatsApp"
            value="+8801741545420"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="
          max-w-3xl
          mx-auto
          mt-16
          space-y-4
          "
        >
          {/* <input
            type="text"
            placeholder="Your Name"
            className="
            w-full
            border
            rounded-lg
            p-3
            "
          /> */}

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Your Name"
            className="
            w-full
            border
            rounded-lg
            p-3
          "
          />

          {/* <input
            type="email"
            placeholder="Your Email"
            className="
            w-full
            border
            rounded-lg
            p-3
            "
          /> */}

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Your Email"
            className="
            w-full
            border
            rounded-lg
            p-3
            "
          />

          {/* <input
            type="text"
            placeholder="Subject"
            className="
            w-full
            border
            rounded-lg
            p-3
            "
          /> */}

          <input
            type="text"
            value={subject}
            onChange={(e) =>
              setSubject(e.target.value)
            }
            placeholder="Subject"
            className="
            w-full
            border
            rounded-lg
            p-3
            "
          />

          {/* <textarea
            rows={6}
            placeholder="Message"
            className="
            w-full
            border
            rounded-lg
            p-3
            "
          /> */}

          <textarea
            rows={6}
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            placeholder="Message"
            className="
            w-full
            border
            rounded-lg
            p-3
            "
          />

          {/* <button
            className="
            px-6
            py-3
            rounded-lg
            bg-blue-600
            text-white
            "
          >
            Send Message
          </button> */}

          <button
            type="submit"
            className="
            px-6
            py-3
            rounded-lg
          bg-blue-600
          text-white
          "
          >
            Send Message
          </button>


        </form>
      </div>
    </section>
  );
}




function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {


  return (
    <div
      className="
      border
      rounded-xl
      p-6
      text-center
      "
    >
      <div
        className="
        flex
        justify-center
        mb-3
        "
      >
        {icon}
      </div>

      <h3 className="font-bold">
        {title}
      </h3>

      <p className="mt-2">
        {value}
      </p>
    </div>
  );
}
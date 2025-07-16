import React, { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

const EmailModal = ({ isOpen, onClose }) => {
    const [sending, setSending] = useState(false);
    const [emailDetails, setEmailDetails] = useState({
        name: "",
        message: "",
        email: "",
        subject: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmailDetails((prev) => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSend = async () => {
        if (Object.values(emailDetails).some((val) => val.trim() === "")) {
            toast.error("All fields are required");
            return;
        }

        if (!validateEmail(emailDetails.email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        const templateParams = {
            name: emailDetails.name,
            message: emailDetails.message,
            email: emailDetails.email,
            subject: emailDetails.subject,
        };

        try {
            await toast.promise(
                emailjs.send(
                    "service_4n33hif",
                    "template_g67x6yi",
                    templateParams,
                    "7k8B5IUgkR8V4FiIy"
                ),
                {
                    loading: "Sending email...",
                    success: "Email sent successfully!",
                    error: "Failed to send email.",
                }
            );

            setEmailDetails({
                name: "",
                message: "",
                email: "",
                subject: "",
            });
            onClose();
        } catch (error) {
            toast.error("Unexpected error occurred.");
        }
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50 text-black font-roboto-mono font-bold">
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="bg-white rounded-xl shadow-xl max-w-md w-full z-50 p-6 relative">
                    <DialogTitle className="text-xl mb-4 text-black font-bold">
                        Send us an Email
                    </DialogTitle>

                    <label htmlFor="recipient" className="font-semibold">To:</label>
                    <input
                        id="recipient"
                        type="email"
                        value="info@dopex.co"
                        disabled
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 bg-gray-100 text-black cursor-not-allowed"
                    />

                    <label htmlFor="name" className="font-semibold">Name:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Please enter your name"
                        value={emailDetails.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 text-black"
                        required
                    />

                    <label htmlFor="subject" className="font-semibold">Subject:</label>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Please enter the subject"
                        value={emailDetails.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-black"
                        required
                    />

                    <label htmlFor="email" className="font-semibold">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Please enter your email"
                        value={emailDetails.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-black"
                        required
                    />

                    <label htmlFor="message" className="font-semibold">Message:</label>
                    <textarea
                        name="message"
                        placeholder="Please enter your message"
                        value={emailDetails.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-black"
                        required
                    />

                    <div className="flex justify-end gap-2">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 hover:cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSend}
                            disabled={sending}
                            className="px-4 py-2 bg-[#bbfa00] text-black rounded-md font-semibold hover:cursor-pointer"
                        >
                            {sending ? "Sending..." : "Send"}
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default EmailModal;

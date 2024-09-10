import { APIClient } from "@services";
import { AxiosResponse } from "axios";
import { useRef, useState } from "react";

const useContactForm = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [formStatus, setFormStatus] = useState<string | null>(null);
    const [isError, setIsError] = useState(false); // New state to track error status
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [validated, setValidated] = useState(false);
    const [pending, setPending] = useState(false);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleResizeTextArea = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"; // Reset the height to auto to shrink on delete
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Adjust height based on scrollHeight
      }
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
  
      setValidated(true);
  
      if (form.checkValidity() === false) {
        event.stopPropagation();
        form.reportValidity();
        return;
      }
  
      setPending(true);
      setFormStatus("Message sent successfully!");
      setIsError(false); // Reset error state on optimistic success
      setPending(false);
  
      try {
        const emailClient = new APIClient("/services/send_email.php");
        const response = await emailClient.sendEmail(formData);
  
        if ((response as AxiosResponse).status !== 200) {
          setFormStatus("Error sending message. Please try again later.");
          setIsError(true); // Set error status to true
        }
      } catch (error) {
        setFormStatus("Error sending message. Please check your connection and try again.");
        setIsError(true); // Set error status to true
      }
    };
  
    return {
      formData,
      validated,
      formStatus,
      isError, // Return the error state
      pending,
      textareaRef,
      handleInputChange,
      handleResizeTextArea,
      handleSubmit,
    };
  };
  
  export default useContactForm;
  
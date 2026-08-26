export const contactController = {
  validate(formData) {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    }

    if (!formData.agencyName.trim()) {
      errors.agencyName = "Please enter your agency name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your business email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Please enter your phone number.";
    }

    if (!formData.supportNeeded) {
      errors.supportNeeded = "Please select a support requirement.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please tell us how we can help.";
    }

    return errors;
  },

  async submitForm(formData) {
    // Replace with your FastAPI/Django endpoint.
    // Example:
    //
    // const response = await fetch(
    //   `${import.meta.env.VITE_API_URL}/contact`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   }
    // );
    //
    // if (!response.ok) throw new Error("Submission failed");
    // return response.json();

    await new Promise((resolve) => setTimeout(resolve, 700));

    return {
      success: true,
      message:
        "Thank you. Your request has been received. Our team will contact you shortly.",
    };
  },

  focusFirstError(errors) {
    const firstErrorField = Object.keys(errors)[0];

    if (firstErrorField) {
      document.getElementById(firstErrorField)?.focus();
    }
  },
};
"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(data),
        })
            .then((resp) => {
                if (!resp.ok) return setError("root", { message: "Error" });
                reset();
                return resp.json();
            })
            .then(console.log)
            .catch(console.error);
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <span>{errors.root?.message}</span>

            <label htmlFor="name">Name</label>
            <input
                id="name"
                {...register("name", { required: true })}
                // required
            />
            <span>{errors.name?.message}</span>

            <label htmlFor="email">Email</label>
            <input
                id="email"
                {...register("email", { required: true })}
                // required
            />
            <span>{errors.email?.message}</span>

            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                {...register("message", { required: true })}
                // required
            />
            <span>{errors.message?.message}</span>

            <button type="submit">Send</button>
        </form>
    );
}

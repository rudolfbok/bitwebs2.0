"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 100);
    }, []);

    return (
        <section className={`flex flex-col p-16 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-white text-8xl pb-6">BitWebs</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Fusce tellus. Vivamus ac leo pretium faucibus. Proin mattis lacinia justo. Curabitur bibendum justo non orci. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer tempor. Aliquam erat volutpat. Pellentesque sapien.</p>
        </section>
    )
} 
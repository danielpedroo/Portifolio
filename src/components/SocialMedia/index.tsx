'use client'

import { motion } from "framer-motion";
import { socialIcons } from "./data-social-links";

export default function SocialMediaLink() {
    return (
        <div>
            <div className="flex justify-center lg:justify-start gap-4">
                {socialIcons.map(({ icon, color, link, id }) =>
                    icon && (
                        <motion.a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ color, borderColor: color, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="border rounded-full p-3 text-zinc-400 text-xl md:text-2xl border-zinc-600 transition-all duration-300"
                            style={{ borderColor: undefined, color: undefined }}
                        >
                            {icon}
                        </motion.a>
                    )
                )}
            </div>
        </div>
    )
}

import React from 'react';
import { motion } from 'motion/react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Branding in 2026",
    excerpt: "Explore how AI and immersive technologies are reshaping the way brands communicate with their audiences.",
    date: "March 10, 2026",
    image: "https://picsum.photos/seed/blog1/800/500"
  },
  {
    id: 2,
    title: "Why 3D Web Design is No Longer Optional",
    excerpt: "Static websites are a thing of the past. Learn why interactivity and depth are key to user engagement.",
    date: "March 5, 2026",
    image: "https://picsum.photos/seed/blog2/800/500"
  },
  {
    id: 3,
    title: "Mastering Social Media Strategy",
    excerpt: "A deep dive into building communities that actually convert and stay loyal to your brand.",
    date: "February 28, 2026",
    image: "https://picsum.photos/seed/blog3/800/500"
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <span className="text-brand-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Our Blog</span>
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mt-4">
            INSIGHTS & <br /> <span className="text-stroke">STORIES</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-brand-primary font-bold text-sm uppercase tracking-widest">{post.date}</span>
              <h3 className="text-2xl font-display font-bold mt-2 group-hover:text-brand-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-white/60 mt-4 line-clamp-2">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

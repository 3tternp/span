import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, imgUrl, tags }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="relative rounded-2xl overflow-hidden border border-white/10 group
        hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(0,255,157,0.2)]
        transition-colors duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(21,21,21,0.9) 0%, rgba(13,25,18,0.85) 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Image */}
      <div className="overflow-hidden aspect-[16/10]">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350
        flex flex-col items-center justify-center text-center p-6"
        style={{ background: 'linear-gradient(135deg, rgba(0,255,157,0.85) 0%, rgba(0,184,255,0.85) 100%)' }}
      >
        <h4 className="text-[18px] font-bold text-white mb-2 leading-snug">{title}</h4>
        <p className="text-[13px] text-white/90 leading-relaxed mb-4">{description}</p>
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 justify-center">
            {tags.map((tag, i) => (
              <span key={i} className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full
                bg-white/20 border border-white/35 text-white tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom bar (visible when not hovering) */}
      <div className="p-4 group-hover:opacity-0 transition-opacity duration-200">
        <h4 className="text-[14px] font-semibold text-white mb-2 leading-snug">{title}</h4>
        <div className="flex flex-wrap gap-1.5">
          {tags?.slice(0, 3).map((tag, i) => (
            <span key={i} className="font-mono text-[10px] px-2 py-0.5 rounded-full
              bg-accent/10 border border-accent/25 text-white/80">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

import Image from "next/image";
import { profile } from "../data/profile";
import { categories, socialLinks } from "../data/links";
import LinkCard from "../components/LinkCard";
import SocialIcon from "../components/SocialIcon";

export default function Page() {
  return (
    <main className="w-full max-w-md mx-auto">
      <section className="flex flex-col items-center text-center gap-4">
        {profile.avatar && (
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={96}
            height={96}
            className="rounded-full border border-neutral-800 shadow-sm object-cover"
            priority
          />
        )}
        <h1 className="text-2xl font-semibold tracking-tight">
          {profile.name}
        </h1>
        {profile.tagline && (
          <p className="text-sm text-neutral-400 max-w-sm">{profile.tagline}</p>
        )}
        {!!socialLinks.length && (
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {socialLinks.map((s) => (
              <SocialIcon key={s.platform} {...s} />
            ))}
          </div>
        )}
      </section>
      <section className="mt-8 space-y-6">
        {categories
          .filter((c) => !c.hidden && c.links.length)
          .map((c) => (
            <div key={c.id}>
              <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 mb-2">
                {c.title}
              </h2>
              <ul className="space-y-3">
                {c.links.map((link) => (
                  <li key={link.url}>
                    <LinkCard {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>
    </main>
  );
}

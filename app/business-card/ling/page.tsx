"use client";

import Image from "next/image";
import s from "./page.module.css";

const card = {
  name: "Jane Doe",
  title: "Master's Student",
  university: "National Taiwan University",
  universityLogo:
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/National_Taiwan_University_seal.svg/120px-National_Taiwan_University_seal.svg.png",
  lab: "Phonetics & Phonology Lab",
  phone: "+1 234 567 8900",
  email: "jane@example.com",
  website: "https://janedoe.dev",
  linkedin: "linkedin.com/in/janedoe",
  github: "github.com/janedoe",
  location: "Taipei, Taiwan",
  interests: ["Phonology", "Computational Linguistics", "Language Acquisition"],
};

const icons: Record<string, string> = {
  phone: "📞", email: "✉️", website: "🌐",
  linkedin: "💼", github: "🐙", location: "📍",
};

const linkFields = new Set(["website", "linkedin", "github", "email", "phone"]);

function getHref(key: string, value: string) {
  if (key === "email") return `mailto:${value}`;
  if (key === "phone") return `tel:${value.replace(/\s/g, "")}`;
  return value.startsWith("http") ? value : `https://${value}`;
}

function downloadVCard() {
  const lines = [
    "BEGIN:VCARD", "VERSION:3.0",
    `FN:${card.name}`,
    card.title ? `TITLE:${card.title}` : "",
    card.university
      ? `ORG:${card.lab ? card.lab + ";" : ""}${card.university}`
      : "",
    card.phone ? `TEL:${card.phone}` : "",
    card.email ? `EMAIL:${card.email}` : "",
    card.website
      ? `URL:${card.website.startsWith("http") ? card.website : "https://" + card.website}`
      : "",
    card.location ? `ADR:;;${card.location};;;;` : "",
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");

  const a = document.createElement("a");
  a.href = "data:text/vcard;charset=utf-8," + encodeURIComponent(lines);
  a.download = card.name.replace(/\s+/g, "_") + ".vcf";
  a.click();
}

const fallbackInitials = card.university
  ? card.university.split(" ").map((w) => w[0]).join("").slice(0, 4)
  : "U";

export default function BusinessCardLing() {
  return (
    <div className={s.body}>
      <div className={s.card}>
        <div className={s.name}>{card.name}</div>
        <div className={s.title}>{card.title}</div>

        {card.university && (
          <div className={s.affiliation}>
            {card.universityLogo ? (
              <Image
                className={s.uniLogo}
                src={card.universityLogo}
                alt={card.university}
                width={32}
                height={32}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className={s.uniLogoFallback}>{fallbackInitials}</div>
            )}
            <div className={s.uniText}>
              <span className={s.uniName}>{card.university}</span>
              {card.lab && <span className={s.labName}>{card.lab}</span>}
            </div>
          </div>
        )}

        <hr className={s.divider} />

        <div className={s.info}>
          {(["phone", "email", "website", "linkedin", "github", "location"] as const).map(
            (key) => {
              const value = card[key];
              if (!value) return null;
              return (
                <div key={key} className={s.row}>
                  <span className={s.icon}>{icons[key]}</span>
                  {linkFields.has(key) ? (
                    <a href={getHref(key, value)} target="_blank" rel="noreferrer">
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              );
            }
          )}
        </div>

        {card.interests.length > 0 && (
          <>
            <div className={s.interestsLabel}>Research Interests</div>
            <div className={s.interests}>
              {card.interests.map((i) => (
                <span key={i} className={s.tag}>{i}</span>
              ))}
            </div>
          </>
        )}

        <button className={s.saveBtn} onClick={downloadVCard}>
          ⬇ Save Contact (.vcf)
        </button>
      </div>
    </div>
  );
}
